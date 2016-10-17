/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    var initial = $("nav").find(".active").data("anchor");
    $('*[id="' + initial + '"]').show();
    
    $("nav").find("a").on("click", function (event) {
        event.preventDefault();
        $(this).closest("ul").find("li").removeClass("active");
        $(this).closest("li").addClass("active");
        
        var anchor = $(this).closest("li").data("anchor");
        $(".bookmark").hide();
        $('*[id="' + anchor + '"]').slideDown();
        
        
    });
    

});