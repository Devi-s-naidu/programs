Loadr = new (function Loadr(id){
    // # Defines
    const max_size = 24;
    const max_particles = 1500;
    const min_vel = 20;
    const max_generation_per_frame = 10;
  
    // #Variables
  // sometimes i wrote code horrible enouhg to make eyes bleed
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');
    var height = canvas.height;
    var center_y = height/2;
    var width = canvas.width;
    var center_x = width / 2;
    var animate = true;
    var particles = [];
    var last = Date.now(),now = 0;
    var died = 0,len = 0,dt;
  
    function isInsideHeart(x,y){
        x = ((x - center_x) / (center_x)) * 3;
        y = ((y - center_y) / (center_y)) * -3;
        // Simplest Equation of lurve
        var x2 = x * x;
      var y2 = y * y;
      // Simplest Equation of lurve
  
  return (Math.pow((x2 + y2 - 1), 3) - (x2 * (y2 * y)) < 0);
  
  }
  
  function random(size,freq){
        var val = 0;
        var iter = freq;
  
  do{
            size /= iter;
            iter += freq;
            val += size * Math.random();
        }while( size >= 1);
  
  return val;
    }
  
    function Particle(){
        var x = center_x;
        var y = center_y;
        var size = ~~random(max_size,2.4);
        var x_vel = ((max_size + min_vel) - size)/2 - (Math.random() * ((max_size + min_vel) - size));
        var y_vel = ((max_size + min_vel) - size)/2 - (Math.random() * ((max_size + min_vel) - size));
        var nx = x;
  var ny = y;
  var r,g,b,a = 0.05 * size;
  
  this.draw = function(){
    r = ~~( 255 * ( x / width));
    g = ~~( 255 * (1 - ( y / height)));
    b = ~~( 255 - r );
    ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    ctx.beginPath();
    ctx.arc(x,y,size,0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }
  
        this.move = function(dt){
  
    nx += x_vel * dt;
    ny += y_vel * dt;
    if( !isInsideHeart(nx,ny)){
      if( !isInsideHeart(nx,y)){
        x_vel *= -1;
        return;
      }
  
      if( !isInsideHeart(x,ny)){
                      y_vel *= -1;
                      return;
                }
      // Lets do the crazy furbidden
      x_vel = -1 * y_vel;
      y_vel = -1 * x_vel;
      return;
    }
  
            x = nx;
            y = ny;
        }
  
    }
  
  function movementTick(){
    var len = particles.length;
        var dead = max_particles - len;
        for( var i = 0; i < dead && i < max_generation_per_frame; i++ ){
            particles.push(new Particle());
        }
  
  // Update the date
  now = Date.now();
  dt = last - now;
  dt /= 1000;
  last = now;
  particles.forEach(function(p){
    p.move(dt);
  });
  }
  
    function tick(){
  
        ctx.clearRect(0,0,width,height);
        particles.forEach(function(p){
        p.draw();
      });
  
        requestAnimationFrame(tick);
    }
  
  this.start = function(){
  
    }
  
  this.done = function(){
  
    }
  
  setInterval(movementTick,16);
    tick();
  
  })("loader");

  // Add this to your script.js
document.getElementById("passwordBox").addEventListener("click", function() {
    // Redirect to the next love confession page
    window.location.href = "nextPage.html";
  });

  // Move the existing script to script.js

function checkPassword() {
    var password = document.getElementById('password').value;
  
    // Replace 'Abhrajit' with the actual password
    if (password === 'Abhrajit') {
      // Redirect to the next love confession page
      window.location.href = 'love.html';
    } else {
      // Display an error message or take appropriate action
      alert('Incorrect password. Try again!');
    }
  }

  // Add this to your script.js
function showLoveMessage(message) {
    document.getElementById('message').innerHTML = message;
  }
// Add this to your script.js
function showLoveMessage(message, nextPage) {
  document.getElementById('message').innerHTML = message;
  
  // Redirect to the specified page after displaying the message
  setTimeout(function() {
    window.location.href = nextPage;
  }, 2000); // Change the delay as needed (in milliseconds)
}
// Add this to your script.js
function userResponse(response) {
  var chatMessages = document.getElementById('chat-messages');
  
  // Display user's response
  var userResponse = document.createElement('p');
  userResponse.innerHTML = response;
  chatMessages.appendChild(userResponse);
  
  // Respond based on user's choice
  if (response === 'Yes') {
    setTimeout(function() {
      loveResponse();
    }, 1000);
  } else if (response === 'No') {
    setTimeout(function() {
      sorryResponse();
    }, 1000);
  }
}

// Add this to your script.js
var isFollowRequested = false;
var isFollowAccepted = false;
var isInChatPhase = false;
var isCallsAndTextsPhase = false;
var isConfessionPhase = false;

function sendFollowRequest() {
  if (!isFollowRequested) {
    showMessage("Follow request sent to Devi.");
    isFollowRequested = true;
  } else if (isFollowRequested && !isFollowAccepted) {
    showMessage("After 6 months...")
    showMessage("Devi accepted your follow request!");
    isFollowAccepted = true;
    isInChatPhase = true;
  } else if (isInChatPhase) {
    simulateChatInteraction();
  } else if (isCallsAndTextsPhase) {
    simulateCallsAndTexts();
  } else if (isConfessionPhase) {
    showMessage("June 30: Confession day! You expressed your feelings to Devi.");
  }
}

function simulateChatInteraction() {
  showMessage("Happy New Year! 🎉");
  showMessage("Devi: Same to you! 🥳");
  showMessage("Then Regular calls and chats for hours...");
  showMessage("a loads of questions and answers...");
  isCallsAndTextsPhase = true;
}

function simulateCallsAndTexts() {
  showMessage("June 1 - June 29: Lots of calls and texts...");
  showMessage("June 30: Confession day! You expressed your feelings to Devi.");
  isConfessionPhase = true;
}

function showMessage(message) {
  var chatMessages = document.getElementById('chat-messages');
  var newMessage = document.createElement('p');
  newMessage.innerHTML = message;
  chatMessages.appendChild(newMessage);
}
