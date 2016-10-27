function getCookies(){
				var arr = [];
				if(arguments.length == 1) {
					return getCookie(arguments[0]);
				}
				for(var i in arguments){
					var p = arguments[i];
					var res = getCookie(p);
					if(res != null){
						arr.push(res);
					}
				}
				return arr;
			}
			function getCookie(key){
				var str_cookie = document.cookie;
				var list = str_cookie.split("; ");
				for(var i in list){
					var kvs = list[i].split("=");
					if(kvs[0] == key) {
						return kvs[1];
					}
				}
				return null;				
			}
$(function(){
	$("#your").width("200")
	$("#your").html("您好，");
	$("#your").append("<a href = '#'></a>");	
	$("#your").find("a").eq(0).css({"color":"#000"}).html(getCookies("username"));
	$("#your").append("<a href = '#'></a>");
	$("#your").find("a").eq(1).css({"color":"#000","margin-left":"10px"}).html("退出");
	$("#user_phone").html(getCookies("username"));
	function userMath(){
		var str = "";
		var arr = [1,2,3,4,5,6,7,8,9,0];
		for(var i=0;i<5;i++){
			var maths = Math.floor(Math.random()*arr.length);
			str += arr[maths];
		}
		return str;
	}
	$("#user").html("800"+userMath());
	var index = 6;
	var cunts = setInterval(cunt_after,1000)
	function cunt_after(){
		index --;
		$("#cunt_down").html(index);
		if(index == 0){
			clearInterval(cunts);
			window.location.href = "new_index.html";
		}
	}
	$("#btn").attr("href","new_index.html")
})
