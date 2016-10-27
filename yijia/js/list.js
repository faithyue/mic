$(function(){
	//请求json数据
	$.get("data.json",{},function(data){
		var html = "";
		for(var i in data){//遍历data对象，i//指的就是获取的key
			var item = data[i];//全拿出来放到item中
			//将class01,存入li中的自定义属性中
		html +="<li data-i =" + i + ">"+ item.name+ "</li>";
		}
		$("#lists").append(html);

		//界面


		//点击事件
		$("#lists").on("click","li",function(){
			
			var i = $(this).data("i");//取属性值
			var item = data[i];
			var list = item.list;
			var htms ="";
			for(var index = 0; index<list.length; index++){
				var child = list[index];
				htms += "<li>"+
							'<a href ="list_detail.html?i=' + i +'$id='+ child.id +'">'+
							'<img class="list" src="./imge/'+ child.src +'" />'+
							"<p>" + child.name + "</p>"+
							"<span>" + child.price + "</span></br>"+
							"<i>" + child.jifen +"</i>"+
							"</a>"+'<img src="./imge/xing.jpg" />'+
						"</li>"
			}
			$("#product").html(htms);
			/*$("#lists li").eq(0).trigger("click");*/
		})
	},"json")

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






	$(".all").mouseenter(function  () {
		$("#banner").css("display","block");
	})
	$(".left").mouseenter(function  () {
		$("#banner").css("display","block");
	})
	$(".mainCon").mouseleave(function(){
		$("#banner").css("display","none");

	})
	//點擊top回頂部
	$("#fixed .imgs ._top").click(function(){
		$(document).scrollTop(0)
	})	

})