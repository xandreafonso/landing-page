(function () {
  'use strict';

  function initWordReveal() {
    var section = document.querySelector('.word-reveal-section');
    if (!section) return;

    var cells = section.querySelectorAll('.word-reveal-cell');
    var textEl = section.querySelector('[data-word-reveal]');
    if (!textEl) return;

    // Split text into words wrapped in spans
    var text = textEl.textContent.trim();
    var words = text.split(/\s+/);
    textEl.innerHTML = '';
    words.forEach(function (word, i) {
      var span = document.createElement('span');
      span.className = 'word-reveal-word';
      span.textContent = word;
      span.style.transition = 'color 400ms ease';
      span.style.color = 'rgba(255, 255, 255, 0.15)';
      textEl.appendChild(span);
      if (i < words.length - 1) {
        textEl.appendChild(document.createTextNode(' '));
      }
    });

    var wordSpans = textEl.querySelectorAll('.word-reveal-word');

    function revealByScroll() {
      var rect = section.getBoundingClientRect();
      var viewportHeight = window.innerHeight;
      var progress = 1 - (rect.top / viewportHeight);
      progress = Math.max(0, Math.min(1, progress));

      var wordsToShow = Math.floor(progress * wordSpans.length);
      wordSpans.forEach(function (span, i) {
        if (i < wordsToShow) {
          span.style.color = 'rgba(255, 255, 255, 1)';
        } else {
          span.style.color = 'rgba(255, 255, 255, 0.15)';
        }
      });

      // Also reveal nearby grid cells based on progress
      if (cells.length) {
        var centerIndex = Math.floor(progress * cells.length);
        var range = Math.floor(cells.length * 0.1);
        cells.forEach(function (cell, i) {
          var dist = Math.abs(i - centerIndex);
          if (dist < range) {
            cell.classList.add('is-active');
          } else {
            cell.classList.remove('is-active');
          }
        });
      }
    }

    window.addEventListener('scroll', revealByScroll);
    revealByScroll();
  }

  document.addEventListener('DOMContentLoaded', initWordReveal);
})();