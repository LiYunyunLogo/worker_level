//vue 的初始化过程
function Vue(){
    if(!(this instanceof Vue)){
        console.warn('你需要使用new操作符去实例化Vue')
    }
    //初始化
    this._init(options)
}

initMixin(Vue)

stateMixin(Vue)

eventMixin(Vue)

lifecycleMixin(Vue)

renderMixin(Vue)