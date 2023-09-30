var num = Math.floor(Math.random()*6)+1;
document.querySelector(".dice1").innerHTML = num;

// Create a new Gyro object
var gyro = new Gyro();

// Start listening for gyro events
gyro.addEventListener("change", function(e) {

  // Get the current rotation of the device
  var rotation = e.rotation;

  // Get the current angle of the device
  var angle = rotation.alpha;

  // Generate a random number between 1 and 6
  var number = Math.floor(Math.random() * 6) + 1;

  // Display the number on the screen
  document.querySelector(".dice1").innerHTML = num;
});
