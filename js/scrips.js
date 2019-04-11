//circle nav animation
$("#wrapper").click(function() {
  $(".icon").toggleClass("close");
});

//Navigation/Menu -
let toggleNavStatus = false;

let toggleNav = function() {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebar.style.marginTop = "0";
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "200px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebarTitle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.marginTop = "-400px";
    toggleNavStatus = false;
  }
};

//Grab UI elements
// const cards = document.querySelectorAll(".card");
// const imageOverlay = document.querySelectorAll(".image-overlay");

//Add Event Listeners
// cards.forEach(function(card) {
//   card.addEventListener("click", function(e) {
//     e.target.parentElement.childNodes[3].style.display = "block";
//   });
// });

// imageOverlay.forEach(function(overlay) {
//   overlay.addEventListener("click", function(e) {
//     if (
//       e.target.parentElement.parentElement.classList.contains("image-overlay")
//     ) {
//       e.target.parentElement.parentElement.style.display = "none";
//     } else if (e.target.parentElement.classList.contains("image-overlay")) {
//       e.target.parentElement.style.display = "none";
//     }
//   });
// });
