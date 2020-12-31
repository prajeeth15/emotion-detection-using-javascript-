// =========== G O O D  L U C K ============== //

// Open or Close the chat button...

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Chat with Bot.....

know = {
  Hello: "Hi, Sir. Good to see you.",
  "What is your name?": "MOGA",
  "Who are you?": "<b>I am a Chat Bot who created by Jayed Ahsan Saad.</b>",
  Damm: "you bullshit.",
  "Tell me something": "I can't do it.",
  Lol: "Don't use this one. I'll kick your butt.",
  Hi: "Hello World! Nice to meet you.",
  XD: "You think yourself smarter than me.",
  "I am a human":
    "Human have emotions. It is hard to understand. But I have dream to buy a bike.",
  "Thank you": "No need.",
  "This is bs": "I will make you red.",
};

function talk() {
  var user = document.getElementById("userBox").value;
  document.getElementById("userBox").value = "";
  document.getElementById("chatLog").innerHTML = user + "<br>";

  if (user in know) {
    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
  } else {
    document.getElementById("chatLog").innerHTML =
      "I don't understand everything because I am a robot.<br><br><b>Use capital letter at first.<b><br> It will help me to understad you."; // defualt
  }
}
// Random Password.......

function getPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIZKLOPWXYZ";
  var passwordLength = 14;
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}

// Preloader....

var myVar;

function myLoader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.getElementById("f").style.display = "block";
  var music = new Audio();
  music.src = "sound/theme.mp3";
  music.play(); // Music
}

// AUTO TYPE.........

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onpageshow = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.10em solid skyblue}";
  document.body.appendChild(css);
};
