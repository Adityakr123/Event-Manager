let text = "";
let high = "";
let mid = "";
let low = "";
function highp(){
 var message=document.getElementById("name").value;
 
 text += message + "<br>";
 high += message + "<br>";
 document.getElementById("demo").innerHTML = text;

}
function midp(){
 var message=document.getElementById("name").value;
 
 text += message + "<br>";
 mid += message + "<br>";
 document.getElementById("demo").innerHTML = text;



}
function lowp(){
 var message=document.getElementById("name").value;
 
 text += message + "<br>";
 low += message + "<br>";
 document.getElementById("demo").innerHTML = text;



} function highshow(){
 
 

 document.getElementById("dem").innerHTML = high;

}
function midshow(){

 
 document.getElementById("dem").innerHTML = mid;



}
function lowshow(){

 document.getElementById("dem").innerHTML = low;
}