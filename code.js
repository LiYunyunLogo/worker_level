(function(){
    // 工厂模式实例

// function infoPop(){

// }

// function confirmPop(){

// }

// function canclePop(){

// }
// 工厂模式构造器
function pop(type,content,color){
    if(this instanceof pop){
        // 由于方法已经挂载到了原型上，所以可以直接this调用
        var s = new this[color](content,color)
    }else{
        return new pop(type,content,color)
    }
    //用new this[color](content,color)的方式 代替switch  Case
    // switch (type){
    //     case "infoPop":
    //         return new infoPop(content,color);
    //     case "confirmPop":
    //         return new confirmPop(content,color);
    //     case "canclePop":
    //         return new canclePop(content,color)
    // }
}

// 然后把方法挂载到pop的原型上 使内部this能够直接访问  
// 并且可扩展性也可以直接在 prototype上得到体现 （在prototype上添加或者修改），增强了代码健壮性
pop.prototype.infoPop = function() {

}
pop.prototype.confirmPop = function() {
    
}
pop.prototype.cnacelPop = function() {
    
}
//闭包模式 只暴露工厂模式方法
window.pop = pop
})()

// 这样一来我们就可以直接使用配置化来调用我们的pop方法
const array = [
    {type:'infoPop',word:'hello',color:'red'},
    {type:'infoPop',word:'hello',color:'red'},
    {type:'infoPop',word:'hello',color:'red'},
    {type:'infoPop',word:'hello',color:'red'},
    {type:'infoPop',word:'hello',color:'red'},
    {type:'infoPop',word:'hello',color:'red'},
    {type:'infoPop',word:'hello',color:'red'},
]
pop(infoPop,"hellow",'red')











// 建造者模式实例


// 单例模式实例