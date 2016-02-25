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
    

// replacing paragraph two
 var replaceSecondParagraph = function () {

        console.log("inside replaceSecondParagraph anonymous Function");

        var Folegandros;

        Folegandros = document.getElementById("Folegandros");

        Folegandros.innerHTML = "Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.";


    };
    
    
    // replacing paragraph three
 var replaceThirdParagraph = function () {

        console.log("inside replaceThirdParagraph anonymous Function");

        var Alonissos;

        Alonissos = document.getElementById("Alonissos");

        Alonissos.innerHTML = "Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.";


    };
    
    
    
// call replaceFirstParagraph
replaceFirstParagraph();
// call replaceSecondParagraph
replaceSecondParagraph();
// call replaceThirdParagraph
replaceThirdParagraph();

})();

