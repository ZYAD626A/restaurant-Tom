let open1 = document.getElementById('open');
let close1 = document.getElementById('close');
let ul = document.getElementById('ul1');
let nav = document.getElementById('startNav');
let up = document.getElementById('up');
window.onscroll = function(){
    if(scrollY >= 100){
        nav.style.position = "fixed";
        nav.style.top="0px";
        nav.style.background="#61C9A8";
    }else{
        nav.style.position = "relative";
    }
    if(scrollY >= 10){
        up.style.left="1%";
    }else{
        up.style.left="-100%";
    }
}

up.onclick = function(){
    scroll({
        top:0,
        behavior:"smooth"
    })
}
    open1.onclick = function(){
        ul.style.right="0%";
        close1.classList.remove("hide");
        close1.classList.add('show');
    }
    close1.onclick = function(){
        close1.classList.add("hide");
        close1.classList.remove('show');
        ul.style.right="-100%";
    };
    