(function time() { 
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById("currentTime").innerHTML = h + ":" + m + ":" + s;
    setTimeout(time, 1000);
  })();
function recTime() {
/*Records the time as the buttion is pressed
  and displayed on the screen*/
  var timeString = document.getElementById("currentTime").innerHTML;
  var node = document.createElement("p"); 
  document.getElementById("record").appendChild(node).innerHTML = timeString;
}
function setAlarm() {
  //plays the music as the time matches
  var d = new Date();
  var h1 = d.getHours();
  var m1 = d.getMinutes();
  var s1 = d.getSeconds();
   
  document.getElementById("alarmTime").disabled = 1;
  document.getElementById("btn").disabled = 1;
  
  var checkTime = document.getElementById("alarmTime").value;
  var seprate = checkTime.split(":");
  if (h1 === parseInt(seprate[0]) && m1 === parseInt(seprate[1]) && s1 === 0) {
    document.getElementById("alarmTone").play();
    document.getElementById("alarmTime").disabled = 0;
    document.getElementById("btn").disabled = 0;
    } else {
  setTimeout(setAlarm, 1000);
  }
}