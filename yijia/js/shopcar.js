$(function(){
	var cars = getCookie("cars");
	//如果cookie中有商品
	if(cars){
		cars = JSON.parse(cars);
	}else{
		cars = [];
	}
	var html = "";

	
	var nom=0
	//循环cook中的商品信息，遍历
	cars.forEach(function(shopinfo,i){
		
		html += 
					'<ul class="baby shop-item">'+
					'<li class="bli1">'+
					'<a href = "#">'+
						'<img src="imge/'+shopinfo.src+'"'+ 'alt="" />'+
					'</a>'+
				'</li>'
				+'<li class="bli2">'+shopinfo.name+'</li>'
				+'<li class="bli3">'
				+'<span class="buyBaby2">-</span>'
				+'<input class="shop-count" type="text" value="'+ shopinfo.count +'"/>'
				+'<span class="buyBaby">+</span>'
				+'</li>'
				+'<li class="bli4">'+shopinfo.price+'</li>'
				+'<li class="bli5">'+shopinfo.price+'</li>'		
				+'<li class="bli6">'+'有货'+'</li>'
				+'<li class="bli7">'+shopinfo.price+'</li>'
				+'<li class="bli8">'
				+'<img src ="images/add.gif" />'
				+'<img class="delBtn" src ="images/delet (1).gif" />'
				+'</li>'
				+'</ul>'
			
		})
	$(".name").after(html);
// 

$(".baby").on("click",".delBtn",function(shopinfo){
		if(confirm("删除该商品  ")){
			$(".baby").remove();

	}
})



//////////////!!!!!!!!!!!!!!!!

$(document).ready(function(){
		$(".buyBaby").click(function(){
			
		var $input = $('.shop-count'),
		v = $input.val();
		v = parseInt(v);
		$input.val(v + 1);


		});
		$(".buyBaby2").click(function(){
			
		var $input = $('.shop-count'),
		v = $input.val();
		v = parseInt(v);
		$input.val(v - 1);
              if ($input.val()<=0) {
			alert("确认删除该商品吗 ？ ")
			$(".baby").remove();
		}
		})

	});

	


	
 })



