$(document).ready(function(){

});
function show_image(src, width, height, alt) {
    // let oth = "https://www.overtimeheroics.net";
    // let quiz = "https://christianlance85.github.io/quiz/";
    // let planner = "https://christianlance85.github.io/Calendar/";
    // let 
    var img = document.createElement("img");

    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.link = 
  
    // This next line will just add it to the <body> tag
    document.body.appendChild(img); 
  }