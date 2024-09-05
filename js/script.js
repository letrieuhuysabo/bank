function copyStringToClipboard (str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
}

window.onload = function() {
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
    let slides = document.querySelectorAll('.slideshow .slide');
    let dots = document.querySelectorAll('.dots li');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let slideActive = 0;
    let lengthSlides = slides.length;
    next.onclick = function() {
        let slideActiveOld = document.querySelector('.slideshow .slide.slideActive');
        let dotActiveOld = document.querySelector('.dots .dotActive');
        slideActive =  slideActive + 1;
        if (slideActive >= lengthSlides) {
            slideActive = 0;
        }
        slideActiveOld.classList.remove('slideActive');
        dotActiveOld.classList.remove('dotActive');
        slides[slideActive].classList.add('slideActive');
        dots[slideActive].classList.add('dotActive');
    }
    prev.onclick = function() {
        let slideActiveOld = document.querySelector('.slideshow .slide.slideActive');
        let dotActiveOld = document.querySelector('.dots .dotActive');
        slideActive = slideActive - 1;
        if (slideActive < 0) {
            slideActive = lengthSlides - 1;
        }
        slideActiveOld.classList.remove('slideActive');
        dotActiveOld.classList.remove('dotActive');
        slides[slideActive].classList.add('slideActive');
        dots[slideActive].classList.add('dotActive');
    }
    let servicesSlide = document.querySelector('.wrapper2');
    let prevBtn = document.getElementById("svPrev");
    let nextBtn = document.getElementById("svNext");
    nextBtn.onclick = function() {
        let w = window.innerWidth;
        if (w < 639) {
            servicesSlide.scrollLeft += 180;
        }
        else {
            servicesSlide.scrollLeft += 1200;
        }
    }
    prevBtn.onclick = function() {
        let w = window.innerWidth;
        if (w < 639) {
            servicesSlide.scrollLeft -= 180;
        }
        else {
            servicesSlide.scrollLeft -= 1200;
        }
    }
    let services = document.querySelectorAll('.wrapper1 .wrapper2 .item');
    let svDetails = document.querySelectorAll('.serviceWrapper .serviceDetail');
    for (let i = 0; i < services.length; i++) {
        services[i].onclick = function() {
            let svActiveOld = document.querySelector('.item.svActive');
            let svdActiveOld = document.querySelector('.serviceDetail.svdActive');
            svActiveOld.classList.remove('svActive');
            svdActiveOld.classList.remove('svdActive');
            services[i].classList.add('svActive');
            svDetails[i].classList.add('svdActive');
        }
    };
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
    let closeBtn = document.getElementById('closeBtn');
    let newsPopup = document.querySelector('.newsPopup');
    let newsDetailList = document.querySelectorAll('.newsWrapper .newsDetail');
    let newsDetail = document.querySelector('.newsWrapper');
    let headlines = document.querySelectorAll('.news > .headlineWrapper .headlineItem');
    for (let i = 0; i < headlines.length; i++) {
        headlines[i].onclick = function() {
            let savedScrollY = window.scrollY;
            setTimeout(function() {
                window.scrollTo({
                    top: savedScrollY, 
                    behavior: 'instant',
                });
            }, 10);  
            setTimeout(function() {
                newsDetail.scrollTo({
                    top: 0, 
                    behavior: 'instant',
                });
            }, 10);
            newsPopup.style.display = "flex";
            newsPopup.style.animation = 'fade-in 200ms ease'; 
            let oldNews = document.querySelector('.newsActive');
            if (oldNews != null) {
                oldNews.classList.remove('newsActive');
            }
            newsDetailList[i].classList.add('newsActive');
            let copySource = newsDetailList[i].querySelector('.source-name');
            copySource.onclick = function () {
                copyStringToClipboard(newsDetailList[i].querySelector('.source-link').innerHTML);
                newsDetailList[i].querySelector('.alertMsg').innerHTML = `<p>Đã copy đường dẫn!</p>`;
                newsDetailList[i].querySelector('.displayMsg').style.display = 'block';
            }
            closeBtn.onclick = function() {
                newsPopup.style.display = "none";
                newsDetailList[i].querySelector('.alertMsg').innerHTML = ``;
                newsDetailList[i].querySelector('.displayMsg').style.display = 'none';
            }
            let otherHeadlines = newsDetailList[i].querySelectorAll('.headlineWrapper .headlineItem');
            let switchOtherNews = function(index) {
                for (let j = 0; j < otherHeadlines.length; j++) {
                    otherHeadlines[j].onclick = function () {
                        if (!newsDetailList[index].classList.contains('newsActive')) {
                            return;
                        }
                        newsDetailList[index].classList.remove('newsActive');
                        newsDetailList[j].classList.add('newsActive');
                        otherHeadlines = newsDetailList[j].querySelectorAll('.headlineWrapper .headlineItem');
                        switchOtherNews(j);
                        setTimeout(function() {
                            newsDetail.scrollTo({
                                top: 0,
                            });
                        }, 10);
                    } 
                }
            }
            switchOtherNews(i);
        } 
    }
}

