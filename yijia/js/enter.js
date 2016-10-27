$(function(){
	//点击登录，验证
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
		var usname = getCookies("username");
		var passwd = getCookies("pwd");
	$("#enter").click(function(){
		
		//console.log(usname.toString());
		if($("#dlzc .d_left input").eq(0).val()== ""){
				$("#dlzc .d_left input").eq(0).next().html("不能为空");
				$("#dlzc .d_left input").eq(0).next().css("color","hotpink");
			}else if($("#dlzc .d_left input").eq(0).val()== usname){
				$("#dlzc .d_left input").eq(0).next().html("OK");
				$("#dlzc .d_left  input").eq(0).next().css({"color":"#828282","font-weight":900});
			}else{
				$("#dlzc .d_left input").eq(0).next().html("用户名不存在，请核对");
				$("#dlzc .d_left input").eq(0).next().css("color","hotpink");
			}
		if($("#dlzc .d_left input").eq(1).val()== ""){
				$("#dlzc .d_left input").eq(1).next().html("不能为空");
				$("#dlzc .d_left input").eq(1).next().css("color","hotpink");
			}else if($("#dlzc .d_left input").eq(1).val()==passwd){
				$("#dlzc .d_left input").eq(1).next().html("OK");
				$("#dlzc .d_left  input").eq(1).next().css({"color":"#828282","font-weight":900});
			}else{
				$("#dlzc .d_left input").eq(1).next().html("密码错误");
				$("#dlzc .d_left input").eq(1).next().css("color","hotpink");
			}
		if($("#dlzc .d_left input").eq(2).val()== ""|| $("#dlzc .d_left input").eq(2).val()!=$("#maths").html()){
				$("#dlzc .d_left input").eq(2).next().html("验证错误");
				$("#dlzc .d_left input").eq(2).next().css("color","hotpink");
		}
		if($("#dlzc .d_left input").eq(1).val()==passwd && $("#dlzc .d_left input").eq(0).val()== usname && $("#dlzc .d_left input").eq(2).val() ==$("#maths").html()){
			$("#enter_sunccess").attr("href","new_index.html");///////接口
			/*window.location.href = "index.html"
			setCookies("locationuser");*/
		}
	})
	//失去焦点验证
	$("#dlzc .d_left input").eq(0).blur(function(){
		if($("#dlzc .d_left input").eq(0).val()== ""){
				$("#dlzc .d_left input").eq(0).next().html("不能为空");
				$("#dlzc .d_left input").eq(0).next().css("color","hotpink");
			}else if($("#dlzc .d_left input").eq(0).val()== usname){
				$("#dlzc .d_left input").eq(0).next().html("OK");
				$("#dlzc .d_left  input").eq(0).next().css({"color":"#828282","font-weight":900});
			}else{
				$("#dlzc .d_left input").eq(0).next().html("用户名不存在，请核对");
				$("#dlzc .d_left input").eq(0).next().css("color","hotpink");
			}
			console.log(usname)
	})
	$("#dlzc .d_left input").eq(1).blur(function(){
		if($("#dlzc .d_left input").eq(1).val()== ""){
				$("#dlzc .d_left input").eq(1).next().html("不能为空");
				$("#dlzc .d_left input").eq(1).next().css("color","hotpink");
			}else if($("#dlzc .d_left input").eq(1).val()== passwd){
				$("#dlzc .d_left input").eq(1).next().html("OK");
				$("#dlzc .d_left  input").eq(1).next().css({"color":"#828282","font-weight":900});
			}else{
				$("#dlzc .d_left input").eq(1).next().html("密码错误");
				$("#dlzc .d_left input").eq(1).next().css("color","hotpink");
			}
			console.log(passwd)
	})
	$("#dlzc .d_left input").eq(2).blur(function(){
		if($("#dlzc .d_left input").eq(2).val()== ""|| $("#dlzc .d_left input").eq(2).val()!=$("#maths").html()){
				$("#dlzc .d_left input").eq(2).next().html("验证错误");
				$("#dlzc .d_left input").eq(2).next().css("color","hotpink");
			}else{
				$("#dlzc .d_left input").eq(2).next().html("");
			}
	})
	//注册验证
	$("#dlzc .z_right .verify").blur(function(){
		if($(this).val() == ""){
			$(this).next().html("不能为空");
			$(this).next().css("color","hotpink");
			//$("#dlzc .d_left input").eq(2).next().html("验证错误");
		}
	})
	//注册验证
	var sucessful = false;
	$("#ring_up").click(function(){
		if($("#agree:checked").length==0){
			alert("您必须同意本协议后才能注册新用户");			
		}else if($("#pho").html() == "OK" && $("#pad").html() == "OK" && $("#pwd_agin").html() == "OK"){
			//信息存入cookie
			function setCookiess(key,value,exp){
				var exp = exp || 1;
				var d = new Date();
				var day = d.getDate()
					d.setDate(day+exp);
				document.cookie =key+"="+value+"; expires="+d;
				return document.cookie;
			}
			var value1 = $("#tell_phone").val();
			var value2 = $("#cookie_pwd").val(); 
			console.log(value1);
			setCookiess("username",value1,100);
			setCookiess("pwd",value2,100);
			$("#sucess").attr("href","login_success.html"); ////////////////接口
		}else{
			$("#dlzc .z_right .verify").next().html("不能为空");
			$("#dlzc .z_right .verify").next().css("color","hotpink");
		}
		
	})
	
		


	
})
onload = function(){
	//验证码
	function changeMath(){
		var str = "";
		var arr=[1,2,3,4,5,6,7,8,9,0,"q","w" ,"e","r","t","y","u","i","o","p","a","s","d",
				"f","g","h","j","k","j","l","k","l","z","x","c","v","b","n","m"];	
		for(var i = 0; i < 4; i++){
			var code = Math.floor(Math.random() * arr.length)
			str += arr[code]
		}
		return str;
	}
	var maths = document.getElementById("maths");
	var change = document.getElementById("change");
	change.onclick = function(){
		maths.innerHTML = changeMath();
	}
	//信息验证
	var verfity = document.getElementsByClassName("verify");
	var phone = document.getElementsByName("phone")[0];
	var pho = document.getElementById("pho");
	var pwdf = document.getElementsByName("pwdf")[0];
	var pd = document.getElementById("pad");
	var pwdt = document.getElementsByName("pwdt")[0];
	var pwd_agin = document.getElementById("pwd_agin");
	//console.log(pd)
	var reg1 = /^1[3|8|5|4][0-9]\d{4,8}$/;
	var reg2 =  /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/; 
	phone.onblur = function(){
		if(reg1.test(phone.value)){
			pho.innerHTML = "OK";
			pho.style.color = "#DFDFDF";
			pho.style.fontWeight = 900;
			pho.style.fontSize = "16px";
		}else if(phone.value == ""){
			pho.innerHTML = "不能为空";
			pho.style.color = "hotpink";
		}

		else{
			pho.innerHTML = "请输入正确手机号";
			pho.style.color = "hotpink";
		}

}

	pwdf.onblur = function(){
		if(reg2.test(pwdf.value)){
			pd.innerHTML = "OK";
			pd.style.color = "#DFDFDF";
			pd.style.fontWeight = 900;
			pd.style.fontSize = "16px";
		}else if(pwdf.value ==""){
			pd.innerHTML = "不能为空";
			pd.style.color = "hotpink";		
		}else{
			pd.innerHTML = "格式错误";
			pd.style.color = "hotpink";		
		}
	}
	pwdt.onblur = function(){
		if(pwdt.value == pwdf.value){
			pwd_agin.innerHTML = "OK";
			pwd_agin.style.color = "#DFDFDF";
			pwd_agin.style.fontWeight = 900;
			pwd_agin.style.fontSize = "16px";
		}else if(pwdt.value = ""){
			pwd_agin.innerHTML = "不能为空";
			pwd_agin.style.color = "hotpink";	
		}else{
			pwd_agin.innerHTML = "密码不一致";
			pwd_agin.style.color = "hotpink";	
		}
	}
	
}

