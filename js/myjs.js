$(function(){

	
	console.log("%c 由于时间原因网页没有做到最好的优化,代码写的不好的地方请多多包涵!需要一份前端的工作,如果贵公司有我合适的职位请联系我","color:yellow");
	console.log("邮箱: %c 309516155@qq.com","color:red;font-size:14px");
	

	var wellcome_page = $('#wellcome_page');
	var enter_btn = $('#enter_btn');
	var log = $('#logo');
	var wellcome_page_wrap = $('.wellcome_page_wrap');
	var div_height = wellcome_page_wrap.outerHeight();
	var window_height = $(window).height();
	console.log(wellcome_page_wrap);
	var wellcome_page_height = (window_height/3)-(div_height/2);

	wellcome_page_wrap.css('marginTop',wellcome_page_height);

	setTimeout(function(){
		wellcome_page.fadeIn(50);//1000
		log.fadeIn(50);//3000
		enter_btn.slideDown(50);//2000
	},100);


	enter_btn.click(function(){
		wellcome_page_wrap.fadeOut(50,function(){//2K - -
			$("#presonal_info").animate({marginLeft:"25px"},50);
			$("#the_rightbox").animate({marginTop:"30px"},50);
		});
	});

	$('.my_resume').hover(function(){
		$('.my_resume').animate({width:'300px'},"slow");
		$('.my_resume').animate({height:'100px'},"slow");
		console.log("aaa");
	});

	// overflow 隐藏后滚动 任然可以滚动
	// $(document).on("mousewheel DOMMouseScroll", function (e) {
	//     var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
	//                 (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
	//     if (delta > 0) {
	//         // 向上滚
	//         console.log(window.pageYOffset);
	//     } else if (delta < 0) {
	//         // 向下滚
	//         console.log("wheeldown");
	//     }
	// });


	// 自我介绍弹窗
	// $('.abme_click').on('click',function(){
	// 	var msg = '我叫郭锐,是个活泼开朗的男生.什么?谁说活泼开朗就不能当码农的?哼!当然我在学习和码代码的时候是非常安静和专注的.我的爱好是动漫;游戏;学习.对没错就是学习!最近越来越喜欢学习(真的后悔迷茫混日子没好好读高中,落到个大专的下场,现在简历投出去就跟沉入海了一样一点回声都没~).'
 //                    +'生活中,我是一个和别人相处比较融洽的人,善于倾听别人的话,喜欢团队合作.如果你通过这个网页了解我,觉得我还可以请一定要联系我给我一个面试的机会或工作的机会哦,感谢你读完我这一大段唠叨.'
	// 	layer.open({
	// 		type:1,
	// 		shadeClose:true,
	// 		area:['600px','360px'],
	// 		content: '\<\div style="padding:20px;">'+msg+'\<\/div>'

	// 	})
	// })
	

})

