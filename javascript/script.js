
var time = new Date().getHours();
var messageText;
var image;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var src = image;
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function() {
	var lolQuote = document.getElementById("timeEvent");
	var lolImage = document.getElementById("lolcat");

	if (time == partyTime){
		messageText = "IZ PARTEE TIME!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	} else if (time == napTime) {
		messageText = "IZ NAP TIME...";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	} else if (time == lunchTime) {
		messageText = "IZ NOM NOM NOM TIME!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	} else if (time == wakeupTime) {
		messageText = "IZ TIME TO GETTUP.";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	} else if (time < noon) {
		messageText = "Good morning!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	} else if (time > evening) {
		messageText = "Good Evening!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	} else {
		messageText = "Good afternoon!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	}
	lolQuote.innerText = messageText;
	lolImage.src = image;
	showCurrentTime();
};


var showCurrentTime = function() {
	var clock = document.getElementById("clock");
	var currentTime = new Date();
	
	var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
	
	if (hours >= noon){
		meridian = "PM";
	}
	if (hours > 12) {
		hours = hours - 12;
	}
	if (minutes < 10){
		minutes = "0" + minutes;
	}
	if (seconds < 10){
		seconds = "0" + seconds;
	}
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
	clock.innerText = clockTime;
};


var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var isPartyTime = false;
var partyOver = document.getElementById("partyTimeButton");
var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      // text in the button should read "Party Over"
	   partyOver.innerText = "Party Over";
      // color of the button should be "#0A8DAB" (bonus!)
	   partyOver.style.background = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      // text in the button should read "PARTY TIME!"
	   partyOver.innerText = "PARTY TIME!";
      // color of the button should be "#222" (bonus!)
	   partyOver.style.background = "#222";
   }
};
partyOver.addEventListener("click", partyEvent);

var wakeChange = function() {
	wakeupTime = wakeUpTimeSelector.value;
};
var lunchChange = function() {
	lunchTime = lunchTimeSelector.value;
};
var napChange = function(){
	napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeChange);
lunchTimeSelector.addEventListener('change', lunchChange);
napTimeSelector.addEventListener('change', napChange);