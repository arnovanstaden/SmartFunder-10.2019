/* ---------------------------------------------------------
TABLE OF CONTENTS

    1. General
    2. Page Specific
    2.1. Client Page
    2.2 Support Page
    2.3 Home Page
    
---------------------------------------- */


/* ---------------------------------------------
    
1. PAGE SPECIFIC 
    
    ----------------------------------- */



/* ---------------------------------------------
    
2. PAGE SPECIFIC 
    
    ----------------------------------- */


/*  2.1. Client Page */

// Load Extra Clients Grid

const loadExtraClients = () => {
    $("#extra-clients-button").fadeOut(500)
    $(".extra-client-grid").fadeIn(1000)
}

// --------------

/*  2.2. Support Page */


// Change FAQ Active Tab

$(".faq-tab").click(function () {
    $(".active-faq-tab").removeClass("active-faq-tab");
    $(this).addClass('active-faq-tab');
});

// Toggle FAQ Question Grid with Tabs

$("#employer-tab").click(() => {
    $(".faq-employees").fadeOut(500, () => {
        $(".faq-employers").fadeIn(500);
    });
});

$("#employee-tab").click(() => {
    $(".faq-employers").fadeOut(500, () => {
        $(".faq-employees").fadeIn(500);
    });
});

// Change FAQ Grid Categories Active

$(".faq-grid-categories ul li").click(function () {
    $(".faq-active-category").removeClass("faq-active-category");
    $(this).addClass('faq-active-category');
});

// Toggle FAQ Question Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Toggle FAQ Question List

$(".faq-grid-categories li").click(function () {

    // Get Category List Index
    const listIndex = $(this).index() + 1;

    // Show Relevant Question List
    $(".faq-active-questions").removeClass("faq-active-questions");
    $(".faq-questions-list").hide();
    $(`.faq-grid-questions div:nth-child(${listIndex})`).fadeIn(500);
});

// --------------

/*  2.3. Home Page */


// Activate Carousel & Vimeo Play

if ($("body").hasClass("home-body")) {

    // Owl Carousel
    const owl = $('.owl-carousel');
    $(document).ready(function () {
        owl.owlCarousel({
            items: 5,
            loop: true,
            margin: 50,
            autoplayHoverPause: true
        });
    });

    setInterval(() => {
        owl.trigger('next.owl.carousel');
    }, 2500);


    // Vimeo
    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);

    $(".home-landing-video-link a").click(()=> {
        player.play();
    })

}