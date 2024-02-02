function validateForm() {
    const namee = document.forms["msgform"]["name"].value;
    const emaill = document.forms["msgform"]["email"].value;
    const interestt = document.forms["msgform"]["intr"].value;

    if (namee=="" || emaill=="" || interestt=="") {
        alert("tidak boleh kosong");
        return false;
    } else {
        alert("data telah kami terima mohon menunggu 1x24 jam")
    }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("slideshow");
    if (n > imgList.length) slideIndex=1;
    else if (n < 1) slideIndex = imgList.length;

     for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
     }

     imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 1100)


