/**
 * 将商品信息保存到 cookie 中
 * @param {Object} shopInfo
 */
function shopcar(shopInfo){
	//获取存在的商品信息
	//将字符串的商品信息 转换为对象
	var cars = [];
	//如果 cookie 中存在商品
	if(getCookie("cars")){
		//将 cookie 中的数据取出来，并转换为对象
		cars = JSON.parse(getCookie("cars"));
	}
	
	var flag = true; //假设购物车中没有这个商品
	
	//循环遍历购物车中的所有商品信息
	cars.forEach(function(shopitem){
		//条件成立，表示商品存在
		if(shopitem.id == shopInfo.id){
			flag = false; //证明购物车中有这个商品
			//将购买的商品数量 加到存在的商品数量上
			shopitem.count += shopInfo.count;
		}
	});
	
	//假设条件成立
	if(flag){
		//将商品存入这个数组对象
		cars.push(shopInfo);
	}
	
	//将数组转换为字符串存入 cookie
	setCookie("cars",JSON.stringify(cars));
	//将存入的商品信息取出，并打印
	console.log(getCookie("cars"));
}

function _shopinfo ($i,count) {
	var id = $i.data("id");
	var name = $i.data("name");
	var src = $i.data("src");
	var price = $i.data("price");
	
	var shopInfo = {
		"id" : id,
		"name" : name,
		"src" : src,
		"price" : price
	};
	//将商品数量添加到 商品详细信息中
	shopInfo.count = count;
	shopcar(shopInfo);		
}

/**
 * 将一件商品从购物车中删除
 * @param {Object} shopinfo
 */
function removeShopCar(shopinfo){
	//获取存在的商品信息
	//将字符串的商品信息 转换为对象
	var cars = [];
	//如果 cookie 中存在商品
	if(getCookie("cars")){
		//将 cookie 中的数据取出来，并转换为对象
		cars = JSON.parse(getCookie("cars"));
	}
	for(var i=0;i<cars.length;i++){
		//判断这个商品是否存在
		if(cars[i].id == shopinfo.id){
			cars.splice(i,1);
			//将修改后的商品信息 ，从新写入到cookie中
			setCookie("cars",JSON.stringify(cars));
			break;
		}
	}
}

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
	
	


