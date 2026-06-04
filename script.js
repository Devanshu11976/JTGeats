/* =============================================================
   JTGeats — script.js
   ============================================================= */

/* ─────────────────────────────────────────────────────────────
   TABLE OF CONTENTS
   1. Landing-only mode
   2. Modal
   3. Carousel (Swiper)
   4. Video
   5. Card quantity counter
───────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {


  /* ═══════════════════════════════════════════════════════════
     1. LANDING-ONLY MODE
  ═══════════════════════════════════════════════════════════ */
  const url = new URL(window.location.href);
  if (url.searchParams.get('pixelTest') === '1' || url.searchParams.get('landing') === '1') {
    document.body.classList.add('landing-only');
  }


  /* ═══════════════════════════════════════════════════════════
     2. MODAL
  ═══════════════════════════════════════════════════════════ */

  /* ── Element refs ── */
  const modalOverlay = document.getElementById('modalOverlay');
  const openModalBtn = document.getElementById('openModalBtn');
  const modalCancel = document.getElementById('modalCancel');
  const modalSubmit = document.getElementById('modalSubmit');
  const body = document.body;

  /* ── Open / close helpers ── */
  function openModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.add('active');
    body.classList.add('no-scroll');
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    body.classList.remove('no-scroll');
  }

  /* ── Event listeners ── */
  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (modalCancel) modalCancel.addEventListener('click', closeModal);
  if (modalSubmit) modalSubmit.addEventListener('click', closeModal);

  /* ── Close on overlay click ── */
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (event) {
      if (event.target === modalOverlay) closeModal();
    });
  }


  /* ═══════════════════════════════════════════════════════════
     3. CAROUSEL (Swiper)
  ═══════════════════════════════════════════════════════════ */
  if (typeof Swiper !== 'undefined' && document.querySelector('.popular__swiper')) {
    new Swiper('.popular__swiper', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 24,
      loop: true,
      grabCursor: true,
      speed: 600,

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: '#popularNext',
        prevEl: '#popularPrev',
      },

      breakpoints: {
        480: { slidesPerView: 1, slidesPerGroup: 1 },
        768: { slidesPerView: 2, slidesPerGroup: 1 },
        1024: { slidesPerView: 3, slidesPerGroup: 1 },
      },
    });
  }


  /* ═══════════════════════════════════════════════════════════
     4. VIDEO
  ═══════════════════════════════════════════════════════════ */

  /* ── Element refs ── */
  const video = document.getElementById('mainVideo');
  const playIcon = document.getElementById('playIcon');

  /* ── Toggle play/pause ── */
  function togglePlay() {
    if (!video || !playIcon) return;
    if (video.paused) {
      video.play();
      playIcon.classList.add('hidden');
    } else {
      video.pause();
      playIcon.classList.remove('hidden');
    }
  }

  /* ── Event listeners ── */
  if (video) video.addEventListener('click', togglePlay);
  if (playIcon) playIcon.addEventListener('click', togglePlay);


  /* ═══════════════════════════════════════════════════════════
     5. CARD QUANTITY COUNTER
  ═══════════════════════════════════════════════════════════ */

  /* ── Build qty markup ── */
  function createQtyMarkup() {
    const wrapper = document.createElement('div');
    wrapper.className = 'food-card__qty';
    wrapper.innerHTML = `
      <button class="qty__btn qty__btn--minus">−</button>
      <span class="qty__count">1</span>
      <button class="qty__btn qty__btn--plus">+</button>
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
      const meta = qtyContainer ? qtyContainer.closest('.food-card__meta') : null;
      const countSpan = qtyContainer ? qtyContainer.querySelector('.qty__count') : null;
      if (!qtyContainer || !meta || !countSpan) return;

      const count = parseInt(countSpan.textContent || '1', 10);
      if (count > 1) {
        countSpan.textContent = String(count - 1);
      } else {
        qtyContainer.remove();
        const addBtn = document.createElement('button');
        addBtn.className = 'food-card__add';
        addBtn.innerHTML = '<img src="assets/plus.svg" alt="Add" />';
        meta.appendChild(addBtn);
      }
    }

  });


}); /* end DOMContentLoaded */