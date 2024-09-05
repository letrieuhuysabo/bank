window.onload = function(){
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
    let scrollToTop = document.querySelector('.scrollToTop');
    scrollToTop.onclick = function() {
        window.scrollTo({top: 0});
    };
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollToTop.style.opacity = '1';
            scrollToTop.style.animation = 'fade-in 1s';
        } else {
            scrollToTop.style.opacity = '0';
            scrollToTop.style.animation = 'fade-out 1s';
        }
    });
    // Mở các mục ở center
    let center = document.querySelector("#centerReasons>div:first-child");
    center.onmouseenter = function(){
        for (let obj of document.querySelectorAll(".centerReason")){
            if (obj.classList.contains("hidden")){
                obj.classList.remove("hidden");
                obj.classList.remove("hideText14");
                obj.classList.add("showText14");
            }
        }
        center.classList.add("hoverCenter");
    }
    document.querySelector("#Center").onmouseleave = function(){
        for (let obj of document.querySelectorAll(".centerReason")){
            if (!obj.classList.contains("hidden")){
                obj.classList.remove("showText14");
                obj.classList.add("hideText14");
                setTimeout(() => addHidden(obj),500);
            }
        }
        center.classList.remove("hoverCenter");
    }
    // Mở các mục ở left
    let left = document.querySelector("#leftReasons>div:last-child");
    left.onmouseenter = function(){
        for (let obj of document.querySelectorAll(".leftReason")){
            if (obj.classList.contains("hidden")){
                obj.classList.remove("hidden");
                obj.classList.remove("hideText14");
                obj.classList.add("showText14");
            }
        }
        left.classList.add("hoverLeft");
    }
    document.querySelector("#leftReasons").onmouseleave = function(){
        for (let obj of document.querySelectorAll(".leftReason")){
            if (!obj.classList.contains("hidden")){
                obj.classList.remove("showText14");
                obj.classList.add("hideText14");
                setTimeout(() => addHidden(obj),500); 
            }
        }
        left.classList.remove("hoverLeft");
    }
    // Mở các mục ở right
    let right = document.querySelector("#rightReasons>div:first-child");
    right.onmouseenter = function(){
        for (let obj of document.querySelectorAll(".rightReason")){
            if (obj.classList.contains("hidden")){
                obj.classList.remove("hidden");
                obj.classList.remove("hideText14");
                obj.classList.add("showText14");
            }
        }
        right.classList.add("hoverRight");
    }
    document.querySelector("#rightReasons").onmouseleave = function(){
        for (let obj of document.querySelectorAll(".rightReason")){
            if (!obj.classList.contains("hidden")){
                obj.classList.remove("showText14");
                obj.classList.add("hideText14");
                setTimeout(() => addHidden(obj),500); 
            }
        }
        right.classList.remove("hoverRight");
    }
    // hiện các vị trí đang ẩn
    document.querySelector(".positions>#xemThem").onclick = function(){
        this.classList.add("displayNone");
        for (let pos of document.querySelectorAll(".position")){
            pos.classList.remove("displayNone");
        }
    }
    // Tìm kiếm vị trí
    for (let inp of document.querySelectorAll(".search>div:first-child>div>div>input")){
        inp.onchange = function(){
            let index = 0;
            // reset lại ban đầu
            if (document.querySelectorAll(".search>div:first-child>div>div>input")[0].value==="" && document.querySelectorAll(".search>div:first-child>div>div>input")[1].value===""){
                for (let pos of document.querySelectorAll(".position")){
                    if (index<6){
                        pos.classList.remove("displayNone");
                    }
                    else {
                        pos.classList.add("displayNone");
                    }
                    index++;
                }
                document.querySelector(".positions>#xemThem").classList.remove("displayNone");
            }
            else {
                document.querySelector(".positions>#xemThem").classList.add("displayNone");
                let tittle = document.querySelector("#posUngTuyen").value;
                let loc = document.querySelector("#locUngTuyen").value;
                for (let pos of document.querySelectorAll(".position")){
                    if (pos.querySelector(".posTit").textContent.includes(tittle) && pos.querySelector(".posLoc").textContent.includes(loc)){
                        pos.classList.remove("displayNone");
                    }
                    else {
                        pos.classList.add("displayNone");
                    }
                }
            }
        }
    }
}
let addHidden = function(obj){
    obj.classList.add("hidden")
}