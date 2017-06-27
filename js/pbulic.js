/**
 * Created by big_s on 2017-02-25.
 */
//      scroll 函数
function scroll() {
//              ie9及其他新版本浏览器
    if(window.pageYOffset != null && window.pageXOffset != null){
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
//              检测是否声明了DTD，如果声明了，则执行此语句
//              大部分浏览器
    else if(document.compatMode == 'CSS1Compat'){
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
//              检测是否声明了DTD，如果未声明，则执行此语句
//              谷歌和其他非正常浏览器
    else if(document.compatMode == 'BackCompat'){
        return {
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
    return {
        left: 0,
        top: 0
    }
}

//      $ 函数（可用id，className，tagName）
function $(input) {
    switch(input.charAt(0)){
        case '#':
            return document.getElementById(input.substr(1));
            break;
        case '.':
            return getClass(input.substr(1));
            break;
        default :
            return document.getElementsByTagName(input);
    }
}
function getClass(classname) {
    if(document.getElementsByClassName)
        return document.getElementsByClassName(classname);
    else {
        var arr = [];
        var dom = document.getElementsByTagName('*');
        var len =dom.length;
        for(var i = 0;i<len ;i++){
            var txtarr = dom[i].className.split(' ');
            for (var j =0;j<txtarr.length ; j++){
                if(classname == txtarr[j])
                    arr.push(dom[i]);
            }

        }
        return arr;
    }
}

//      显示和隐藏元素
function show(obj) {
    obj.style.display = 'block';
}
function hidden(obj) {
    obj.style.display = 'none';
}

//      封装可视化窗口大小
function client() {
    // ie9及以上版本浏览器
    if(window.innerWidth != null){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    // 标准浏览器，声明了DTD的
    else if(document.compaMode == 'CSS1Compat'){
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    // 少数怪异浏览器，未声明DTD的
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}

//      防止冒泡
function stopPropa(event) {
    event && event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
}

//  获取class类
function getClass(classname,id) {
    if(document.getElementsByClassName)
    {
        if(id){
            var eleId = document.getElementById(id);
            return eleId.getElementsByClassName(classname);
        }
        else {
            return document.getElementsByClassName(classname);
        }
    }
    if(id){
        var eleId = document.getElementById(id);
        var dom = eleId.getElementsByTagName('*');
    }
    else{
        var dom = eleId.getElementsByTagName('*');
    }
    var arr = [];
    for(var i =0;i<dom.length;i++){
        var arrtxt = dom[i].className.split(' ');
        for(var j=0;j<arrtxt.length;j++){
            if(arrtxt[j]==classname){
                arr.push(dom[i]);
            }
        }
    }
    return arr;
}

//      返回目标Id
function targetId(event) {
    return event.target.id ? event.target.id : event.srcElement.id;
}