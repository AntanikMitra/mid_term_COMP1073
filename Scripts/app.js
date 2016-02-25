// setup your IIFE (Immediately Invoked Function Expression)
/*Author: Antanik Mitra
  File: app.js
  Website name: http://mid-term-comp1073.azurewebsites.net/
  File description: This is the app.js file where the paragraph is injected and output to the submit button in contact form is displayed in the console.
*/
var travelReport = (function () {

"use strict";
console.log("App Started...")

// replacing paragraph one
 var replaceFirstParagraph = function () {

        console.log("inside replaceFirstParagraph anonymous Function");

        var IntroParagraph;

        IntroParagraph = document.getElementById("IntroParagraph");

        IntroParagraph.innerHTML = "Now is the time to travel to Greece.The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.Greece has 1,400 islands, though only 230 of them areinhabited.And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";


    };
    

// replacing paragraph one
 var replaceSecondParagraph = function () {

        console.log("inside replaceSecondParagraph anonymous Function");

        var Folegandro;

        Folegandro = document.getElementById("Folegandro");

        Folegandro.innerHTML = "Now is the time to travel to Greece.The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.Greece has 1,400 islands, though only 230 of them areinhabited.And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";


    };
    
    
// call replaceFirstParagraph
replaceFirstParagraph();
// call replaceSecondParagraph
replaceSecondParagraph();

})();

