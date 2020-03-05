// ==UserScript==
// @name         copy
// @name:zh-CN  文本复制（默认百度文库自动开启，其他请手动开启）
// @description 文本复制，只需鼠标选取出要复制部分，即可，适用于百度文库等不能选择的页面。
// @description:zh-CN  文本复制，只需鼠标选取出要复制部分，即可，适用于百度文库等不能选择的页面。
// @namespace    http://liuzhang.top
// @version      0.1
// @author       流涨
// @match        https://wenku.baidu.com/*
// @require      https://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$(document).ready(function () {
    $("body").mouseup(function (e) {
        var txt;
        txt = window.getSelection();
        var oInput = document.createElement('input');
        oInput.value = txt;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.style.display='none';
    });
});