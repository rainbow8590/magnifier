### 放大镜插件
#### 介绍
    放大镜是商城经常用到的一个插件，这个插件是基于jquery封装的，可以实现商场商品放大的功能；
### 使用
    <script src="js/jQuery.magnifier.min.js"></script>
    $(document).ready(function() {
        $("#min").magnifier({
            max:"#max",
            min:"#min",
            z:".z",
            bigImg:'#bigImg',
            smallImg:'#smallImg',
            gap:10
        });
    });
### 参数配置
    $("#min").magnifier({
        //放大图片的父容器
        max:"#max",
        //需要放大的图片的容器
        min:"#min",
        //放大镜上的遮罩层
        z:".z",
        //大图片的选择器
        bigImg:'#bigImg',
        //小图片的选择器
        smallImg:'#smallImg',
        //大图容器和小图容器之间的间距
        gap:10 
    });