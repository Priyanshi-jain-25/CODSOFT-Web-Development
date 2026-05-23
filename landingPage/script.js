const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function(){

  alert("Jai Jinendra Priyanshi Jain 👋 Welcome To AIRA AI");

});

const aboutBtn = document.getElementById("aboutBtn");

aboutBtn.addEventListener("click", function(){

  alert("AIRA AI provides modern AI solutions for businesses.");

});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

  event.preventDefault();

  alert("Message Sent Successfully ✅");

});