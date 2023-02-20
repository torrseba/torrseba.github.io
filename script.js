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
const zoom = document.getElementById("zoom");
const tooDate = document.getElementById("toDate");
const fromDate = document.getElementById("fromDate");

const applicationId ='12bd8c02-b2b9-4cd9-a522-6b3f63234693';
const applicationSecret = '34fa54cd9605e3ba1185434c1511f29fb26cb1685121b0dd701b47ab1c4be0aec414883f7132593ea135efa5e737507dc21f5baa0f7ace29d94da8c516628c637d21397b9e9f6dba0a24bf602d3a3d1b6a91622895a3847c8373ecd75c7111ee7e9a4f6bc5814f04988176f14a00900f';
const hash1 = btoa(`${applicationId}:${applicationSecret}`);
const astro = document.getElementById("astro");

//const http = new XMLHttpRequest();
const url =  'https://api.astronomyapi.com/api/v2/studio/star-chart'

astro.addEventListener("submit", (e) => {
    e.preventDefault();

    //let xcord = document.getElementByname("xcoordinate");
    //let ycord = document.getElementByname("ycoordinate");
    if (long.value == "" || lat.value == "") {
        alert("Ensure you input a value in both fields!");
      } 
      else {
        // perform operation with form input
        alert("This form has been submitted...Successfully?");
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            ///mode: 'cors', // no-cors, *cors, same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              'authorization':'Basic hash1',
              'Origin':'https://torrseba.github.io/',
              'Host':'https://torrseba.github.io/',

              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: {
                'latitude':lat,
                'longitude':long,
                'date': date,
                'style':style,
                'type':'area',
                'rightAscension':RightA,
                'declination':Declination,
                'zoom':zoom

            }
            
            
            //JSON.stringify(data) // body data type must match "Content-Type" header
          });
            
        
        document.write('This form has a Longitude of ', long.value, ' and latitude of ', lat.value);
        //messages.push('This form has a xcord of ${xcord.value} and password of ${ycord.value}');
        //xcord.value = "";
        //ycord.value = "";
      }
    // handle submit
  });