var wrapperEle = document.body.querySelector(".wrapper");
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

for (var i = 0; i < animals.length; i++) {
  creategrr(animals[i]);
}

function creategrr(str) {
  var ele = document.createElement("div");
  if (str === "cat") {
    ele.innerHTML = "I am a " + str;
  } else if (str === "dog") {
    ele.innerHTML = " borf borf";
  } else {
    ele.innerHTML = "I am an animal";
  }
  wrapperEle.appendChild(ele);
}