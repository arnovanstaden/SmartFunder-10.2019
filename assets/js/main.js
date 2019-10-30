/* ---------------------------------------------------------
TABLE OF CONTENTS

    1. Page Specific
    1.1. Client Page
    
---------------------------------------- */



/* ---------------------------------------------
    
1. PAGE SPECIFIC 
    
    ----------------------------------- */


/*  1.1. Client Page */

// Load Extra Clients Grid

const loadExtraClients = () => {
    $("#extra-clients-button").fadeOut(500)
    $(".extra-client-grid").fadeIn(1000)
}



// --------------

/*  1.1. Support Page */

// Change FAQ Active Tab

$(".faq-tab").click(function() {
    $(".active-faq-tab").removeClass("active-faq-tab");
    $(this).addClass('active-faq-tab');
});

// Change FAQ Grid Categories Active

$(".faq-grid-categories ul li").click(function() {
    $(".faq-active-category").removeClass("faq-active-category");
    $(this).addClass('faq-active-category');
});

// Toggle FAQ Question Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}