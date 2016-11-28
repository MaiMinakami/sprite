$(document).ready(function(){
	

	//carousel
	$('.bxslider').bxSlider({
	   nextText: '',
	   prevText: '',
	   pagerCustom: '.carousel__pages',
	   mode: 'fade',
	   speed: 1000,
	   responsive: true
	});



	//header icon
	$( '.page-header__menu-icon' ).click(function() {
		$( '.navigation' ).slideToggle(500);
	});

  	

  	//navigation scroll
	$(".navigation").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top - 100}, 300);
	});



	//navigation sticky
	$(window).scroll(function(){
            if($(this).scrollTop()>680){
                $('.page-header').addClass('sticky');
            }
            else if ($(this).scrollTop()<680){
                $('.page-header').removeClass('sticky');
            }
        });


		var lastId,
        topMenu = $(".navigation"),
        topMenuHeight = topMenu.outerHeight()+15,    
        menuItems = topMenu.find("a"),   
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });




        //navigation auto-hover
    $(window).scroll(function(){ 
       var fromTop = $(this).scrollTop()+topMenuHeight;   
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
      
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
         
           menuItems
             .parent().removeClass("navigation__item--active")
             .end().filter("[href='#"+id+"']").parent().addClass("navigation__item--active");
       }                   
    });



    //mask for card-product
    $(".mask__button").click(function(){
        $(".mask__more-about").slideToggle();
    });


});