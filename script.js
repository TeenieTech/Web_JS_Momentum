/*
const p = document.querySelector("#p3");
const title = document.querySelector("#title");
p.innerHTML = "!@#$!";
title.innerHTML = "Hi! From JS";
title.style.color = "#ffffff";

console.dir(title);

document.title = "I own you now";
*/

const title = document.querySelector("#title");
const CLICKED_CLASS = "cliked";

/*
handleClick = function(){
  const hasClassName = title.classList.contains(CLICKED_CLASS);
  if(hasClassName){
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
}
*/

function handleClick(){
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
  title.   
}

init();
   