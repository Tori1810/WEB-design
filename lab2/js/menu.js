
;(function ( $ ) {

	$.fn.menu = function(){

		var horizontal_menu = ['<li><a id="AboutUs" href="AboutUs.html">About US</a></li>', 
								'<li class="li-with-menu"><a href="Products.html" id="Production">Products</a></li>', 
								'<li><a id="Contacts" href="Contacts.html">Contacts</a></li>',
								'<li><a id="Home" href="index.html">Home Page</a></li>'];

		var vertical_menu_products = ['<li><a id="Flowers" href="Products.html">Flowers</a></li>',
									  '<li><a id="Sweets" href="Products.html">Sweets</a></li>',
									  '<li><a id="Presents" href="Products.html">Presents</a></li>'];

		$(this).append('<div class="menu"></div>');
		$(this).find('.menu').append('<ul></ul>');

		for (i=0; i<horizontal_menu.length; i++){
			$(this).find('.menu ul').append(horizontal_menu[i]);
		}

		$(this).find('.li-with-menu').append('<ul class="products-menu"></ul>');
		for (i=0; i<vertical_menu_products.length; i++){
			$(this).find('.products-menu').append(vertical_menu_products[i]);
		}
		$(this).find('.products-menu').hide();

		$('#Production').hover(
			function(){
				$('.products-menu').show();
				$('.products-menu').hover(
					function(){
						$('.products-menu').css('display', 'block');
					},
					function(){
						$('.products-menu').hide();
					}
				);
			}			
		);

	}
	

}( jQuery ));


$(document).ready(function(){
    $('.header').menu();
});
