var  body = document.getElementById("body");
body.style.backgroundColor = "#1f1f1f";

var  header = document.getElementById("header");
header.style.backgroundColor = "#483C32";
header.style.height = "115px";

var heading = document.getElementById("heading");
heading.style.position = "relative";
heading.style.top = "15px";
heading.style.color = "white";
heading.style.fontSize =  "38px";
heading.style.fontFamily = "san-serif";
heading.style.textTransform = "upperCase";
heading.style.textShadow  =   "2px 5px 5px rgba(255, 255, 255, 0.3)"; 


var paragraph = document.getElementById("paragraph");
paragraph.style.position = "relative";
paragraph.style.top = "15px";
paragraph.style.color = "white";
paragraph.style.fontSize =  "20px";
paragraph.style.fontFamily = "san-serif";


var time = document.getElementById("time");
time.style.position = "relative";
time.style.top = "45px";
time.style.color = "darkOrange";
time.style.fontSize =  "20px";
time.style.fontFamily = "san-serif";
time.style.borderBottom =  "2px solid white";
time.style.width =  "290px";


var words = document.getElementById("words");
words.style.position = "relative";
words.style.top = "55px";
words.style.color = "darkOrange";
words.style.fontSize =  "20px";
words.style.fontFamily = "san-serif";

var button = document.getElementById("button");
button.style.position = "relative";
button.style.top = "85px";
button.style.color = "white";
button.style.fontSize =  "18px";
button.style.fontFamily = "monospace";
button.style.height =  "40px";
button.style.width =  "80px";
button.style.background =  "darkOrange";
button.style.border =  "2px Solid White";
button.style.borderRadius = "5px";


function viewMovie() {
var movie = [ 
"Title: Avengers",
"<br>Time: 12:00pm",
"<br>Movie Status: unavailable",

"<br><br>Title: Tom Lee",
"<br>Time: 14:00pm",
"<br>Movie Status: unavailable",

"<br><br>Title: The Killer",
"<br>Time: 15:00pm",
"<br>Movie Status: available",

"<br><br>Title: Black Panther",
"<br>Time: 16:00pm",
"<br>Movie Status: available",

"<br><br>Title: Wonder Women",
"<br>Time: 17:00pm",
"<br>Movie Status: unavailable",

"<br><br>Title: The Nun",
"<br>Time: 18:00pm",
"<br>Movie Status: available"];

document.write(movie);
}