$(function(){

	
	console.log("%c 由于时间原因网页没有做到最好的优化,代码写的不好的地方请多多包涵!需要一份前端的工作,如果贵公司有我合适的职位请联系我","color:yellow");
	console.log("邮箱: %c 309516155@qq.com","color:red;font-size:14px");
	

	var wellcome_page = $('#wellcome_page');
	var enter_btn = $('#enter_btn');
	var log = $('#logo');
	var wellcome_page_wrap = $('.wellcome_page_wrap');
	var div_height = wellcome_page_wrap.outerHeight();
	var window_height = $(window).height();
	var wellcome_page_height = (window_height/2)-(div_height/2);

	wellcome_page_wrap.css('marginTop',wellcome_page_height);

	setTimeout(function(){
		wellcome_page.fadeIn(1000);
		log.fadeIn(3000);
		enter_btn.slideDown(2000);
	},100);


	enter_btn.click(function(){
		wellcome_page_wrap.fadeOut(2000,function(){
			$("#presonal_info").animate({marginLeft:"25px"},2000);
			$("#the_rightbox").animate({marginTop:"30px"},2000);
		});
	})

	$(document).on("mousewheel DOMMouseScroll", function (e) {
	    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
	                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
	    if (delta > 0) {
	        // 向上滚
	        console.log("wheelup");
	    } else if (delta < 0) {
	        // 向下滚
	        console.log("wheeldown");
	    }
	});

	
})