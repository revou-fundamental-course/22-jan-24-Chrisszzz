function validateForm() {
    const namee = document.forms["msgform"]["name"].value;
    const emaill = document.forms["msgform"]["email"].value;
    const interestt = document.forms["msgform"]["intr"].value;

    if (namee=="" || emaill=="" || interestt=="choose your option") {
        alert("data tidak boleh kosong");
        return false;
    } else {
        alert("data telah kami terima mohon menunggu 1x24 jam")
    }

}

//IMAGE
//deklarasi variabel slide index
var slideIndex = 1;
showDivs(slideIndex);

//buat function untuk button slider (next, previous)
function plusDivs(n) {
    showDivs((slideIndex += n));
}

// Thumbnail image controls / dot img
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

//buat function slideshow
function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("slideshow");
    let dots = document.getElementsByClassName("dot");
    if (n > imgList.length) slideIndex=1;
    else if (n < 1) slideIndex = imgList.length;

     for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
     imgList[slideIndex - 1].style.display = "block";
     dots[slideIndex-1].className += " active";
}

//set interval pergantian gambar (1100=1,1s) 
setInterval(() => {
    plusDivs(1);
}, 2000)


//FEED
//deklarasi variabel untuk feed 
var feedIndex = 1;
showFeed(feedIndex);

//buat function untuk button slider (next, previous)
function plusFeed(n) {
    showFeed((feedIndex += n));
}

//buat function slideshow di feed
function showFeed(n) {
    var i;
    var feedList = document.getElementsByClassName("feed");
    if (n > feedList.length) feedIndex=1;
    else if (n < 1) feedIndex = feedList.length;

     for (i = 0; i < feedList.length; i++) {
        feedList[i].style.display = "none";
     }

     feedList[feedIndex - 1].style.display = "block";
}



