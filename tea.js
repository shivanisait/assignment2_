Home.addEventListener("click", function () {
    console.log("Home");
    document.getElementById('image').src = "maintea.jpg";
    document.getElementById('title').innerHTML = "It's a Chai Story ";
    document.getElementById('chaistory').style.display="initial";
    document.getElementById('originstory').style.display="none";
    document.getElementById('birthstory').style.display="none";
    document.getElementById('modernstory').style.display="none";
    document.getElementById('recipestory').style.display="none";

})
Origin.addEventListener("click", function () {
    console.log("Origin");
    document.getElementById('image').src = "teagarden.jpg";
    document.getElementById('title').innerHTML = "The Origins of Tea (Ancient China to Colonial Era)";
    document.getElementById('originstory').style.display="initial";
    document.getElementById('chaistory').style.display="none";
    document.getElementById('birthstory').style.display="none";
    document.getElementById('modernstory').style.display="none";
    document.getElementById('recipestory').style.display="none";

})

Birth.addEventListener("click", function () {
    console.log("Birth");
    document.getElementById('image').src = "masalachai.jpg";
    document.getElementById('title').innerHTML = "The Birth & Evolution of Chai (India's unique story)";
    document.getElementById('birthstory').style.display="initial";
    document.getElementById('chaistory').style.display="none";
    document.getElementById('originstory').style.display="none";
    document.getElementById('modernstory').style.display="none";
    document.getElementById('recipestory').style.display="none";
   

})
Modern.addEventListener("click", function () {
    console.log("Modern");
    document.getElementById('image').src = "modernchai.jpg";
    document.getElementById('title').innerHTML = "Chai as a popular global beverage";
    document.getElementById('modernstory').style.display="initial";
    document.getElementById('chaistory').style.display="none";
    document.getElementById('originstory').style.display="none";
    document.getElementById('birthstory').style.display="none";
    document.getElementById('recipestory').style.display="none";
  

})

Recipe.addEventListener("click", function () {
    console.log("Recipe");
    document.getElementById('image').src = "cup of tea.jpg";
    document.getElementById('title').innerHTML = "My personal recipe for Chai";
    document.getElementById('recipestory').style.display="initial";
    document.getElementById('birthstory').style.display="none";
    document.getElementById('chaistory').style.display="none";
    document.getElementById('originstory').style.display="none";
    document.getElementById('modernstory').style.display="none";
  
  

})

