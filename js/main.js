//Get all frames, start the timer at 0ms
var myText = document.querySelectorAll('.frame');
var myTime = 0;

//Get a specific frame without having to document.querySelector every time
function textSlide(pos){
  return document.querySelector('.frame:nth-child('+pos+')');
}

//Loop through all the intro text pieces
for(i = 1; i < myText.length + 1; i++){
  //Add up myTime so we know how long to delay each frame, then set the timeout
  myTime += parseInt(textSlide(i).getAttribute('data-delay'), 10);
  myTimer(myTime, i);
}

//Use the data-delay property to wait until the right time before triggering animation
function myTimer(delay, pos){
  setTimeout(function(){
    //Get the previous slide (if there is one) and add the "out" class to animate out
    if(pos - 1 > 0){
      textSlide(pos - 1).classList.add('out');
    }
    //Animate the full logo in at the 2nd frame (only for this size)
    if(pos == 2) document.querySelector('a.start').classList.remove('start');
    //Get the next slide and add the "in" class to animate in
    textSlide(pos).classList.add('in');
  }, delay);
}

//End the background shape animations after 15 seconds
setTimeout(function(){
  document.querySelector('.ring1').style.animation = 'none';
  document.querySelector('.ring2').style.animation = 'none';
  document.querySelector('.ring3').style.animation = 'none';
  document.querySelector('.ring4').style.animation = 'none';
  document.querySelector('.ring5').style.animation = 'none';
  document.querySelector('.ring6').style.animation = 'none';
}, 15000);
