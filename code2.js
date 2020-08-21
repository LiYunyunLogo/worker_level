// 建造者模式示例  编写一个编辑器插件
// 把里面独立的功能抽离出来

function Editor(){
    this.initer = new initHtml();
    this.fontControll = new fontControll()
    this.stateControll = new stateControll()
}

function initHtml(){

} 
initHtml.prototype.initStyle=function(){

}

initHtml.prototype.renderDom=function(){
    
}

function fontControll(){

}

fontControll.prototype.changeColor=function(){
    
}

fontControll.prototype.changeFontSize=function(){
    
}

function stateControll(){
    this.state = [];
    this.nowstate = 0
}

stateControll.prototype.saveState = function(){

}

stateControll.prototype.sateBack = function(){
    var state = this.state[this.nowstate-1]
    this.fontControll.changeColor(state.color)
    this.fontControll.changeFontSize(state.size)
}

stateControll.prototype.sateGo = function(){
    
}

window.Editor = Editor
