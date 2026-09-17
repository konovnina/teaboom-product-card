document.addEventListener('DOMContentLoaded', function () {
    const buttons = Array.from(document.querySelectorAll('.package-options__button'));
    const productPrice = document.getElementById('product-price');
    const productOldPrice = document.getElementById('product-old-price');
    const productArticle = document.getElementById('product-article');

    if (!buttons.length) return;

    function setActive(btn) {
        buttons.forEach(b => {
            b.classList.toggle('is-active', b === btn);
            b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });

        const price = btn.dataset.price || '';
        const old = btn.dataset.oldPrice || '';
        const article = btn.dataset.article || '';

        if (productPrice) productPrice.textContent = price;
        if (productOldPrice) productOldPrice.textContent = old;
        if (productArticle) productArticle.textContent = article;
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => setActive(btn));
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });


    const initial = buttons.find(b => b.classList.contains('is-active')) || buttons[0];
    if (initial) setActive(initial);
});