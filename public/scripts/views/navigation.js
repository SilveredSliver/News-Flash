'use strict';

var modal = document.getElementById('login-modal');
var loginLink = document.getElementById("login-link");

$(document).ready(function() {
<<<<<<< HEAD
  $('#navbar-toggle').on('click', function() {
    $("#panel").slideToggle();
  });
=======
    $('#navbar-toggle, .navbar-item').on('click', function() {
        $("#panel").slideToggle();
    });
>>>>>>> eda43041fc5d4d4ad50155214f4ff920ee59c518


  // hide the Login modal
  modal.style.display = "none";
});


// when user presses the 'Log Out' menu item
// $('#logout-link, #pref-link').hide();
$('#logout-link').on('click', (event) => {
  event.preventDefault();
  localStorage.clear();
  $('.pref-link, #logout-link').hide();
  $('#login-link, #signup-link').show();
});


loginLink.onclick = function () {
  modal.style.display = "flex";
}

// add the close functionality for each nav bar link when the user presses on any of them
function addCloseNavBar () {
<<<<<<< HEAD
  var navbarLinks = document.getElementsByClassName("navbar-item");
  for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function() {
      $("#panel").stop().slideToggle();
    }, false);
  }
=======
    var navbarLinks = document.getElementsByClassName("navbar-item");
    for (var i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].addEventListener("click", function() {
            $("#panel").slideToggle();
        }, false);
    }
>>>>>>> eda43041fc5d4d4ad50155214f4ff920ee59c518
}
addCloseNavBar();


// check if user is logged in
function isUserLoggedIn () {
    let userEmail = JSON.parse(localStorage.getItem('EMAIL-KEY'));
    let userPassword = JSON.parse(localStorage.getItem('PASSWORD-KEY'));
    if (userEmail !== null && userPassword !== null) {
        $('#login-link, #signup-link').hide();
        $('#logout-link, #pref-link').show();
    }
}
isUserLoggedIn();
