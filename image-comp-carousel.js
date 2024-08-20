document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentIndex = 0;

    // Initialize dots
    carouselItems.forEach((item, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const updateDots = () => {
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    const goToSlide = (index) => {
        currentIndex = index;
        carouselWrapper.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        goToSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        goToSlide(currentIndex);
    };

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Initialize the image comparison sliders
    document.querySelectorAll('.slider').forEach((slider) => {
        let container = slider.closest('.img-compare-container');
        let beforeImg = container.querySelector('.img-compare-before');
        let sliderLine = container.querySelector('.slider-line');
        let sliderIcon = container.querySelector('.slider-icon');
        let beforeLabel = container.querySelector('.img-label-before');
        let afterLabel = container.querySelector('.img-label-after');

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
