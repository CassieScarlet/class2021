function showMe() {
    var mii=document.getElementById("mii");
    if (mii.style.display == "none")
    {
        mii.style.display="block";
    }
    else
    {
        mii.style.display="none";
    }
}

function showHobbies() {
    var hobby=document.getElementById("hobby");
    if (hobby.style.display == "none")
    {
        hobby.style.display="block";
    }
    else
    {
        hobby.style.display="none";
    }
}

function showFacts() {
    var fact=document.getElementById("fact");
    if (fact.style.display == "none")
    {
        fact.style.display="block";
    }
    else
    {
        fact.style.display="none";
    }
}

function showWeakness() {
    var weakness=document.getElementById("weakness");
    if (weakness.style.display == "none")
    {
        weakness.style.display="block";
    }
    else
    {
        weakness.style.display="none";
    }
}

function showStrengths() {
    var strength=document.getElementById("strength");
    if (strength.style.display == "none")
    {
        strength.style.display="block";
    }
    else
    {
        strength.style.display="none";
    }
}

function showGifts() {
    var gifts=document.getElementById("gifts");
    if (gifts.style.display == "none")
    {
        gifts.style.display="block";
    }
    else
    {
        gifts.style.display="none";
    }
}

function showFavorite() {
    var favorites=document.getElementById("favorites");
    if (favorites.style.display == "none")
    {
        favorites.style.display="block";
    }
    else
    {
        favorites.style.display="none";
    }
}

function changeBackcolor() {
    var dark=document.getElementById("dark");
    var text=document.getElementById("text0");
    var text=document.getElementById("text1");
    var text=document.getElementById("text2");
    var text=document.getElementById("text3");
    var text=document.getElementById("text4");
    var text=document.getElementById("text5");
    var text=document.getElementById("text6");
    var text=document.getElementById("text7");
    var text=document.getElementById("text8");
    var text=document.getElementById("text9");
    var text=document.getElementById("text10");
    var text=document.getElementById("text11");
    var text=document.getElementById("text12");
    if (document.body.style.background == "hotpink")
    {
        document.body.style.background="#121212";
        text0.style.color="white";
        text1.style.color="white";
        text2.style.color="white";
        text3.style.color="white";
        text4.style.color="white";
        text5.style.color="white";
        text6.style.color="white";
        text7.style.color="white";
        text8.style.color="white";
        text9.style.color="white";
        text10.style.color="white";
        text11.style.color="white";
        text12.style.color="white";
    }
    else
    {
        document.body.style.background="hotpink";
        text0.style.color="black";
        text1.style.color="black";
        text2.style.color="black";
        text3.style.color="black";
        text4.style.color="black";
        text5.style.color="black";
        text6.style.color="black";
        text7.style.color="black";
        text8.style.color="black";
        text9.style.color="black";
        text10.style.color="black";
        text11.style.color="black";
        text12.style.color="black";
    }
}

// if('serviceWorker' in navigator) {
//       window.addEventListener('load', () => {
// 	navigator.serviceWorker
// 			.register('swAll.js')
//             .then(reg => console.log("Service Worker: Registered"))
//             .catch(err => console.log(`Service worker: Error: ${err}`))
//       })
// }


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}