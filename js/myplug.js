$(function(){
	
	showScroll('#scrollTo');
	checkTab(  $('#hobyTag>li'),'active' ,$('.cTag'));
	autoPlay($('#scrollPics') ,$(".slider") ,$('.slider li') ,$('.num>li') ,'on');
	shareTo('#share');

});
	//回到顶部按钮开始
	function showScroll(oid){
		$(window).scroll(function(){
			var y = $(window).scrollTop();
			y>100?$(oid).fadeIn():$(oid).fadeOut();
		});
		$(oid).click(function(){
			$('html,body').animate({scrollTop:100},200);
		})
	}
	//回到顶部按钮结束
	/*----------------------------------------------------------------------*/
	//选项卡
	//obj1  标签  	Id 或者 Class
	//attr  标签 	的样式
	//boj2  选项卡	的Id 或者 Class
	function checkTab(obj1,attr,obj2){
			var oli = obj1;
			var otab = obj2;
			otab.eq(0).show();
			oli.click(function(){	
				$(this).addClass(attr).siblings().removeClass(attr);
				otab.eq($(this).index()).show().siblings().hide();
			});
	}
	//选项卡结束

	//图片上下滚动轮播开始
	//轮播 上下滚动广告
	//图片上下滚动是通过操作 图片部分UL 的margin 值来完成的
	//ojb1 轮播盒子对象		 鼠标移入移除控制 播放功能停止 开始
	//obj2 轮播图片UL对象	 操纵该UL的margin值 来实现滚动
	//obj3 轮播图片Li对象	 播放哪一张图片
	//obj4 按钮的Li对象		 播放切换按钮
	//attr 按钮被选中时的样式	
	//autoPlay($('#scrollPics') ,$(".slider") ,$('.slider li') ,$('.num>li') );
	function autoPlay(obj1,obj2,obj3,obj4,attr){
			//轮播 上下滚动广告
			var len = $('.slider li').length;
			/*var adHeight = $("#scrollPics>ul>li:first").height();*/	
			var index = 0;
			var timer = null;
			//切换按钮控制
			obj4.mouseover(function(){
					var index = $(this).index();
					showScroll(index);
			});
			//自动播放  鼠标移入移出 播放开始停止
			// $('#scrollPics').hover(function(){
			obj1.hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(function(){
					index++;
					if(index==len) index=0;
					/*index = index%len;*/
					showScroll(index);
				},4000);
			});
			//图片滚动功能
			function showScroll(index){
				var h =obj3.height(); 
				obj4.eq(index).addClass(attr).siblings().removeClass(attr);
				/*alert(index*h);*/
				obj2.stop(true, true).animate({
			           "marginTop": -h * index + "px"    //改变 marginTop 属性的值达到轮播的效果
			       }, 1000);
				// $("h1").text("h:"+h +" index:"+index+"="+h * index);
			}
	}



	//分享功能 
	//左侧固定定位 鼠标移入显示移除隐藏分享块
	//obj 分享模块id 或 class
	
		function shareTo(obj){
			var h = Math.floor(($(window).height()-$(obj).height())/2);
			$(obj).css({top:h+'px'});
			$(obj).hover( function(){
				$(obj).animate({left:0});
			},function(){
				$(obj).animate({left:-212+'px'});
			} );
		}

	//分享功能 结束



	 //右侧广告  QQ 滑动悬浮框
	 //当页面滚动时 悬浮框滑动到 浏览器可视区域正中间位置

	 $(window).scroll(function(){
	 	tipsScroll('#qq');
	 });

	 function tipsScroll(obj){
	 	// $('#qq').css('top':h+'px');
	 	// var j = $(window).scrollTop();
	 	// var y = $(window).height();
	 	// var h = $('#qq').height();
	 	// var num = Math.floor((y-h)/2);
	 	var h = $(window).scrollTop() + Math.floor(($(window).height() - $(obj).height())/2) ;
	 	// var d = j+num;
	 	$(obj).stop().animate({
	 		'top': h+'px'
	 	},600);
	 }