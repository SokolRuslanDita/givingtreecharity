$(document).ready(function() {
    if ($('.slider-logo').length > 0) {
        const splide = new Splide('.slider-logo', {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            gap: 40,
            perPage: 7,
            pagination: false,
            autoScroll: {
                speed: 0.3,
            },
            breakpoints: {
                1199: {
                    perPage: 5,
                },
                768: {
                    perPage: 3,
                },
                480: {
                    perPage: 2,
                },
            },
        });

        splide.mount(window.splide.Extensions);
    }
});

$(document).ready(function() {
    if ($('.splider-people').length > 0) {
        const splide = new Splide('.splider-people', {
            type: 'loop',
            focus: 'center',
            perPage: 3,
            pagination: false,
            gap: 32,
            autoScroll: {
                speed: 0.3,
            },
            breakpoints: {
                1199: {
                    perPage: 3,
                },
                768: {
                    perPage: 2,
                },
                480: {
                    perPage: 1,
                },
            },
        });
        splide.mount();
    }
});

$(document).ready(function() {
    if (window.innerWidth < 991) {
            $('.brix---hamburger-menu-wrapper-2').on('click', function() {
                $('body').toggleClass('overflow');
                      });
            $('.brix---header-nav-link-2').on('click', function() {
                console.log('Click on .brix-header-nav-link-2');
                $('.w-nav-button').click();
            });
            $('.brix---header-nav-list-item-2').on('click', function() {
                console.log('Click on .brix-header-nav-link-2');
                $('.w-nav-button').click();
            });
    }
});

$(document).ready(function() {
    $('.brix-header-nav-link-2').on('click', function() {
        console.log('Click on .brix-header-nav-link-2');
        $('.w-nav-button').click();
    });
});
$(document).ready(function() {
    $('a[href^="#"]').on('click', function (e) {
        let link = $(this).attr('href'),
            el = $(document).find(link);
        if (el.length > 0) {
            el = el.eq(0).offset().top;
            $('html, body').animate({
                scrollTop: el - 100 + 'px'
            }, 300, 'linear');
        }
        return false;
    });
});
