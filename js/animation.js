/*
* Copyright Haruqa
* Version 1.0.0
* Do Not Modify
*/

jQuery(function($){
	// menu hover animation
	$("#sideMenu li").hover(
	function(){
		$(this).children("hr").animate({width:"show"}, 100);
	},
	function(){
		$(this).children("hr").animate({width:"hide"}, 100);
	});

	// page switch
	$("#sideMenu li").click(function(){
		var idName = $(this).attr("id");
		var idNum = idName.replace(/menu/, "");
		$(".page").hide("fast");
		$("#page"+idNum).show("fast");
		if(idName=="menuAll"){
			$(".page").show("fast");
		}
	});

	// header title switch to page0
	$("#headerTitle").click(function(){
		$(".page").hide("fast");
		$("#page0").show("fast");
	});

	// toUpBtn show
	$(window).scroll(function(){
		var now = $(window).scrollTop();
		var hiddenBtn = $("#toUpBtn").is(":hidden");
		if(hiddenBtn){
			if(now>200){
				$("#toUpBtn").fadeIn("slow");
			}
		}else{
			if(now<=200){
				$("#toUpBtn").fadeOut("slow");
			}
		}
	});

	// toUpBtn
	$("#toUpBtn").click(function(){
		$( "html,body" ).animate( {scrollTop:0} , "fast" );
	});
});
