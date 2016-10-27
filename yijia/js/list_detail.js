$(function(){
	      	//解析地址 ,获取？后面的值
    	var search = location.search || location.href;
      	if(search.length>1){
      	 search = search.split("?");      		
      	 search = search[search.length-1];
      	}else{
      		search = "";
      	}
      	var obj = {};
      	if(search){
      		search = search.split("$");
      		for(var i=0; i<search.length;i++){
      			var item = search[i].split("=");
      		//console.log(item);
      			obj[item[0]] = item[1];//转成对象，{i:"class01",id = "shop"}
      		}
      		//console.log(obj);
      	}
      	//有了class01,接下来就是从json中获取所有数据；
      	$.get("data.json",{},function(data){
      		var i =obj.i;
			var item = data[i];
			var lists = item.list;
			var shopInfo;
			for(var index=0; index<lists.length;index++){
				var child = lists[index];
				if(child.id == obj.id){
					shopInfo = child;
					break;
				}
			}
			//console.log(shopInfo);
			//将数据动态生成html标签中
			var html1 = '<div class="main">'+
							'<img class="shows show_img" src ="./imge/'+shopInfo.src +'"alt =""/>'+
							'<img class="shows" src = "./imge/'+shopInfo.src  +'"alt =""/>'+
						'</div>'+
						'<ul id = "kancs">'+
							'<li><img src = "./imge/' +shopInfo.src +'"/></li>'+
							'<li><img src = "./imge/' +shopInfo.src +'"/></li>'+			
						'</ul>';
			$(".kan_left").append(html1);
			var html2 = "<ul>"+
							'<li class="li1" >'+
								'<p class="p1" >' + shopInfo.name + '</p>'+
									'<span>品号：</span>340923' +
									'<span>品牌：</span>'+
							'</li>'+
							'<li class="li2">'+
								'<span>优惠价</span>'+
								'<i>'+shopInfo.price +'</i>'+
							'</li>'+
							'<li  class="li3">您可获赠3积分 该积分可以当钱花呦！<a href = "#"> 怎样获取积分？</a></li>'+
							'<li class="li4">'+
								'<span>选择颜色：</span>金色<br>'+
								'<img src = "images/gold.png" alt =""/>'+
							'</li>'+
							'<li class="li5">'+
								'<span>付款：</span>支付宝<br>'+
								'<span>库存：</span>'+
								'<b>现货</b><br>'+
								'<span>购买：</span> '+
								'<input type = "text" name = "" value = "1" />'+
								'<b> 已选择    默认</b><br>'+
							'</li>'+
							'<li class="li6">'+
								'<a herf = "#">'+
									'<img src = "images/buy.png" alt = "">'+
								'</a>'+
								'<a class = "buyBaby" class="cen" herf = "#">'+
								'	<img src = "images/jiaru.png" alt = "">'+
								'</a>'+
								'<p class="line_phone">'+
									'<span>订购热线</span><br>'+
									'<span class="line">400-688-8499</span>'+
								'</p>'+
								'<p class="help">'+
									'<a href = "#">'+
										'<img src = "images/pl.png" alt = ""/>'+
									'</a>'+
									'<a href = "#">'+
										'<img src = "images/tw.png" alt =""/>'+
									'</a>'+
									'<a class="kong_x" href = "#"></a>'+
								'</p>'+
							'</li>'+
						'</ul>';
      		$(".kan_right").append(html2)	

      		//购物车+=
	$(document).ready(function(){
		$('.buyBaby').click(function(){
		var $input = $('.buyBaby'),
		v = $input.val();
		v = parseInt(v);
		$input.val(v + 1);

		});
	});

      	//放大镜效果
      	var html3 = '<ul class="imge">'+
						'<li><img src ="./imge/'+ shopInfo.src  +'"alt = "" /></li>'+
						'<li><img src ="./imge/'+ shopInfo.src  +'" alt = "" /></li>'+
					'</ul>'+
					'<img class="im_right" src = "images/closeimg.png"/>'+
					'<img class="im_left" src = "images/start.png"/>'+
					'<img class="im_left1" src = "images/pause.png"/>'+
					//将商品信息全部放到自定义属性中
					'<i style="display:none;" class="shopInfo" '+
						'data-id="' + shopInfo.id +'"data-jifen="'+ shopInfo.jifen +'" data-name="' + shopInfo.name + '" '+
						'data-src="' + shopInfo.src +'" data-price="' + shopInfo.price + '" '+
					'></i>';
			$("#box").append(html3);
	//下一个$(function(){})，取存在自定义属性中的数据	
		function click(e){
			var count = 1;//默认购买一件商品
				//$(".shopInfo") 商品的详细信息
				var n=$(".num").val();
 		var num=parseInt(n)+1;
 		if(num==0){alert("cc");}
  		$(".num").val(num);

			_shopinfo( $(".shopInfo") ,count);
			if(!confirm('已成功添加购物车')){
				//跳转到购物车页面
				
			}	
			console.log(111);
		}
		$(".buyBaby").click(function(){
			click();
		});
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
      	$(".buy_baby").click(function(){
      		alert(11);
      	})
    },"json")  

})	









