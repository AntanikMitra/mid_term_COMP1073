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
    
    
    // replacing paragraph four
 var replaceForthParagraph = function () {

        console.log("inside replaceForthParagraph anonymous Function");

        var Spetses;

        Spetses = document.getElementById("Spetses");

        Spetses.innerHTML = "This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.";


    };
    
    
    // replacing paragraph five
 var replaceFifthParagraph = function () {

        console.log("inside replaceFifthParagraph anonymous Function");

        var Amorgos;

        Amorgos = document.getElementById("Amorgos");

        Amorgos.innerHTML = "Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.";


    };
    
    
    // replacing paragraph sixth
 var replaceSixthParagraph = function () {

        console.log("inside replaceSixthParagraph anonymous Function");

        var Syros;

        Syros = document.getElementById("Syros");

        Syros.innerHTML = "A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.";


    };
    
    
    // replacing paragraph seventh
 var replaceSeventhParagraph = function () {

        console.log("inside replaceSeventhParagraph anonymous Function");

        var Milos;

        Milos = document.getElementById("Milos");

        Milos.innerHTML = "This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as the island of colours it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.";


    };
    
    
    // replacing paragraph eighth
 var replaceEighthParagraph = function () {

        console.log("inside replaceEighthParagraph anonymous Function");

        var Hydra;

        Hydra = document.getElementById("Hydra");

        Hydra.innerHTML = "The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.";


    };
    
    
    
// call replaceFirstParagraph
replaceFirstParagraph();
// call replaceSecondParagraph
replaceSecondParagraph();
// call replaceThirdParagraph
replaceThirdParagraph();
// call replaceForthParagraph
replaceForthParagraph();
// call replaceFifthParagraph
replaceFifthParagraph();
// call replaceSixthParagraph
replaceSixthParagraph();
// call replaceSeventhParagraph
replaceSeventhParagraph();
// call replaceEighthParagraph
replaceEighthParagraph();


})();

