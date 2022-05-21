var more_desc = document.getElementById('more_desc');
var about_sec = document.getElementById('aboutme');
more_desc.style.display = "none";
var readmore = document.getElementById('readmore');
function more_desc_display(){ 

if(more_desc.style.display === "none"){
  more_desc.style.display = "block";
  about_sec.style.height = "80vh";
  about_sec.style.transition = "all 0.25s ease-in-out";
  readmore.innerHTML = "Read Less...";
}
else{
  more_desc.style.display = "none";
  about_sec.style.height = "60vh";
  about_sec.style.transition = "all 0.25s ease-in-out";
  readmore.innerHTML = "Read More...";

}

}


var web_dev = document.getElementById('web-dev');
var uiux = document.getElementById('uiux');
var dig_paint = document.getElementById('dig-paint');
var graphic  =  document.getElementById('graphic');



var canIdo = document.getElementById('canido');


function mouseEnter_webdiv(){
  canIdo.style.backgroundImage = "url('./vid/web_dev.avi)";
  canIdo.style.transition = "all 0.9s ease-in-out";
}

function mouseEnter_uiuxdiv(){
  canIdo.style.backgroundImage = "url('./img/landing illustraation.png')";
  canIdo.style.transition = "all 0.9s ease-in-out";
}
function mouseEnter_digpaintdiv(){
  canIdo.style.backgroundImage = "url('./img/landing illustraation_1.png')";
  canIdo.style.transition = "all 0.9s ease-in-out";
}
function mouseEnter_graphicdiv(){
  canIdo.style.backgroundImage = "url('./img/landing illustraation.png')";
  canIdo.style.transition = "all 0.9s ease-in-out";
}





function mouseLeave(){
  canIdo.style.backgroundImage = "url('./img/Untitled-1.png')";
  canIdo.style.transition = "all 0.9s ease-in-out";
}


const progress = document.getElementsByClassName('progress');
const progress_bar = document.getElementsByClassName('progress') ;
for(var i = 0 ; i <  16 ; i++){
  progress_bar[i].style.width = progress[i].innerHTML;
  progress_bar[i].style.transition = "all 0.7s ease-in-out";
}



var projects_toggle = document.getElementById('view_all_projects');
var projects = document.getElementsByClassName('division');
var see_btn = document.getElementById('seeall-btn');
var project_section = document.getElementById('projects');
   projects_toggle.style.display = "none";
//function
function view_all_projects(){
       projects_toggle.style.display ="block";
       projects_toggle.style.display = "flex";
       see_btn.innerHTML = "See less";
       projects_toggle.style.transition = "all 0.5s ease-in-out";
       project_section.style.height = "100vh";
}
function close_all_projects(){
  projects_toggle.style.display ="none";
  see_btn.innerHTML = "See all";
  projects_toggle.style.transition = "all 0.5s ease-in-out";
  project_section.style.height = "70vh";

}


function submitted(){
      alert('Message sent');
}