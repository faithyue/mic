
$(function(){

	//菜单
	$("#banner .left").on("click","li",function(){
		//一级菜单
		$(this).next(".show").css("display","block");
		$(this).siblings().next(".show").css("display","none");
	})
	$(".smallnav .small").mouseenter(function(){
		$(this).addClass("active").siblings().removeClass("active")
		$(this).find("span").addClass("spa").siblings().removeClass("spa");
		var i = $(this).index();
		$(".towNavs").css("display","block");
		$(".towNavs .towNav").eq(i).css("display","block");
		$(".towNavs .towNav").eq(i).siblings().css("display","none");
	})
	$(".smallnav .small").mouseleave(function(){
		$(".towNavs").css("display","none");
	})
	//二级菜单
	$(".towNavs").mouseenter(function(){
		$(this).css("display","block");
	}).mouseleave(function(){
		$(this).css("display","none");
	})
	//banner轮播 up
	$("#banner .center .up .nav").on("mouseenter","li",function(){
		$(this).addClass("navBg").siblings().removeClass("navBg");
		var j = $(this).index();
		console.log(j)
		$("#banner .lb").stop().animate({"left":-j*720},500)
	})
	var timer = setInterval(move,7000);
	var ban = 1
	function move(){
		$("#banner .lb").stop().animate({"left":-ban*720},500);
		ban++;
//		/console.log(ban)
		$("#banner .center .up .nav li").eq(ban-1).addClass("navBg");
		$("#banner .center .up .nav li").eq(ban-1).siblings().removeClass("navBg");
		if(ban ==3){
			ban = 0;
			$("#banner .lb").css("left",0)
		}
	}
	$("#banner .center .up").hover(function(){
		
		clearInterval(timer)},function(){
			timer = setInterval(move,3000);
		})
		var index =0;	
	$("#banner .btn").on("click",".btt",function(){
		var number = $(this).data("number");
		index += number;
			if(index >=0){
				$("#banner .smallLb").css({"left":-720});
				index = -2 
			}
			if(index == -2){
				$("#banner .smallLb").css({"left":0});
				index = -1;
			}
		$("#banner .smallLb").stop().animate({"left":(index*180*4)},1000);	
		console.log(index)
		
	})
	//goodsnav
	$("#goods .left .goodsNav").on("mouseenter","li",function(){
		var k = $(this).index();
		$("#goods .left .live").removeClass("lives");//先清除lives
		$("#goods .left .live").eq(k).addClass("lives");
		$("#goods .left .live").eq(k).siblings().removeClass("lives");
		$("#goods .left .goodsNav li").removeClass("hovers");
		$(this).addClass("hovers");
		$(this).siblings().removeClass("hovers");
	})
	//3fnav滑动效果
	$("#appliance .a_right .fashion").on("mouseenter","li",function(){
		$("#appliance .a_right .fashion").removeClass("active");
		$(this).addClass("active").siblings().removeClass("active");
		var h = $(this).index();
		$("#appliance .a_right .bott").removeClass("show");
		$("#appliance .a_right .bott").eq(h).addClass("show").siblings().removeClass("show");
	})
	//點擊top回頂部
	$("#fixed .imgs ._top").click(function(){
		$(document).scrollTop(0)
	})
	//在线客服

      	 $(window).scroll(function(){
	      	  //获取文档的滚动条向上滚动的距离
	      	  var docScrollTop = $(document).scrollTop();
	      	  /*$(".main").css({
	      	  	top:docScrollTop+80+"px"
	      	  })*/
	      	 $(".online").stop().animate({
	      	 	top:docScrollTop+300+"px"
	      	 },400)
     	 })
	
	


})




