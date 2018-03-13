//banner
{let imgs=document.querySelectorAll(".imgbox li");
let pagers=document.querySelectorAll(".pagebox li");
let banner=document.querySelector("#banner1")
let next=document.querySelector(".btn1")
let prev=document.querySelector(".btn2")
pagers.forEach(function (ele,index) {
    ele.onclick=function () {
        for (let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        this.classList.add("active");
        imgs[index].classList.add("active");
        n=index;
    }
})
    function move() {
        n++;
        if (n===imgs.length){
            n=0;
        }
        if (n <0) {
            n = imgs.length-1;
        }

        for (let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }
var n=0;
let t=setInterval(move,3000);
banner.onmouseenter=function () {
    clearInterval(t)
}
banner.onmouseleave=function () {
    t=setInterval(move,3000)
}
let flag=true
    next.onclick=function () {
        if (flag) {
            flag = false
            move();
        }
    };
    prev.onclick=function () {
        if (flag) {
            flag = false
            n -= 2;
            move();
        }
    };
    imgs.forEach(function (ele,index) {
        ele.addEventListener("transitionend",function () {
            flag=true;
        });
    });
}
//mingxingdanpin

{
    const prev=document.querySelector(".mingxing_anniu2")
    const next=document.querySelector(".mingxing_anniu1")
    const inner=document.querySelector(".mingxing_tu")
    let n=0
    next.onclick=function () {
        n++;
        prev.classList.remove("disable")
        if (n===2){
            this.classList.add("disable")
        }
        if (n===3){
            n=2;
            return;
        }
        inner.style.marginLeft=-992*n+"px";
    }
    prev.onclick=function () {
        n--;
        next.classList.remove("disable");
        if (n===0){
            prev.classList.add("disable")
        }
        if (n===-1){
            n=0;
            return;
        }
        inner.style.marginLeft=-992*n+"px";
    }
}
//genghuanbiaoqian
{
    function content(parent) {
        const types = parent.querySelectorAll(".teshuzi");
        const goods = parent.querySelectorAll(".dapei_tu");
        types.forEach(function (ele, index) {
            ele.onmouseenter = function () {
                for (let i = 0; i < types.length; i++) {
                    types[i].classList.remove("yiruxiaoguo");
                    goods[i].classList.remove("yiruxiaoguo");

                }
                this.classList.add("yiruxiaoguo");
                goods[index].classList.add("yiruxiaoguo")
            }

        })
    }
    const  contentList=document.querySelectorAll(".content");
    content(contentList[0]);
    content(contentList[1]);
    // content(contentList[2]);
    // content(contentList[3]);
    // content(contentList[4]);
    contentList.forEach(function (ele) {
        content(ele);
    })
}

{function wheel(parent) {
    let prev=parent.querySelector(".btnleft");
    let next=parent.querySelector(".btnright");
    let inner=parent.querySelector(".dahezi");
    let contentss=parent.querySelectorAll(".nrong");
    console.log(contentss)
    let pagers=parent.querySelectorAll(".lunbodian li");
    let n=0;
    next.onclick=function () {
        n++;
        if (n===contentss.length){
            n=contentss.length-1;
            return;
        }
        inner.style.marginLeft=-296*n+"px";
        pagers[n].classList.add("active3");
        pagers[n-1].classList.remove("active3");
        let obj=pagers[0];
    };
    prev.onclick=function () {
        n--;
        if(n===-1){
            n=0;
            return;
        }
        inner.style.marginLeft=-296*n+"px";
        pagers[n].classList.add("active3");
        pagers[n+1].classList.remove("active3");
        let obj=pagers[0];
    };
    let obj=pagers[0];
    pagers.forEach(function (ele,index) {
        ele.onclick=function () {
            obj.classList.remove("active3");
            this.classList.add("active3");
            obj=this;
            inner.style.Left=index*-296*n+"px";
            n=index;
        }
    })}
    let items=document.querySelectorAll(".bigbox")
    wheel(items[0]);
    wheel(items[1]);
    wheel(items[2]);
    wheel(items[3]);
}
{
    let nav=document.querySelector(".banner_nav");
    let labels=document.querySelectorAll(".label");
    let menus=document.querySelectorAll(".bannerzhankai");
    let obj=menus[0];
    labels.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function () {
            menus[index].style.display="none"
        }
    })
}
{
    let labels=document.querySelectorAll(".daohang_title");
    let menus=document.querySelectorAll(".daohang_nrong");
    let word=document.querySelector(".daohang_box");
    // let obj=menus[0];
    console.log(labels)
    labels.forEach(function (ele,index) {
        ele.onmouseenter=function () {

            word.style.height=400+"px";
            // obj.style.display="none";
            // word.addEventListener("transitionend",function () {
                menus[index].style.display="block";
            // });

            // obj=menus[index];
        }
        ele.onmouseleave=function () {
            word.style.height=0;
                menus[index].style.display="none";
        }
    })
}