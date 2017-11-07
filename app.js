

function updateSugarMessage() {
var sugarCookies = Cookies.get("sugarCookies");
  if (sugarCookies === "1") {
    document.getElementById("howmanysugar").innerHTML = "number of sugar cookies: 1";
  } else if (sugarCookies === undefined){
    document.getElementById("howmanysugar").innerHTML = "number of sugar cookies: 0";
  } else {
    document.getElementById("howmanysugar").innerHTML = "number of sugar cookies: " + sugarCookies;
  }
}


function updateLemonMessage() {
var lemonCookies = Cookies.get("lemonCookies");
  if (lemonCookies === "1") {
    document.getElementById("howmanylemon").innerHTML = "number of lemon cookies: 1";
  } else if (lemonCookies === undefined){
    document.getElementById("howmanylemon").innerHTML = "number of lemon cookies: 0";
  } else {
    document.getElementById("howmanylemon").innerHTML = "number of lemon cookies: " + lemonCookies;
  }
}


function updateChocolateMessage() {
var chocoCookies = Cookies.get("chocolateCookies");
  if (chocoCookies === "1") {
    document.getElementById("howmanychoco").innerHTML = "number of chocolate cookies: 1";
  } else if (chocoCookies === undefined){
    document.getElementById("howmanychoco").innerHTML = "number of chocolate cookies: 0";
  } else {
    document.getElementById("howmanychoco").innerHTML = "number of chocolate cookies: " + chocoCookies;
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


document.getElementById("topleft").addEventListener("click", addASugarCookie);

document.getElementById("topmiddle").addEventListener("click", addAChocolateCookie);

document.getElementById("topright").addEventListener("click", addALemonCookie);

document.getElementById("reset_button").addEventListener("click", clearAllCookies);

updateSugarMessage();
updateLemonMessage();
updateChocolateMessage();
