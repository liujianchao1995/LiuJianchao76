
function floatcart () {
		$(".floatcart").fadeIn(200)
		var arr = getCookie("shoplist");
		var html = "";
		for(var i in arr) {
			var shopinfo = arr[i];
			html += `<div class="cmain" data-id="${shopinfo.id}"><div class="fzuo loac"><img src="${shopinfo.src}"></div><div class="fyou loac"><p class="p1">${shopinfo.name}</p><p class="p2">${shopinfo.type}</p><p class="p3" >¥<span style="color: red;" class="sumPrice">${shopinfo.count*shopinfo.price}.00</span>&nbsp;&nbsp;X<span class="shop-count">${shopinfo.count}</span></p><p></p></div><div class="delshop">X</div></div>`;
		}
		var html1 = '<p class="ft">我的商品</p>';
		var html3 = `<div class="shopsum"><div class="szuo">商品合计：¥<span id="money22" style="color: red;"></span></div><div class="syou" style="cursor:pointer">去结算</div></div>`;
		var html2 = '<div class="cartlist">' + html + '</div>';
		var str = document.cookie;
		var split = str.split("=")[0]
		if(getCookie("shoplist") == "" || arr.length == 0) {
			$(".noshop").css("display", "block")
		} else {
			$(".hasshop").html(html1 + html2 + html3);
			$(".noshop").css("display", "none")
		}
		
		$(".cartlist .delshop").click(function (){
			$(".sumcart").html(arr.length);
			var id = $(this).parent().data("id"); //获取当前要删除的商品编号 和名称
			for(var i in arr) {
				if(id == arr[i].id) {
					arr.splice(i, 1);
					//操作数组同时，也要改变cookie
					setCookie("shoplist", JSON.stringify(arr));
					$(this).parent().remove();
				}
			}
			if(getCookie("shoplist") == "" || arr.length == 0) {
				$(".noshop").css("display", "block")
				$(".hasshop").html("")
			}
			floatcart()
		})

		//加减操作
		$(".updateCount").click(function() {
			
			var sign = $(this).html();
			var id = $(this).parent().parent().parent().data("id"); //获取当前要删除的商品编号 和名称
			//取出数量
			var num = $(this).parent().find(".shop-count").val();
			if(sign == "-" && num == 1) {
				return;
			}
			for(var i in arr) {
				if(id == arr[i].id) {
					sign == "+" ? arr[i].count++ : arr[i].count--;
					setCookie("shoplist", JSON.stringify(arr));
					$(this).parent().find(".shop-count").val(arr[i].count);
					console.log(arr[i].count)
					$(this).parent().parent().parent().find(".sumPrice").html(arr[i].count * arr[i].price + ".00");
				}
			}
			
		})
		
		var money=0;
	for (var c=0;c<$(".floatcart .sumPrice").size();c++) {
		money+=(Number($(".floatcart .sumPrice").eq(c).html()))
	}
	$("#money22").html(money)	
	
	
	$(".syou").click(function(){
		location.href="cart.html"
	})
	$(".loac").click(function (){
	location.href=`detail.html?shop=${($(this).parent().data("id"))-1}`
})
	$(".sumcart").html(arr.length)
}
$("#cart").mouseenter(function (){
	floatcart()
	})
	$("#top").mouseleave(function(){
		$(".floatcart").fadeOut(200)
})

