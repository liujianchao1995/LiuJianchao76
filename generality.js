	window.onload = function() {
		var arr = getCookie("shoplist");
		$(".sumcart").html(arr.length);
		$("#navnav").on("mouseenter", "li", function() {
			$("#nav1 div").removeClass("nav2")
			var on = $(this).attr("class");
			$("#nav1 ." + on).addClass("nav2")
		})
		$("#nav1").mouseleave(function() {
			$("#nav1 div").removeClass("nav2")
		})
		$("#header").mouseover(function (){
			$("#nav1 div").removeClass("nav2")
		})
		$(".guanzhu").click(function() {
			if($(".guanzhu").html() == "☆ 关注我们") {
				$(".guanzhu").html("★ 关注我们")
			} else {
				$(".guanzhu").html("☆  关注我们")
			}
		})
		$("#banner img").click(function (){
		location.href="shop.html?list=no"
	})
	$("#navnav li").each(function (index) {
		$(this).click(function (){
			if ($(this).index()!=0){
				location.href="shop.html?list="+$(this).index()
			}else{
				location.href="home.html"
			}
			
		})
	})
	$("#nav1 a").attr("href","shop.html?list=no")
	$("#cebianlan ul li").eq(0).hover(function(){
		$("#cebianlan .er").fadeToggle(200)
	})
	$("#cebianlan ul li:last").click(function(){
		$("body,html").animate({"scrollTop":"0"},500)
	})
	if (getCookie("uname")!="") {
		$("#loginid").html(`<a href="personal.html" style="color:blue" id="personal">${getCookie("uname")}</a><a href="#" id="zhuxiao">注销</a> &nbsp;<a href="order.html">订单查询</a>`)
		if (getCookie("nickname")!="") {
			$("#loginid").html(`<a href="personal.html" style="color:blue" id="personal">${getCookie("nickname")}</a><a href="#" id="zhuxiao">注销</a> &nbsp;<a href="order.html">订单查询</a>`)
		}
	}
	$("#zhuxiao").click(function(){
		removeCookie("uname");
		removeCookie("upwd");
		location.reload()
	})
	$("#cart").click(function (){
		location.href="cart.html"
	})
	$("#personal").click(function (){
		location.href="personal.html"
	})
	$(".footer .right img").hover(function(){
		$(this).attr("src","images/images/footer ("+($(this).index()+1)+").png")
	},function(){
		$(this).attr("src","images/images/footer ("+($(this).index()+6)+").png")
	})
}