// header_has-bg=======================================================================
let header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 1) {
    header.classList.add("header_has-bg");
  } else {
    header.classList.remove("header_has-bg");
  }
});


// AOS init===============================================================================
AOS.init();


// MODAL-WINDOW=============================================================================
var modal = document.getElementById("promo-modal");
var btn = document.getElementById("promo-btn");
var span = document.getElementsByClassName("promo__modal-close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// TABS=============================================================================================
function openPage(evt, pageName) {
  // Declare all variables
  var i, tabs__card, tabs__link;

  // Get all elements with class="tabcontent" and hide them
  tabs__card = document.getElementsByClassName("tabs__card");
  for (i = 0; i < tabs__card.length; i++) {
    tabs__card[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tabs__link = document.getElementsByClassName("tabs__link");
  for (i = 0; i < tabs__link.length; i++) {
    tabs__link[i].className = tabs__link[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();



// THEME===========================================================================================
document.querySelector('.header__switch').addEventListener('change', (event) => {
  if (event.target.nodeName === 'INPUT') {
    // console.log('asdas');
    // document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('dark');
    // document.documentElement.classList.add(event.target);
  }



  // if (event.target.nodeName === 'INPUT') {
  //   document.documentElement.classList.remove('dark');
  // }
});






// smooth-scrolling==============================================================================
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}






