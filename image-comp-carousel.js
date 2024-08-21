document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    document.querySelectorAll('.swiper-slide').forEach(slide => {
        const slider = slide.querySelector('.slider');
        const beforeImg = slide.querySelector('.img-compare-before');
        const sliderLine = slide.querySelector('.slider-line');
        const sliderIcon = slide.querySelector('.slider-icon');
        const beforeLabel = slide.querySelector('.img-label-before');
        const afterLabel = slide.querySelector('.img-label-after');

        slider.addEventListener('input', (e) => {
            let value = e.target.value + '%';
            beforeImg.style.clipPath = `inset(0 ${100 - e.target.value}% 0 0)`;
            sliderLine.style.left = value;
            sliderIcon.style.left = value;

            let afterOpacity = (100 - e.target.value) / 100;
            let beforeOpacity = e.target.value / 100;

            beforeLabel.style.opacity = beforeOpacity;
            afterLabel.style.opacity = afterOpacity;

            beforeLabel.style.display = beforeOpacity > 0 ? 'block' : 'none';
            afterLabel.style.display = afterOpacity > 0 ? 'block' : 'none';
        });
    });
});
