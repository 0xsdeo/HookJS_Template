// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-01-05
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let property_accessor = Object.getOwnPropertyDescriptor(目标属性所在对象, "属性名"); // 获取目标属性访问器描述符
    let get_accessor = property_accessor.get; // 获取getter
    let set_accessor = property_accessor.set; // 获取setter

    Object.defineProperty(要hook的对象, "属性名", {
        get: function () {
            // 在这里写你想让hook后的属性在被获取值时执行的代码
            return get_accessor.call(要hook的对象); // 当网站js获取目标属性值时调用原属性getter返回结果
        },
        set: function () {
            // 在这里写你想让hook后的属性在被设置值时执行的代码
            set_accessor.call(要hook的对象, ...arguments);// 将网站js设置目标属性值时所传入的内容传给原setter设置并返回结果
        }
    });
})();