document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.project-card').forEach(card => {

    const linkElement = card.querySelector('a');
    const link = linkElement ? linkElement.href : card.dataset.link;

    const full = card.querySelector('.full-overlay');
    const caption = card.querySelector('.caption-overlay');

    let autoTimer = null;
    let outsideHandler = null;


    /* ----------------------------------------------------
       🔥 تغییر مهم شماره ۱:
       closeOverlay خارج از رویداد تعریف شد
       تا removeEventListener درست کار کند و نسخه تکراری ساخته نشود
    ---------------------------------------------------- */
    function closeOverlay() {
      full.classList.remove('open');
      caption.classList.remove('caption-hidden');

      if (autoTimer) clearTimeout(autoTimer);
      autoTimer = null;

      if (outsideHandler) {
        document.removeEventListener('click', outsideHandler);
        outsideHandler = null;
      }
    }


    card.addEventListener('click', function (e) {

      /* ----------------------------------------------------
         🔥 تغییر مهم شماره ۲:
         اگر روی لینک کلیک شد → اجازه رفتار طبیعی
      ---------------------------------------------------- */
      if (e.target.closest('a')) {
        return;
      }


      const isOpen = full.classList.contains('open');


      /* ----------------------------------------------------
         🔥 حالت ۱: overlay بسته است → باز کردن آن
      ---------------------------------------------------- */
      if (!isOpen) {
        e.preventDefault();

        /* 🔥 تغییر مهم شماره ۳:
           جلوگیری از bubble شدن کلیک به document
           که باعث بسته شدن overlay بعد از باز شدن می‌شد
        */
        e.stopPropagation();

        full.classList.add('open');
        caption.classList.add('caption-hidden');

        // Auto-close timer
        if (autoTimer) clearTimeout(autoTimer);
        autoTimer = setTimeout(closeOverlay, 2500);

        /* ----------------------------------------------------
           🔥 تغییر مهم شماره ۴:
           ثبت هندلر بیرون کارت فقط یک نسخه
        ---------------------------------------------------- */
        outsideHandler = function (ev) {
          if (!card.contains(ev.target)) {
            closeOverlay();
          }
        };

        // جلوگیری از اجرا شدن فوری هندلر جدید
        setTimeout(() => {
          document.addEventListener('click', outsideHandler);
        }, 0);

        return;
      }


      /* ----------------------------------------------------
         🔥 حالت ۲: overlay باز است → رفتن به لینک
      ---------------------------------------------------- */
      if (isOpen) {
        window.location.href = link;
      }

    }); // پایان رویداد کلیک کارت

  }); // پایان forEach کارت‌ها

}); // پایان DOMContentLoaded
