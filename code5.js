// 单例模式 vuex 相关使用 保障全局对象只有一个

function store(){
    this.store={

    }
    if(store.install){
        return store.install
    }
    store.install = this
}

store.install = null

var s1 = new store()

var s2 = new store()



//vue-router 如何保障全局只有一个router对象

let _Vue;
function install(Vue){
    //防止vue-router重复注册
    if(install.installed && _Vue === Vue) return
    install.installed=true
    _Vue=Vue
} 

vue.use()
