let canClickIntoTamNhin = 1;
//Biến dùng để mở content value
let canOpenContentValues = [1,1,1,1,1,1]
//Biến dùng để ẩn hiện thành tựu
let showRewards = 0;
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
    // Chuyển qua lại giữa sứ mệnh và tầm nhìn
    let showTamNhin = 1;
    document.querySelector("#contentTamNhin_SuMenh").onclick = function(){
        if (showTamNhin===1 && canClickIntoTamNhin === 1){
            canClickIntoTamNhin = 0;
            document.querySelector("#contentTamNhin_SuMenh").classList.add("animate__flipInY");
            document.querySelector("#TamNhin").classList.add("displayNone");
            document.querySelector("#SuMenh").classList.remove("displayNone");
            setTimeout(deleteClassAnimOfTamNhinSuMenh,700);
            showTamNhin=0;
        }
        else if (showTamNhin===0 && canClickIntoTamNhin === 1){
            canClickIntoTamNhin = 0;
            document.querySelector("#contentTamNhin_SuMenh").classList.add("animate__flipInY");
            document.querySelector("#TamNhin").classList.remove("displayNone");
            document.querySelector("#SuMenh").classList.add("displayNone");
            setTimeout(deleteClassAnimOfTamNhinSuMenh,700);
            showTamNhin=1;
        }
    }
    // Các giá trị cốt lõi
    let values = document.querySelectorAll(".value");
    for (let i in values){
        values[i].onmouseout = function(){
            let content = document.querySelector(`#value${i+1} + div`);
            // alert("hello");
        }
    }
    // Hiện các giải thưởng
    let xemThemButton = document.getElementById("xemThemButton");
    xemThemButton.onclick = function(){
        if(showRewards===0){
            let rewards = document.querySelector(".ThemThanhTuu>div");
            rewards.classList.remove("displayNone");
            xemThemButton.innerText = "Ẩn bớt";
            showRewards = 1;
        }
        else if (showRewards===1){
            let rewards = document.querySelector(".ThemThanhTuu>div");
            rewards.classList.add("displayNone");
            xemThemButton.innerText = "Xem thêm";
            showRewards = 0;
        }
    }
    // Ấn vào ảnh giải thưởng nào là cái đó hiện lớn ra
    let imgRewards = document.querySelectorAll(".ThanhTuu>img");
    for (let imgReward of imgRewards){
        imgReward.onclick = function(){
            let bigImg = document.getElementById("bigImg");
            bigImg.src = imgReward.src;
            document.querySelector(".showImgRewards").classList.remove("displayNone");
        }
    }
    document.querySelector(".showImgRewards>div:first-child").onclick = function(){
        document.querySelector(".showImgRewards").classList.add("displayNone");
    }
}
let deleteClassAnimOfTamNhinSuMenh = function(){
    document.querySelector("#contentTamNhin_SuMenh").classList.remove("animate__flipInY");
    canClickIntoTamNhin = 1;
}