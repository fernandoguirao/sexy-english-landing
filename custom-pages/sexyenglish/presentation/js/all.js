$(document).ready(function() {
	
	$('.show-suscribe').click(function(){
  	$('.subscribe-form').css({'bottom':'0','opacity':'1'});
  	$('#theinput').focus();
  	$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	
	$('.no-thanks').click(function(){
  	$('.subscribe-form').css({'bottom':'-400px','opacity':'0'});
  	$('#theinput').val('');
	});
	if (window.isMobile){
		$('body').addClass('mobile');
	}
	
	//resize video
    $('.video').height($(window).height());
    $(window).resize(function() {
        $('.video').height($(window).height());
    });
	
	//show the icon
    $('.video .cont').addClass('visible');

	//show the beauty
    setTimeout(function() {
        $('.video .sdf, .video .suys, .video .arrow').addClass('visible');
    }, 2000);

    
	//bg video
    $.backgroundVideo($('#bgVideo'), {
        "align": "centerXY",
		 "path": "custom-pages/sexyenglish/common-files/media/",
        "width": 846,
        "height": 476,
        "filename": "sexy",
        "types": ["mp4", "ogg", "webm"]
    });
	
    //play video
    $('.video .play').click(function() {
        //stop the video
		if (!window.isMobile){
			$('body').addClass('noscroll').append('<div class="previewer"><div><iframe src="//player.vimeo.com/video/81676731?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>');
	
			//pause video
			$('body').addClass('paused');
			
			$('.previewer').click(function() {
				$('body').removeClass('noscroll');
				$(this).remove();
				
				//play video back
				$('body').removeClass('paused');
			});
			return false;
		}
    });
	
	//hide video when tab inactive 
	var isActive = true;;
	
	window.onfocus = function () { isActive = true; }; 
	window.onblur = function () { isActive = false; }; 
	
	setInterval(function () { 
		paused = $('body').hasClass('paused');
		if ((isActive)&&(!paused)){
			$('#video_background').get(0).play();	
		} else {
			$('#video_background').get(0).pause();
		}
	}, 500);
	
    //hide video on scroll
    $(document).scroll(function() {
    	if ($(document).scrollTop() > $(window).height() - 50) {
    		$('body').addClass('paused');
    	} else {
    		if ($('body').hasClass('paused')){
    			$('body').removeClass('paused');
    		}
    	}
    }); 
	
	
	
    //top slider
	if (!window.isMobile){
		var topSliderWr = $('#topSlider-wrapper');
		if (topSliderWr.length > 0) {
			var topSlider = $('#topSlider', topSliderWr).bxSlider({
				'controls': false,
				'pagerCustom': '#topSlider-wrapper #topSliderCtrl',
				'easing': 'ease-in-out',
				'adaptiveHeight': false,
				'infiniteLoop': false
			});
		}
	
		$('#topSliderCtrl li:last-child a').click(function() {
			$('#topSliderCtrl').addClass('white');
		});
	
		$('#topSliderCtrl li:not(:last-child) a').click(function() {
			$('#topSliderCtrl').removeClass('white');
		});
	}
		

    //hide menu
    var lastScrollTop, incr = 0;
    var startsOn = 0;
    var menuSpace = 50;
    var menuBack = 40;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > startsOn) {
            if (st > lastScrollTop){
            	incr++;
            	if (incr >= menuSpace){
            		$('#upper-menu-container').addClass('hide');
            		incr = menuSpace;
            	}
            } else {
            	incr -= 1;
            	if (incr <= 10){
            		$('#upper-menu-container').removeClass('hide');
            		incr = 0;
            	}
            }
        } else {
            $('#upper-menu-container').removeClass('hide');
        }
        lastScrollTop = st;
    });

    //dof
    var holder = $('.dof .background');
    var offset = 0;
    var sizePic = 3;

    $('.dof').mousemove(function(e) {

        var y = e.pageY - this.offsetTop;
        var sHeight = holder.outerHeight();

        var y = y - sHeight * offset;
        var sHeight = sHeight - (sHeight * offset * 2);

        if (y >= sHeight)
            y = sHeight;

        var rounded = roundNum((y / sHeight) * (sizePic - 1));
        var hovered = Math.ceil(rounded);

        if (window.oldHovered != rounded) {

            holder.find('*').each(function(index) {
                
                 if (index >= hovered){
                 holder.find('.layer'+index).css('opacity',1);
                 } else {
                 holder.find('.layer'+index).css('opacity',0);
                 }

                if (!$.browser.msie) {
                    var halfOfWay = hovered + 0;
                    var backOpacity = roundNum(hovered - rounded);

                    if (halfOfWay != sizePic) {
                        holder.find('.layer' + halfOfWay).css('opacity', backOpacity);
                    }

                    var maxblur = 6;
                    var centerPos = roundNum(Math.abs(1 - (rounded / (sizePic - 1)) * 2));
                    var blurIt = roundNum(maxblur * centerPos);

                    $('.dof .text-block').attr('style', '-webkit-filter:blur(' + blurIt + 'px);-ms-filter:blur(' + blurIt + 'px);-o-filter:blur(' + blurIt + 'px);filter:blur(' + blurIt + 'px);');
                }
            });
        }
    });

    //component grid
    var componentGrid = $('#component-grid');
    var samplesGrid = $('#samples-grid');
	
	setInterval(function(){
		componentGrid.masonry({itemSelector: '.screen'});
		samplesGrid.masonry({itemSelector: '.screen'});
	}, 3000);
	
    //show images on scroll
	if (!window.isMobile){
		$(document).scroll(function() {
			var speed = 2;
			var offsetSize = 200;
			var samplesCont = $('.samples .holder').offset();
/*
			var componentsCont = $('.components .holder').offset();
			var posFromTop = componentsCont.top - $(window).height() + offsetSize;
*/
			
			
/*
			if ($(document).scrollTop() >= componentsCont.top - $(window).height() + 200) {
				componentGrid.masonry({itemSelector: '.screen'});
			}
*/
			if ($(document).scrollTop() >= samplesCont.top - $(window).height() + 200) {
				samplesGrid.masonry({itemSelector: '.screen'})
			}
			

/*
			if ($(document).scrollTop() >= componentsCont.top - $(window).height()/2) {
				if (!$('.components .holder').hasClass('shown')) {
					if ((!window.isMobile) && (!$.browser.mozilla)) {
						$('.components .screenshots .screen').each(function(index) {
							if (index >= 10) index = 10;
							var speed = index*0.5+"s";
							$(this).css('-webkit-animation',"animatedIntro "+speed).css('-ms-animation',"animatedIntro "+speed).css("-o-animation", "animatedIntro "+speed).css("animation","animatedIntro "+speed);
						});
					}

					$('.components .holder').addClass('shown');
				}
			} 
*/
	
			//samples
			if ($(document).scrollTop() >= samplesCont.top - $(window).height()/2) {
				if (!$('.samples .holder').hasClass('shown')) {
	
					if ((!window.isMobile) && (!$.browser.mozilla)) {
						$('.samples .screenshots .screen').each(function(index) {
							if (index >= 10) index = 10;
							var speed = index*0.5+"s";
							$(this).css('-webkit-animation',"animatedIntro "+speed).css('-ms-animation',"animatedIntro "+speed).css("-o-animation", "animatedIntro "+speed).css("animation","animatedIntro "+speed);
						});
					}
					//finito
					$('.samples .holder').addClass('shown')
				}
			}
			
			
			//Hide comments
			var comments = $('.articles-container');
			var commentsCont = $('#content-wrapper').position();
			
			if ($(document).scrollTop() + $(window).height() >= commentsCont.top) { 
				$('.articles-container').css('display','block');
			} else {
				$('.articles-container').css('display','none');
			}
		
		});
	}


    //last slider
	var lastSliderWr = $('#lastBlock-wrapper');
	if (lastSliderWr.length > 0) {
		var lastSlider = $('#lastSlider', lastSliderWr).bxSlider({
			'controls': false,
			'pagerCustom': '#lastBlock-wrapper #lastBlockCtrl',
			'easing': 'ease-in-out',
			'adaptiveHeight': false,
			'infiniteLoop': false
		});
	}


    //galleryMode
    setInterval(function() {
        $('.moreThanImage .bg div.visible').removeClass('visible').nextOrFirst('div').addClass('visible');
        $('.showcase .bg div.visible').removeClass('visible').nextOrFirst('div').addClass('visible');
    }, 5000);

    //last slider
	$('#subMenuCtrl li').click(function() {
		var menuIndex = $('#subMenuCtrl li').index(this);
		$('#subMenuCtrl li span.selected').removeClass('selected');
		$('#subMenuCtrl li:eq(' + menuIndex + ') span').addClass('selected');
	
		$('#subMenu li.active').removeClass('active');
		$('#subMenu li:eq(' + menuIndex + ')').addClass('active');
	});
	
	$('#lastBlockCtrl .menuicon').hover(function() {
		$('#lastBlockCtrl').addClass('showmenu');
	});
	
	$('#lastBlockCtrl').mouseleave(function() {
		$('#lastBlockCtrl').removeClass('showmenu');
	});

    //sharre
/*
    $('.social .holder').sharrre({
		share: {
			googlePlus: true,
			facebook: true,
			twitter: true
		},
		buttons: {
			twitter: {
				custom: 'Sexy English: http://sexy-english.com/ Learn English... Be Sexy!',
				via: 'sexyenglishlearning',
				url: false
            }
		},
		template: '<div class="container"><div class="soc-item google"><a href=""><span class="name">Google +</span><span class="count">1,600</span></a></div>' +
                '<div class="soc-item-holder"><div class="soc-item twitter"><a href=""><span class="name">Twitter</span> <span class="count">1,600</span></a></div>' +
                '<div class="soc-item facebook"><a href=""><span class="name">Facebook</span> <span class="count">1,600</span></a></div></div></div>',
		urlCurl: 'http://dribbbleboard.com/js/sharrre.php',
		enableHover: false,
		className: '',
		render: function(api, options) {
			$(api.element).on('click', '.twitter', function() {
				api.openPopup('twitter');
			});
			$(api.element).on('click', '.facebook', function() {
				api.openPopup('facebook');
			});
			$(api.element).on('click', '.google', function() {
				api.openPopup('googlePlus');
			});
			$('.social .google .count').text(options.count.googlePlus);
			$('.social .twitter .count').text(options.count.twitter);
			$('.social .facebook .count').text(options.count.facebook);
			var summ = options.count.googlePlus + options.count.twitter + options.count.facebook;
			console.log("Shares summary: "+summ);
        }
    });
*/
		
	//FUNCTIONS	
		
    //round
    function roundNum(num) {
        num = Math.round(num * 50) / 50;
        return num;
    }

    //next or first? who knows...
    jQuery.fn.nextOrFirst = function(selector) { var next = this.next(selector); return (next.length) ? next : this.prevAll(selector).last(); }

	//input-label fix
	$('.input-label').click(function(){
		$(this).parent().find('input').focus();
	});
	
	//add some smooth for scroll
	$(function() { $('a[href*=#]:not([href=#])').click(function() { if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) { var target = $(this.hash); target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); if (target.length) { $('html,body').animate({ scrollTop: target.offset().top }, 1000, function(){$('#upper-menu-container').addClass('hide');});  return false; } } }); });
});


//functions
// mobile?
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) { window.isMobile = true; } else { window.isMobile = false; }

//no click delay
(function($,window,document){"use strict";if(!window.navigator.userAgent.match(/(iPhone|iPad|iPod)/)){return}var CONFIG={TOUCH_MOVE_THRESHHOLD:10,PRESSED_CLASS:"pressed",GHOST_CLICK_TIMEOUT:500,GHOST_CLICK_THRESHOLD:10},clicks=[];function withinDistance(x1,y1,x2,y2,distance){return Math.abs(x1-x2)<distance&&Math.abs(y1-y2)<distance}document.addEventListener('click',function(e){for(var i=0;i<clicks.length;i++){if(withinDistance(clicks[i][0],clicks[i][1],e.clientX,e.clientY,CONFIG.GHOST_CLICK_THRESHOLD)){e.preventDefault();e.stopPropagation();return}}},true);$(document).on('touchstart','.button',function(e){var elem=$(this);elem.css('webkitTapHighlightColor','rgba(0,0,0,0)');elem.addClass(CONFIG.PRESSED_CLASS);var touch=e.originalEvent.touches[0];var location=[touch.clientX,touch.clientY];this.__eventLocation=location;this.__onTouchMove=function(e){var touch=e.originalEvent.touches[0];if(withinDistance(touch.clientX,touch.clientY,location[0],location[1],CONFIG.TOUCH_MOVE_THRESHHOLD)){elem.addClass(CONFIG.PRESSED_CLASS)}else{elem.removeClass(CONFIG.PRESSED_CLASS)}};$(document.body).on('touchmove',this.__onTouchMove)});$(document).on('touchcancel','.button',function(){var elem=$(this);elem.removeClass(CONFIG.PRESSED_CLASS);$(document.body).off('touchmove',this.__onTouchMove)});$(document).on('touchend','.button',function(e){var elem=$(this);if(elem.hasClass(CONFIG.PRESSED_CLASS)){elem.removeClass(CONFIG.PRESSED_CLASS);var location=this.__eventLocation;if(location){var touch=e.originalEvent.changedTouches[0];if(!withinDistance(touch.clientX,touch.clientY,location[0],location[1],CONFIG.TOUCH_MOVE_THRESHHOLD)){return}setTimeout(function(){var evt=document.createEvent("MouseEvents");evt.initMouseEvent("click",true,true,window,0,0,0,0,0,false,false,false,false,0,null);elem.get(0).dispatchEvent(evt)},1);e.preventDefault();var clickLocation=[touch.clientX,touch.clientY];clicks.push(clickLocation);window.setTimeout(function(){var i=clicks.indexOf(clickLocation);if(i>=0){clicks.splice(i,1)}},CONFIG.GHOST_CLICK_TIMEOUT)}}$(document.body).off('touchmove',this.__onTouchMove)})})(jQuery,window,document);

//preload images
$.fn.preload=function(){this.each(function(){$("<img/>")[0].src=this})}