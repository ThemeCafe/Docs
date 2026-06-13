document$.subscribe(() => {
    if (window.splideInst) {
        window.splideInst.destroy(true);
        window.splideInst = null;
    }

    const carousel = document.querySelector('#image-carousel');
    if (!carousel) return;

    window.splideInst = new Splide(carousel, {
        type: 'loop',
        perPage: 6,
        arrows: false,
        pagination: false,
        autoScroll: {
            speed: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
        },
        breakpoints: {
            2000: { perPage: 5, },
            1600: { perPage: 4, },
            1000: { perPage: 2, },
        },
    });

    window.splideInst.mount({
        AutoScroll: window.splide.Extensions.AutoScroll,
    });
});
