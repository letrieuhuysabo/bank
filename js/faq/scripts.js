window.onload = function() {
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
    let faqs = document.querySelectorAll('.faqWrapper .faq');    
    for (let i = 0; i < faqs.length; i++) {
        faqs[i].onclick = function() {
            let faqActiveOld = document.querySelector('.faqActive');
            faqActiveOld.classList.remove('faqActive');
            faqs[i].classList.add('faqActive');
        }
    }
}

function search() {
    let input = document.getElementById("searchInput").value;
    let faqs = document.querySelectorAll('.faqWrapper .faq');
    for (let i = 0; i < faqs.length; i++) {
        if (faqs[i].querySelector('.question h3').textContent.toLowerCase().includes(input.toLowerCase())) {
            faqs[i].querySelector('.question h3').innerHTML = (faqs[i].querySelector('.question h3').textContent).replace(RegExp(input, "gi"), "<mark>$&</mark>");
        }
    }    
    return false;
}