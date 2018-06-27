$(".fancybox").fancybox({
	// Options will go here
});

$(document).ready(function(){

	$("[name=searchByOrder] span button").on('click',function(){
		$(this).parents('form').trigger('submit');
	});

    $("[name=searchByArticle] span button").on('click',function(){
        $(this).parents('form').trigger('submit');
    });

	$(document).on('scroll',function(){
		if($(window).scrollTop()>$(".main-menu").offset().top && location.href.indexOf("/cart/")<0 && $(".basketBlockGreenCnt") && $(".basketBlockGreenCnt").data('cnt')>0){
			$(".basketBlockGreen").fadeIn();
		}else{
            $(".basketBlockGreen").hide();
		}
	});

	$('[data-tourl]').on('click change', function (e) {
		var url = $(this).data('tourl');
		location.href = url;
	});
	
	$("[name=searchByOrder]").on('submit',function (e) {
		e.preventDefault();
		var order = $(this).find('[type=text]').val();
		order = order.replace(/\s{1,}/g, '');
		if(order.length>=3){
			location.href = '/cart/status/'+order+'/';
		}else{
			console.log(order.length);
		}
	});

	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('').find('div.box').hide().eq($(this).index()).fadeIn(150);
	})
	
	$("select").selectBox();
	
	$('a[href="#plus"]').click(function (e) {
		e.preventDefault();
		var inp = $(this).parent('span').find('input');
		inp.val(parseInt(inp.val())+1).change();
		//return false;
	});
	$('a[href="#minus"]').click(function (e) {
		e.preventDefault();
		var inp = $(this).parent('span').find('input');
		if(inp.val()>1) inp.val(parseInt(inp.val())-1).change();
		//return false;
	});
	
	$('.form_car span').click(function(event){
		$(this).toggleClass('active');
		$(this).next('div.item').toggleClass('active');
	});
	
	$(".add2basket-btn").on('click',function (e) {
		e.preventDefault();
		var obj = $(this).parents(".main2basket").find('[name=prodCNT]');

		$.ajax({
			url: "/ajax/add2basket.php",
			type: "POST",
			data: ({ID:obj.data('id'),PROD_QNT: obj.val(),PROD_PRICE_ID: obj.data('priceid'),STORE_ID:obj.data('storeid')}) ,
			success: function(data){
				var json = JSON.parse(data); console.log(json);
				if(json.result = 'OK'){
					var msg = 'Товар добавлен в корзину. Количество '+obj.val();
					$(".successAdd2Cart label").html(msg);
					$(".successAdd2Cart").fadeIn();
					setTimeout(function(){
						$(".successAdd2Cart").fadeOut();
					}, 5000);

					var basket = '<a href="/cart/" class="basketTotalCnt">'+json.totalCnt+'</a>'+
									'<div>'+
										'<p>товара<br>на сумму</p>'+
										'<span class="basketTotalSumm">'+json.totalSumm+' руб.</span>'+
									'</div>';

                    basket = '<img src="/local/templates/main/images/menu/cart.png" alt="Корзина">' + basket;
                    basket = basket + '<a href="/cart/" class="basketBlockGreen">' +
                    '    <table>' +
                    '        <tr>' +
                    '            <td>' +
                    '                <img src="/local/templates/__main/images/basket-white.png" alt="">' +
                    '            </td>' +
                    '            <td>' +
                    '                <span class="basketBlockGreenCnt" data-cnt="'+json.totalCnt+'">'+json.totalCnt+'</span>' +
                    '            </td>' +
                    '        </tr>' +
                    '    </table>' +
                    '</a>';

					$(".basketBlock").html(basket);

                    if($(window).scrollTop()>$(".main-menu").offset().top && location.href.indexOf("/cart/")<0 && $(".basketBlockGreenCnt") && $(".basketBlockGreenCnt").data('cnt')>0){
                        $(".basketBlockGreen").fadeIn();
                    }

					// $('.basketBlockGreenCnt').html(obj.val()).data('cnt',obj.val());
				}
			}
		});
        $(this).parents(".main2basket").html('<div class="imgInCart" data-tooltipleft="Товар добавлен в корзину"> </div>');
	});

	$(".successAdd2Cart-close").on('click',function (e) {
		e.preventDefault();
		$(".successAdd2Cart").fadeOut();
	});



// $('.products-carousel').owlCarousel({
// 	margin: 40,
// 	dots: true,
//  	loop: true,
// 	responsive: {
// 		0: {
// 			items: 2
// 		},
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
// 	}
// });



$('.view .block').on('click', function() {
	var prod_row = $('.cart_product');
		prod_row.removeClass('line');
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
});

$('.view .line').on('click', function() {
	var prod_row = $('.cart_product');
		prod_row.addClass('line');
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
});



$('.js_tab1').addClass('active_flex');

$('.js-tab1').on('click', function(e){
	e.preventDefault();
	console.log(this);
	$(this).addClass('active').siblings().removeClass('active');
	$('.products-carousel .js_tab1')
	.addClass('active_flex')
		.siblings()
			.removeClass('active_flex');
});
$('.js-tab2').on('click', function(e){
	e.preventDefault();
	$(this).addClass('active').siblings().removeClass('active');

	$('.products-carousel .js_tab2')
	.addClass('active_flex')
		.siblings()
			.removeClass('active_flex');
});
$('.js-tab3').on('click', function(e){
	e.preventDefault();
	$(this).addClass('active').siblings().removeClass('active');

	$('.products-carousel .js_tab3').
		addClass('active_flex')
			.siblings()
				.removeClass('active_flex');
});
$('.js-tab4').on('click', function(e){
	e.preventDefault();
	$(this).addClass('active').siblings().removeClass('active');

	$('.products-carousel .js_tab4').
		addClass('active_flex')
			.siblings()
				.removeClass('active_flex');
});
$('.js-tab5').on('click', function(e){
	e.preventDefault();
	$(this).addClass('active').siblings().removeClass('active');

	$('.products-carousel .js_tab5').
		addClass('active_flex')
			.siblings()
				.removeClass('active_flex');
});
$('.js-tab6').on('click', function(e){
	e.preventDefault();
	$(this).addClass('active').siblings().removeClass('active');

	$('.products-carousel .js_tab6').
		addClass('active_flex')
			.siblings()
				.removeClass('active_flex');
});



$('.js_tabb1').addClass('active_flex');

$('.js-tab11').on('click', function(e){
	e.preventDefault();
	console.log(this);
	$(this).addClass('active').siblings().removeClass('active');
	$('.products-carousel .js_tabb1')
	.addClass('active_flex')
		.siblings()
			.removeClass('active_flex');
});
$('.js-tab22').on('click', function(e){
	e.preventDefault();
	$(this).addClass('active').siblings().removeClass('active');

	$('.products-carousel .js_tabb2')
	.addClass('active_flex')
		.siblings()
			.removeClass('active_flex');
});
$('.js-tab33').on('click', function(e){
	e.preventDefault();
	$(this).addClass('active').siblings().removeClass('active');

	$('.products-carousel .js_tabb3').
		addClass('active_flex')
			.siblings()
				.removeClass('active_flex');
});



});



$('.show-filter-btn span').on('click', function(){
	var filter = $('.form_car');
	filter.toggle('slow');
});

$('.show-filter-btn2 span').on('click', function(){
	var filter = $('.form_car_main');
	filter.toggle('slow');
});




$(function(){
	$('input[placeholder], textarea[placeholder]').placeholder();
});

$(document).ready(function() {

var owl = $('.categories-carousel');

var options = {
	margin:10,
	dots: true,
	responsive: {
		0: {
			items: 1
		},
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
	}
};
if($('.categories-carousel .owl-item').length>1){
       options.loop=true;
   }
owl.owlCarousel(options);

    var arrR = $('#triangle-right');
    var arrL = $('#triangle-left');
    arrR.click(function () {
        owl.trigger('next.owl.carousel');
    });
    arrL.click(function () {
        owl.trigger('prev.owl.carousel');
    });
});

$(document).ready(function() {

var owl = $('.acc-owl');

var options = {
	responsive: {
		0: {
			items: 7
		},
        600:{
            items:7,
            nav:false
        },
        1000:{
            items:7,
            loop:false
        }
	}
};
if($('.acc-owl .owl-item').length>1){
       options.loop=true;
   }
owl.owlCarousel(options);
	
 


    var arrR = $('#triangle-right');
    arrR.click(function () {
        owl.trigger('next.owl.carousel');
    });
});
