var myProjects = require('../scripts/projects.js').myProjects;
var Handlebars = require('Handlebars');
//******* MATERIALIZECSS SCRIPTS *************//
$(document).ready(function() {
    $('.parallax').parallax();
    $(".button-collapse").sideNav();
    $('.scrollspy').scrollSpy();
    $('.tooltipped').tooltip({
        delay: 50
    });
    $(".expand").click(function() {
        $(".expand").hide();
        $(".read-more").animate({
            height: "toggle",
            opacity: "toggle"
        }, 800);
    });
});
//******** PROJECTS HANDLEBARS **********//
var source = $("*profileTemplate").html();
var template = Handlebars.compile(source);
$('*portfolioContainer').html(template(myProjects));
//********* SKILLS ************//
$(document).ready(function() {
    $('*techs').waypoint(function() {
        $(".meter > span").each(function() {
            var myWidth = $(this).data("width");
            $(this)
                .animate({
                    width: myWidth + "%",
                }, 3000);
        });
    });
});
//********* TIMELINE  ************//
var timeline = function() {
    var items = document.querySelectorAll(".timeline li");
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top <= 1000 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }
    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
}();
