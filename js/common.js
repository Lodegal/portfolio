(function ($) {

    "use strict";

    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight,

        hue = 217,
        stars = [],
        count = 0,
        maxStars = 1400;

    var canvas2 = document.createElement('canvas'),
        ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    var half = canvas2.width/2,
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    function random(min, max) {
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }

        if (min > max) {
            var hold = max;
            max = min;
            min = hold;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x,y) {
        var max = Math.max(x,y),
            diameter = Math.round(Math.sqrt(max*max + max*max));
        return diameter/2;
    }

    var Star = function() {

        this.orbitRadius = random(maxOrbit(w,h));
        this.radius = random(60, this.orbitRadius) / 12;
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / 50000;
        this.alpha = random(2, 10) / 10;

        count++;
        stars[count] = this;
    };

    Star.prototype.draw = function() {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            twinkle = random(10);

        if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        this.timePassed += this.speed;
    };

    for (var i = 0; i < maxStars; i++) {
        new Star();
    }

    function animation() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, w, h)

        ctx.globalCompositeOperation = 'lighter';
        for (var i = 1, l = stars.length; i < l; i++) {
            stars[i].draw();
        }

        window.requestAnimationFrame(animation);
    }

    animation();

    $(window).on('load', function() {
        setTimeout(function() {
            $('.js-preloader').fadeOut('slow');
        }, 5500);
    });

    var counter = 0;
    var c = 0;
    var i = setInterval(function(){
        $(".counter h1").html(c + "%");
        $(".counter hr").css("width", c + "%");
        counter++;
        c++;
        if(counter > 100) {
            clearInterval(i);
        }
    }, 50);

    $(document).ready(function() {
        $('.link').click(function () {
           var location =  $(this).attr('href');
           $(location).find('.page--slider__img').find('img').css({
               'animation-play-state' : 'running'
           });
            $('.page').css({
                'backgroundColor' : 'transparent'
            })
        });
        $('.page').click(function () {
            $(this).find('.page--slider__img').find('img').css({
                'animation-play-state' : 'running'
            });
            $('.page').css({
                'backgroundColor' : 'transparent'
            })
        });
        $('.menu-button').click(function(){
            if($('.menu-button').hasClass('menu-button--open')) {
                $('.page--slider__img').find('img').css({
                    'animation-play-state' : 'paused'
                })
                $('.page').css({
                    'backgroundColor' : 'rgba(72,72,72,0.5)'
                })
            } else {
                $('.page').siblings().not('.page--inactive').find('.page--slider__img').find('img').css({
                    'animation-play-state' : 'running'
                })
                $('.page').css({
                    'backgroundColor' : 'transparent'
                })
            }
        });
        function countUp(el) {
            if($(el).attr('id') == 'page-about' || $(el).attr('href') == '#page-about') {
                $('.progress-bar').each(function(){
                    if(!$(this).hasClass('active')) {
                        $(this).addClass('active');
                        var countTo =   $(this).attr('data-num');
                        $(this).find('.progress-bar__strip').height(countTo + '%');
                        var $this = $(this).find('.progress-bar__percent');
                        var title = $(this).find('.progress-bar__title').text();
                        $({ countNum: $this.text()}).animate({
                                countNum: countTo
                            },
                            {
                                duration: 4000,
                                easing:'linear',
                                step: function() {
                                    $this.text(Math.floor(this.countNum) + '%' + ' ' + title);
                                },
                                complete: function() {
                                    $this.text(this.countNum + '%' + ' ' + title);
                                    //alert('finished');
                                }

                            });
                    }
                })
            }
        }
        $('.link , .page').click(function(){
            countUp(this)
        })
    });
}(jQuery));