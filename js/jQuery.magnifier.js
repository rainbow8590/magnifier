
;(function($){
    $.fn.extend({
        "magnifier":function(option){

            //默认参数  // 设置遮罩初始的位置
            var defaults = {
                x:0,
                y:0
            };

            var options = $.extend({},defaults,option);
            
            $(options.min).mouseover(function(){
                // 获取小图的位置
                var minP = $(options.min).offset();
                // 显示大图的位置
                $(options.max).css({top:minP.top,left:minP.left+$(options.min).width() + options.gap}); 
                $(options.max).show();
                $(options.z).show();
            // 鼠标移出到小图
            }).mouseout(function(){
                $(options.max).hide();
                $(options.z).hide();
            // 鼠标移动
            }).mousemove(function(e){
                // 遮罩处理
                // 获取鼠标相当于小图的位置
                var minTop = e.pageY - $(options.min).offset().top;
                var minLeft = e.pageX - $(options.min).offset().left;

                // 设置 x 方向遮罩的边界
                if(minLeft < $(options.z).width()/2){
                    options.x = 0;
                }else if(minLeft > $(options.min).width() - $(options.z).width()/2){
                    options.x = $(options.min).width() - $(options.z).width();
                }else{
                    options.x = minLeft - $(options.z).width()/2;
                }

                // 设置 y 方向遮罩的边界
                if(minTop < $(options.z).height()/2){
                    options.y = 0;
                }else if(minTop > $(options.min).height() - $(options.z).height()/2){
                    options.y = $(options.min).height() - $(options.z).height();
                }else{
                    options.y = minTop - $(options.z).height()/2;
                }

                $(options.min).find(options.z).css({top:options.y, left:options.x});
                // 鼠标相对于小图的位置
                $(options.max).scrollTop(minTop*($(options.bigImg).height()/$(options.smallImg).height()) - $(options.max).height()/2).scrollLeft(minLeft*($(options.bigImg).width())/$(options.smallImg).width() - $(options.max).width()/2);
            })
            return this;
        }
    })
})(jQuery)
