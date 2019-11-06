window.onload = function(){
    // 1.设置鼠标悬停事件
    var news = document.querySelector(".news");
    var oli = document.querySelector(".hidden");
    news.onmouseover = function(){
        oli.style.display = 'block';
    }
    oli.onmouseover = function(){
        oli.style.display = 'block';
    }
    news.onmouseleave = function(){
        oli.style.display = 'none';
    }
    oli.onmouseleave = function(){
        oli.style.display = 'none';
    }

    // 2.弹出框的关闭
    var close = document.querySelector(".close");
    close.onclick = function(){
        location = "product.html";
    }

    // 3.返回按钮的点击
    var submit = document.querySelector(".submit");
    submit.onclick = function(){
        location = "product.html";
    }
}
