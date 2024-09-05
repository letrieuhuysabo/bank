window.onload = function() {
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
    let slides = document.querySelectorAll('.showcaseSlides .scSlide');;
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let slideActive = 0;
    let lengthSlides = slides.length;
    next.onclick = function() {
        let slideActiveOld = document.querySelector('.showcaseSlides .scSlide.scActive');
        slideActive =  slideActive + 1;
        if (slideActive >= lengthSlides) {
            slideActive = 0;
        }   
        slideActiveOld.classList.remove('scActive');
        slides[slideActive].classList.add('scActive');
    }
    prev.onclick = function() {
        let slideActiveOld = document.querySelector('.showcaseSlides .scSlide.scActive');
        slideActive = slideActive - 1;
        if (slideActive < 0) {
            slideActive = lengthSlides - 1;
        }
        slideActiveOld.classList.remove('scActive');
        slides[slideActive].classList.add('scActive');
    }
    setInterval(function() {
        let slideActiveOld = document.querySelector('.showcaseSlides .scSlide.scActive');
        slideActive = slideActive + 1;
        if (slideActive >= lengthSlides) {
            slideActive = 0;
        }
        slideActiveOld.classList.remove('scActive');
        slides[slideActive].classList.add('scActive');
    }, 6000);
    let popUpSlides = document.querySelectorAll('.popupSlides .popupSlide');
    let popUpActive = 0;
    let popUpLength = popUpSlides.length;
    setInterval(function() {
        let popUpActiveOld = document.querySelector('.popupSlide.popActive');
        popUpActive = popUpActive + 1;
        if (popUpActive >= popUpLength) {
            popUpActive = 0;
        }
        popUpActiveOld.classList.remove('popActive');
        popUpSlides[popUpActive].classList.add('popActive');
    }, 6000);
    let closePopUp = document.getElementById('closePopUp');
    closePopUp.onclick = function() {
        document.querySelector('.under').style.display = 'none';
    }
    let registerWrapper = document.querySelector('.registerWrapper');
    let loginWrapper = document.querySelector('.loginWrapper');
    let forgotPasswordWrapper = document.querySelector('.forgotPasswordWrapper');
    let register = document.getElementById('register');
    let registerText = document.querySelector('.register');
    let registerSorry = document.querySelector('.registerWrapper .sorryMessage');
    let login = document.getElementById('login');
    let login2 = document.getElementById('loginAlt');
    let loginText = document.querySelector('.login');
    let forgotPassword = document.getElementById('forgotPassword');
    register.onclick = function() {
        registerWrapper.style.display = "block";
        registerWrapper.querySelector('form').style.display = "block";
        registerWrapper.querySelector('form').style.animation = "fade-in 1s ease";
        registerText.style.display = "none";
        loginWrapper.style.display = "none";
        loginText.style.display = "inline-block";
        forgotPasswordWrapper.style.display = "none";
    };
    login.onclick = login2.onclick = function() {
        registerWrapper.style.display = "none";
        registerWrapper.querySelector('form').style.display = "none";
        registerText.style.display = "inline-block";
        registerSorry.style.display = "none";
        loginWrapper.style.display = "block";
        loginWrapper.style.animation = "fade-in 1s ease";
        loginText.style.display = "none";
        forgotPasswordWrapper.style.display = "none";
    }
    forgotPassword.onclick = function() {
        registerWrapper.style.display = "none";
        registerWrapper.querySelector('form').style.display = "none";
        loginWrapper.style.display = "none";
        forgotPasswordWrapper.style.display = "block";
        forgotPasswordWrapper.style.animation = "fade-in 1s ease";
    }
}

function validateRegister() {
    let email = document.forms["register"]["accountRegister"].value;
    let name = document.forms["register"]["accountNameRegister"].value;
    let password = document.forms["register"]["passwordRegister"].value;
    let confirmPassword = document.forms["register"]["confirmPasswordRegister"].value;
    let checkBox = document.forms["register"]["checkbox"].checked;
    if (email === '' || name === '' || password === '' || confirmPassword === '' ||!checkBox) {
        alert("Vui lòng điền vào tất cả chỗ trống và đồng ý Điều khoản!");
        return false;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Địa chỉ email không hợp lệ");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Mật khẩu không hợp lệ");
        return false;
    }
    let register = document.querySelector('.registerWrapper form');
    let registerSorry = document.querySelector('.registerWrapper .sorryMessage');
    register.style.display = "none";
    registerSorry.style.display = "block";
    registerSorry.style.animation = "fade-in 1s ease"
    return false;
}

function validateLogin() {
    let email = document.forms["login"]["accountLogin"].value;
    let password = document.forms["login"]["passwordLogin"].value;
    if (email === '' || password === '') {
        alert("Vui lòng điền tất cả các mục!");
        return false;
    }
    return false;
}

function validateForgotPassword() {
    let email = document.forms["forgotPassword"]["accountForgot"].value;
    if (email === '') {
        alert("Vui lòng điền địa chỉ email!");
        return false;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Địa chỉ email không hợp lệ");
        return false;
    }
    document.querySelector('.forgotPasswordWrapper .successMessage').style.display = "block";
    return false;
}