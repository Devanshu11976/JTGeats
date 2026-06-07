/* =============================================================
   JTGeats — script.js
   ============================================================= */

/* ─────────────────────────────────────────────────────────────
   TABLE OF CONTENTS
   0. Mobile nav hamburger
   1. Modal
   2. Carousel (Swiper)
   3. Video
   4. Card quantity counter
───────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {


  /* ═══════════════════════════════════════════════════════════
     0. MOBILE NAV HAMBURGER
  ═══════════════════════════════════════════════════════════ */
  const hamburger = document.getElementById('navHamburger');
  const navRight  = document.getElementById('navRight');

  if (hamburger && navRight) {
    hamburger.addEventListener('click', function () {
      const isOpen = navRight.classList.toggle('nav__right--open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      hamburger.classList.toggle('nav__hamburger--open', isOpen);
      /* Lock/unlock body scroll when mobile nav is open */
      document.body.classList.toggle('no-scroll', isOpen);
    });

    /* Close helper — shared by all close paths */
    function closeNav() {
      navRight.classList.remove('nav__right--open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('nav__hamburger--open');
      document.body.classList.remove('no-scroll');
    }

    /* Close on nav link click (mobile UX) */
    navRight.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    /* Close on outside click */
    document.addEventListener('click', function (event) {
      if (
        navRight.classList.contains('nav__right--open') &&
        !navRight.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        closeNav();
      }
    });

    /* Close on Escape key */
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navRight.classList.contains('nav__right--open')) {
        closeNav();
        hamburger.focus();
      }
    });
  }


  /* ═══════════════════════════════════════════════════════════
     1. MODAL
  ═══════════════════════════════════════════════════════════ */

  /* ── Element refs ── */
  const modalOverlay = document.getElementById('modalOverlay');
  const openModalBtn = document.getElementById('openModalBtn');
  const modalCancel  = document.getElementById('modalCancel');
  const modalSubmit  = document.getElementById('modalSubmit');

  /* ── Open / close helpers ── */
  function openModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    /* Move focus to first focusable element inside modal */
    const firstFocusable = getFocusableElements()[0];
    if (firstFocusable) firstFocusable.focus();
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    /* Return focus to the trigger button */
    if (openModalBtn) openModalBtn.focus();
  }

  /* ── Focus trap helpers ── */
  function getFocusableElements() {
    if (!modalOverlay) return [];
    return Array.from(
      modalOverlay.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  function trapFocus(event) {
    if (!modalOverlay || !modalOverlay.classList.contains('active')) return;
    const focusable = getFocusableElements();
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        /* Shift+Tab — wrap to last */
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else {
        /* Tab — wrap to first */
        if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
  }

  /* ── Event listeners ── */
  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (modalCancel)  modalCancel.addEventListener('click', closeModal);
  if (modalSubmit)  modalSubmit.addEventListener('click', closeModal);

  /* ── Close on overlay backdrop click ── */
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (event) {
      if (event.target === modalOverlay) closeModal();
    });
  }

  /* ── Escape closes modal + Tab is trapped inside ── */
  document.addEventListener('keydown', function (event) {
    if (!modalOverlay || !modalOverlay.classList.contains('active')) return;
    if (event.key === 'Escape') {
      closeModal();
      return;
    }
    trapFocus(event);
  });


  /* ═══════════════════════════════════════════════════════════
     2. CAROUSEL (Swiper)
  ═══════════════════════════════════════════════════════════ */
  if (typeof Swiper !== 'undefined' && document.querySelector('.popular__swiper')) {
    var popularSwiper = new Swiper('.popular__swiper', {
      slidesPerView: 1,
      spaceBetween: 35,
      centeredSlides: false,
      loop: false,
      grabCursor: true,
      speed: 400,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      navigation: {
        nextEl: '#popularNext',
        prevEl: '#popularPrev',
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      breakpoints: {
        768: {
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 45,
        },
      },
    });
  }


  /* ═══════════════════════════════════════════════════════════
     3. VIDEO
  ═══════════════════════════════════════════════════════════ */

  /* ── Element refs ── */
  const video   = document.getElementById('foodVideo');
  const playBtn = document.getElementById('videoPlayBtn');

  /* ── Toggle play/pause ── */
  function togglePlay() {
    if (!video) return;
    if (video.paused) {
      video.play();
      if (playBtn) {
        playBtn.classList.add('hidden');
        playBtn.setAttribute('aria-label', 'Pause video');
      }
    } else {
      video.pause();
      if (playBtn) {
        playBtn.classList.remove('hidden');
        playBtn.setAttribute('aria-label', 'Play video');
      }
    }
  }

  /* ── Event listeners ── */
  if (video) {
    video.addEventListener('click', togglePlay);
    /* Restore play button when video ends */
    video.addEventListener('ended', function () {
      if (playBtn) {
        playBtn.classList.remove('hidden');
        playBtn.setAttribute('aria-label', 'Play video');
      }
    });
  }
  if (playBtn) playBtn.addEventListener('click', togglePlay);


  /* ═══════════════════════════════════════════════════════════
     4. CARD QUANTITY COUNTER
  ═══════════════════════════════════════════════════════════ */

  /* ── Build qty markup ── */
  function createQtyMarkup() {
    const wrapper = document.createElement('div');
    wrapper.className = 'food-card__qty';
    wrapper.setAttribute('role', 'group');
    wrapper.setAttribute('aria-label', 'Quantity selector');
    wrapper.innerHTML = `
      <button type="button" class="qty__btn qty__btn--minus" aria-label="Decrease quantity">−</button>
      <span class="qty__count" aria-live="polite" aria-atomic="true">1</span>
      <button type="button" class="qty__btn qty__btn--plus" aria-label="Increase quantity">+</button>
    `;
    return wrapper;
  }

  /* ── Delegated click handler ── */
  document.addEventListener('click', function (event) {

    /* Add button → replace with qty counter */
    const addButton = event.target.closest('.food-card__add');
    if (addButton) {
      const meta = addButton.closest('.food-card__meta');
      if (!meta) return;
      addButton.remove();
      meta.appendChild(createQtyMarkup());
      return;
    }

    /* Plus button → increment */
    const plusButton = event.target.closest('.qty__btn--plus');
    if (plusButton) {
      const qtyContainer = plusButton.closest('.food-card__qty');
      const countSpan = qtyContainer ? qtyContainer.querySelector('.qty__count') : null;
      if (!countSpan) return;
      countSpan.textContent = String(parseInt(countSpan.textContent || '1', 10) + 1);
      return;
    }

    /* Minus button → decrement or restore add button */
    const minusButton = event.target.closest('.qty__btn--minus');
    if (minusButton) {
      const qtyContainer = minusButton.closest('.food-card__qty');
      const meta        = qtyContainer ? qtyContainer.closest('.food-card__meta') : null;
      const countSpan   = qtyContainer ? qtyContainer.querySelector('.qty__count') : null;
      if (!qtyContainer || !meta || !countSpan) return;

      const count = parseInt(countSpan.textContent || '1', 10);
      if (count > 1) {
        countSpan.textContent = String(count - 1);
      } else {
        qtyContainer.remove();
        const addBtn = document.createElement('button');
        addBtn.type = 'button';
        addBtn.className = 'food-card__add';
        addBtn.setAttribute('aria-label', 'Add to cart');
        addBtn.innerHTML = '<img src="assets/plus.svg" width="10" height="10" alt="" />';
        meta.appendChild(addBtn);
      }
    }

  });


}); /* end DOMContentLoaded */
