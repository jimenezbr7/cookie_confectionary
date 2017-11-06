

function updateSugarMessage() {
var sugarCookies = Cookies.get("sugarCookies");
  if (sugarCookies === "1") {
    document.getElementById("howmanysugar").innerHTML = "you have ordered 1 sugar cookie";
  } else if (sugarCookies === undefined){
    document.getElementById("howmanysugar").innerHTML = "you have not ordered any sugar cookies";
  } else {
    document.getElementById("howmanysugar").innerHTML = "you have ordered " + sugarCookies + " sugar cookies";
  }
}


function updateLemonMessage() {
var lemonCookies = Cookies.get("lemonCookies");
  if (lemonCookies === "1") {
    document.getElementById("howmanylemon").innerHTML = "you have ordered 1 lemon cookie";
  } else if (lemonCookies === undefined){
    document.getElementById("howmanylemon").innerHTML = "you have not ordered any lemon cookies";
  } else {
    document.getElementById("howmanylemon").innerHTML = "you have ordered " + lemonCookies + " lemon cookies";
  }
}


function updateChocolateMessage() {
var chocoCookies = Cookies.get("chocolateCookies");
  if (chocoCookies === "1") {
    document.getElementById("howmanychoco").innerHTML = "you have ordered 1 chocolate cookie";
  } else if (chocoCookies === undefined){
    document.getElementById("howmanychoco").innerHTML = "you have not ordered any chocolate cookies";
  } else {
    document.getElementById("howmanychoco").innerHTML = "you have ordered " + chocoCookies + " chocolate cookies";
  }
}


function addASugarCookie() {
  var sugarCookies = Cookies.get("sugarCookies");

  if (sugarCookies === undefined){
    sugarCookies = 1;
  } else {
  sugarCookies++;}

  Cookies.set("sugarCookies", sugarCookies);

  updateSugarMessage();

}

function addAChocolateCookie() {
  var chocoCookies = Cookies.get("chocolateCookies");

  if (chocoCookies === undefined){
    chocoCookies = 1;
  } else {
  chocoCookies++;}

  Cookies.set("chocolateCookies", chocoCookies);

  updateChocolateMessage();
}

function addALemonCookie() {
  var lemonCookies = Cookies.get("lemonCookies");
  
  if (lemonCookies === undefined){
    lemonCookies = 1;
  } else {
  lemonCookies++;}

  Cookies.set("lemonCookies", lemonCookies);

  updateLemonMessage();
}

function clearAllCookies() {
  lemonCookies = undefined;
  sugarCookies = undefined;
  chocoCookies = undefined;

  Cookies.set("lemonCookies", lemonCookies);
  Cookies.set("sugarCookies", sugarCookies);
  Cookies.set("chocolateCookies", chocoCookies);

  updateLemonMessage();
  updateSugarMessage();
  updateChocolateMessage();
}


document.getElementById("sugar_button").addEventListener("click", addASugarCookie);

document.getElementById("choco_button").addEventListener("click", addAChocolateCookie);

document.getElementById("lemon_button").addEventListener("click", addALemonCookie);

document.getElementById("reset_button").addEventListener("click", clearAllCookies);

updateSugarMessage();
updateLemonMessage();
updateChocolateMessage();
