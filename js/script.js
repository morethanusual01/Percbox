
$(function() {

//jQuery time
var current_fs, next_fs, previous_fs,prev_fs ,ele; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
    prev_fs = $(this).parent();
    ele=$("#progressbar li").eq($("fieldset").index(prev_fs));
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(prev_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'transform': 'scale('+scale+')'});
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

const mediaQuery = window.matchMedia('(max-width: 770px)')
 
// Check if the media query is true
if (mediaQuery.matches) {
  $("fieldset .submit").attr("value", "Payment");
}

$('fieldset .row div:first-of-type .bag-coffe').addClass('active');

$('fieldset .bag-coffe').click(function(){
	const price =$(this).find("> h4").html();
	$(this).parent().parent("div").find("div > .active").removeClass("active");
	$(this).addClass("active")
	$("fieldset .notePrice").html(`<span>* You chose ${price}</span>`)
})

$(".addPrices").click(function () {
	const quantity=$("fieldset:nth-of-type(2) .active h4").html();
	const quantityPrice=$("fieldset:nth-of-type(2) .active h6 span").html();
	$(".quantity").html(`Quantity ${quantity}`);
	$(".quantity_price").html(`$ ${quantityPrice}`);

	const type=$("fieldset:nth-of-type(3) .active h4").html();
	$(".type").html(`Grand- ${type}`);

	const time=$("fieldset:nth-of-type(4) .active h4").html();
	$(".time").html(` ${time}`);

	const totalPrice = parseFloat(quantityPrice) ;
	$(".total_price").html(`$ ${totalPrice.toFixed(2)}`)
})


$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	$("#progressbar li").eq($("fieldset").index(previous_fs)).removeClass("active");

    
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

// $(".submit").click(function(){
// 	return false;
// })

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

});