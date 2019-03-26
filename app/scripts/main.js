anime({
    targets: '#building1',
    translateY: [{
        value: [100, 0],
        duration: 400,
        easing: 'easeOutCubic',
    }]
})

anime({
    targets: '#building2',
    translateY: [{
        value: [200, 0],
        duration: 400,
        delay: 50,
        easing: 'easeOutCubic',
    }]
})

anime({
    targets: '#building3',
    translateY: [{
        value: [300, 0],
        duration: 400,
        delay: 100,
        easing: 'easeOutCubic',
    }]
})

anime({
    targets: '#logo',
    translateY: [{
        value: [200, 0],
        duration: 400,
        delay: 100,
        easing: 'easeOutCubic',
    }]
})

window.addEventListener('load', function () {
    var faqCloseButton = document.querySelector('#faq-close-button');
    var faqWrapper = document.querySelector('#faq-wrapper');
    var faqAnchor = document.querySelector('#faq-anchor');
    var applyButton = document.querySelector('#apply-button');
    var svgMask = document.querySelector('.svg-mask');

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        $("#building1").css("transform", "translateY(-" + scroll * 0.08 + "px)");
        $("#building2").css("transform", "translateY(-" + scroll * 0.18 + "px)");
        $("#building3").css("transform", "translateY(-" + scroll * 0.32 + "px)");
    });

    applyButton.addEventListener('mouseover', function () {
        svgMask.classList.add('open')
    })

    applyButton.addEventListener('mouseout', function () {
        svgMask.classList.remove('open')
    })

    faqAnchor.onclick = function () {
        faqWrapper.classList.add('open');
        document.body.classList.add('open');

        anime({
            targets: '#faq .section__heading',
            opacity: [{
                value: [0.2, 1],
                duration: 600,
                easing: 'easeOutSine',
            }],
            translateY: [{
                value: [60, 0],
                duration: 800,
                easing: 'easeOutExpo',
            }, ],
        })

        anime({
            targets: '.faq__list',
            opacity: [{
                value: [0.2, 1],
                duration: 800,
                easing: 'easeOutSine',
                autoplay: false
            }],
            translateY: [{
                delay: 50,
                value: [60, 0],
                duration: 600,
                easing: 'easeOutExpo',
                autoplay: false
            }, ],
        })

    };

    faqCloseButton.addEventListener('click', function () {
        setTimeout(function () {
            faqWrapper.classList.remove('open');
            document.body.classList.remove('open');
        }, 300)

        anime({
            targets: '#faq .section__heading',
            opacity: [{
                value: [1, 0],
                duration: 600,
                easing: 'easeOutSine',
            }],
            translateY: [{
                value: [0, 60],
                duration: 800,
                easing: 'easeOutExpo',
            }, ],
        })

        anime({
            targets: '#faq .section__heading',
            opacity: [{
                delay: 100,
                duration: 600,
                easing: 'easeOutSine',
                value: [1, 0.2],
            }],
            translateY: [{
                value: [0, 60],
                delay: 50,
                duration: 800,
                easing: 'easeOutExpo',
            }, ],
        })

        anime({
            targets: '.faq__list',
            opacity: [{
                value: [1, 0.2],
                duration: 400,
                easing: 'easeOutSine',
            }],
            translateY: [{
                value: [0, 60],
                duration: 600,
                easing: 'easeOutExpo',
            }, ],
        })
    })
})