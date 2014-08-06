// JavaScript Document
(function($) {
	$.fn.PicTab = function(option) {
		var _pic = $(this).children(".main_pic"); //图片UL
		var _num = $(this).children(".main_pic_num"); //数字UL
		var _picLI = _pic.children("li"); //图片Li
		var LI_width = _picLI.width(); //图片宽度
		var currentIndex = -1; //当前索引
		var option = option || {};
		var animateSpeed = option.aTime || 200; //动画速度，默认200毫秒
		var timeSpeed = option.tTime || 2000; //时间速度，默认2000毫秒
		_pic.css("width", _picLI.length * LI_width); //设置图片UL的宽度
		_num.children("li").each(function(index){//设置数字UL的LI的mouseover事件
			$(this).mouseover(function(){
				$(this).css("margin-top", "-10px").siblings().css("margin-top","0px");
				_pic.stop(true, false).animate({"left": -index * LI_width + "px"},animateSpeed);
				currentIndex = $(this).index();
			});
		});
		_num.children("li").eq(0).mouseover(); //触发下标为0的mouseover事件
		var goAuto = setInterval(function() //	自动轮播
		{
			currentIndex = currentIndex + 1 >= _picLI.length ? 0 : currentIndex + 1;
			_num.children("li").eq(currentIndex).mouseover();
		}, timeSpeed);
	}
})(jQuery)