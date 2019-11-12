var open = document.querySelector('.logo_open');//获取三条杠,也就是打开按钮
var aside = document.querySelector('.aside');//获取侧边栏
// 显示侧边栏
open.addEventListener('click', function () {
   aside.style.left = '0';
});
var close = document.querySelector('.close');//获取关闭按钮
// 关闭侧边栏
close.addEventListener('click', function () {
   aside.style.left = '-260px';
});
var down = document.querySelectorAll('.aside_nav>li>a');//获取侧边栏的li,点击下滑显示
var down_content = document.querySelectorAll('.aside_subnav');//获取下滑内容
var down_fu = document.querySelectorAll('.aside_nav li .icon-jiabeifen');//获取符号
// console.log(down,down_content,down_fu);
for (var i = 0; i < down.length; i++) {
   down[i].index = i;
   // 下滑或上拉内容
   down[i].addEventListener('click', function() {
      if (down_content[this.index].style.maxHeight == 0) {
         down_content[this.index].style.maxHeight = down_content[this.index].scrollHeight + 'px';
         down_fu[this.index].style.transform = 'rotate(-45deg)';
      } else {
         down_content[this.index].style.maxHeight = null;
         down_fu[this.index].style.transform = 'rotate(0deg)';
      }
   });
}
var search_input = document.querySelector('.search_input');//获取搜索文本框
var search_content = document.querySelector('.search_content');//获取搜索内容
var search_span = document.querySelectorAll('.search_content ul li span');//获取搜索内容里的span
for (var i = 0; i < search_span.length; i++) {
   search_span[i].addEventListener('click',function() {
      search_input.value = this.innerHTML;
   });
}
search_input.addEventListener('focus', function() {
   // search_content.style.display = 'block';
   search_content.style.height = '250px';
   search_content.style.border = '1px solid #ccc';
});
search_input.addEventListener('blur', function() {
   // search_content.style.display = 'none';
   search_content.style.height = '0';
   search_content.style.border = '0px solid #fff';
});
// 语言
var language = document.querySelector('.login ul li:nth-child(1)');//获取语言按钮
var language_box = document.querySelector('.language');//获取语言内容盒子
var language_close = document.querySelector('.language .language_box .lgclose');//获取关闭按钮
language.addEventListener('click',function() {
   language_box.style.display = 'block';
});
language_close.addEventListener('click',function() {
   language_box.style.display = 'none';
});
window.onclick = function(e) {
   if (e.target == language_box) {
      language_box.style.display = 'none';
   }
}
// 改变背景色
var changeBg = document.querySelector('.changeBg');
var changeBoll = document.querySelector('.changeBoll');
var changeFlag = true;
changeBg.addEventListener('click', function() {
   if (changeFlag) {
      document.body.style.backgroundColor = '#ccc';
      changeBg.style.backgroundColor = '#ccc';
      changeBoll.style.transform = 'translateX(40px)';
      changeFlag = false;
   } else {
      document.body.style.backgroundColor = '#fff';
      changeBg.style.backgroundColor = '#fff';
      changeBoll.style.transform = 'translateX(0)';
      changeFlag = true;
   }
});
// 信息
var msg_box = document.querySelector('.msg');
var msg = document.querySelector('.login ul li:nth-child(3) img');
var msgFlag = true;
msg.addEventListener('click',function() {
   if (msgFlag) {
      msg_box.style.opacity = '1';
      msg_box.style.maxHeight = '250px';
      msgFlag = false;
   } else {
      msg_box.style.opacity = '0';
      msg_box.style.maxHeight = '0';
      msgFlag = true;
   }
});
// 登录与注册
var loginbtn = document.querySelector('.lgopen');
var rgclose = document.querySelector('.rgclose');
var login_container = document.querySelector('.login_container')
var lgn = document.querySelector('.lgn');
var rgs = document.querySelector('.rgs');
var lgn_box = document.querySelector('.lgn_box');
var rgs_box = document.querySelector('.rgs_box');
lgn.addEventListener('click', function() {
   lgn.style.opacity = '1';
   rgs.style.opacity = '0.4';
   lgn_box.style.display = 'block';
   rgs_box.style.display = 'none';
});
rgs.addEventListener('click', function() {
   rgs.style.opacity = '1';
   lgn.style.opacity = '0.4';
   lgn_box.style.display = 'none';
   rgs_box.style.display = 'block';
});
loginbtn.addEventListener('click', function() {
   login_container.style.display = 'block';
});
rgclose.addEventListener('click', function() {
   login_container.style.display = 'none';
});
window.onclick = function(e) {
   if (e.target == login_container) {
      login_container.style.display = 'none';
   }
}