//alert('test')
//document.body.innerHTML = '<h1>lol<h1>';
//let input1 =document.getElementsByName('xcoordinate');
//console.log(input1);
const long = document.getElementById("long");
const lat = document.getElementById("lat");
const date = document.getElementById("date");
const style = document.getElementById("style");
const type = document.getElementById("type");
const RightA = document.getElementById("RightA");
const Declination = document.getElementById("Declination");
const zoo = document.getElementById("zoom");
const astro = document.getElementById("astro");
astro.addEventListener("submit", (e) => {
    e.preventDefault();

    //let xcord = document.getElementByname("xcoordinate");
    //let ycord = document.getElementByname("ycoordinate");
    if (long.value == "" || lat.value == "") {
        alert("Ensure you input a value in both fields!");
      } 
      else {
        // perform operation with form input
        alert("This form has been successfully submitted!");
        document.write('This form has a Longitude of ', long.value, 'and latitude of ', lat.value);
        messages.push('This form has a xcord of ${xcord.value} and password of ${ycord.value}');
        //xcord.value = "";
        //ycord.value = "";
      }
    // handle submit
  });