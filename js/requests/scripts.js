window.onload = function() {
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
    let inputfile = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputfile, function(inputfile) {
        let div = document.querySelector('.displayFiles');
            divVal = div.innerHTML;
        inputfile.addEventListener('change', function(e) {
            let fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split('\\').pop();
            if (fileName)
                div.innerHTML = fileName;
            else
                div.innerHTML = divVal;
        });
    });
}

function validateForm() {
    let email = document.forms["myForm"]["requester-email"].value;
    let subject = document.forms["myForm"]["request-subject"].value;
    let description = document.forms["myForm"]["request-description"].value;
    if ( email === '' || subject === '' || description === '') {
        document.querySelector('.displayError').innerHTML = `Please fill out all fields`;
        return false;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.querySelector('.displayError').innerHTML = `Invalid email address`;
        return false;
    }
    document.querySelector('.displayError').innerHTML = '';
    document.getElementById('myForm').style.display = 'none';
    document.querySelector('.thankYouMessage').style.display = 'block';
    return false;
}