var EventUtil = {
    //添加事件冒泡
    addHandler: function (el, type, handler) {
        if (el.addEventListener) { //添加事件冒泡  DOM2级事件处理程序
            el.addEventListener(type, handler, false);
        } else if (el.attachEvent) { //IE事件处理程序
            el.attachEvent('on' + type, handler);
        } else {
            el['on' + type] = handler; //DOM0级处理程序
        }
    },
    //删除事件
    removeHandler: function (el, type, handler) {
        if (el.removeEventListener) { //移除事件
            el.removeEventListener(type, handler, false);
        } else if (el.detachEvent) { //IE移除事件
            el.detachEvent('on' + type, handler); //移除事件
        } else {
            el['on' + type] = null; // 空对象;
        }
    },
    // 获取event对象
    getEvent: function (event) {
        return event ? event : window.event;
        //
    },
    // 获取target对象
    getTargt: function (event) {
        return event.target || event.srcElement;
    },
    //阻止默认事件
    preventDefault: function (event) {
        //只有cancelable属性设置为true的时候才能使用preventDefault来阻止默认程序
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            eval.returnValue = false;
        }
    },
    //阻止事件冒泡
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },


    //获取相关元素  ,只有mouseover 和 mouseout 事件才有这和方法 其他事件返回null
    getRelatedTarget: function (event) {
        if (event.relatedTarget) { //IE9-不支持这个方法
            return event.relatedTarget;
        } else if (event.toElement) { //IE的mouseout事件包含了这个还属性
            return event.toElement;
        } else if (event.fromeElement) { //IE的mouseover事件包含了这个属性
            return event.fromeElement;
        } else {
            return null;
        }
    },

    getButton: function (event) {
        if (document.implementation.hasFeature('MouseEvents', '2.0')) {
            return event.button;
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },


    getCharCode: function (event) {
        //在不支持charCode的浏览器中 返回的是undefined; 否则返回keyCode
        if (typeof event.charCode == 'number') {
            return event.charCode;
        } else {
            return evnet.keyCode; //IE 8- 和opera浏览器
        }
    },
    //添加操作剪切板
    //获取值
    getClipboardText: function (event) {
        var clipboardData = (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },
    //设置值
    setClipboardText: function (event, value) {
        if (event, clipboardData) {
            return event.clipboardData.setData('text/plain', value);
        } else if (window.clipboardData) {
            return Window.clipboardData.setData('text/plain', value);
        }
    }
}