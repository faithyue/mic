$(function(){
	
	//大图消失  
	$("#big .im_right").on("click",function(){
		$("#big").css("background","rgba(0,0,0,0)");
		$("#box").fadeOut(500,function(){
			$("#big").fadeOut(200);			
		})
	})

	$("#kancs").on("click","li",function(){
		var i = $(this).index();
		$(".shows").removeClass("show_img");
		$(".shows").eq(i).addClass("show_img").siblings().removeClass("show_img");
	})
	//大图出现
	$(".shows").click(function(){
		var k =$(this).index();
		$("#big").css("display","block");
		var opa = 0;
		var tim = setInterval(shows,50)
		function shows(){
			opa = opa + 0.1;
			$("#big").css("background","rgba(0,0,0,"+opa+")");
			if(opa>=0.4){
				$("#big .main").stop().fadeIn(500);
			}
			if(opa>=0.7){
				clearInterval(tim);
				$("#big .main img").eq(k).css("z-index",1);
				$("#big .main img").eq(k).siblings().css("z-index",0);
				$("#big .main img").eq(k).stop().fadeIn(100);
			}
		}
	})
	//小轮播
		var i = 0;
		clearInterval(moves);
		var moves = setInterval(move,5000);
		function move(){
			/*$("#big .imge li").removeClass("chu");
			$("#big .imge li").eq(i).addClass("chu").siblings().removeClass("chu");
			i++;
			if(i==2){
				i=0;
			}*/
		}
	$("#big .im_left").click(function(){
		$(this).css("z-index",0).siblings().css("z-index",1);
		 setInterval(move,5000);
	})
	$("#big .im_left1").click(function(){
		$(this).css("z-index",0).siblings().css("z-index",1);
		 clearInterval(moves);
	})
	//固定导航栏
	
      	$(window).scroll(function(){
      		//获取页面头部的高度
      		var topHeight = 750;
      		//获取滚动条向上滚动的距离
      		var scrollHeight = $(document).scrollTop();
      		//判断 当滚动条向上滚动的距离大于页面头部的高度时，将导航栏固定
      		$(".p_nav").css({
      				"opacity":1
      			})
      		if (scrollHeight>=topHeight) {
      			//固定导航栏
      			$(".p_nav").css({
      				"position":"fixed",
      				"top":0
      			})
      			//$(".main").css("margin-top",$(".nav").height())
      		}else{
      			//不满足if条件  页面恢复到原来的状态
      			//将定位恢复到默认position:static
      			$(".p_nav").css({
      				"position":"static",     				
      			})
      			
      			//将主体距离nav的上边距恢复到原来的默认值
      			//$(".main").css("margin-top","20px");
      		}
      	})
      	$("buy").click(function(){
      		
      	})
})	
