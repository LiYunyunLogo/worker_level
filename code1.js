// jquery 源码封装模式了解

(function(){
    var jQuery = function(selectory,context){

        return new jQuery.fn.init(selectory,context)
    }
    jQuery.fn = jQuery.prototype ={
        init:function(){

        }
    }
    // 
    jQuery.fn.init.prototype =  jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function(){

    }

    jQuery.extend({})

    // 只暴露工厂方法
    window.$=window.jQuery = jQuery
})()