//alert('test')
//document.body.innerHTML = '<h1>lol<h1>';
//let input1 =document.getElementsByName('xcoordinate');
//console.log(input1);
let long = document.getElementById("long");
let lat = document.getElementById("lat");
let dat = document.getElementById("date");
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

//function displayImage(src, width, height) {
//    var img = document.createElement("img");
//    img.src = src;
 //  img.width = width;
//    img.height = height;
//    document.body.appendChild(img);
//   }

function displayImage(src, width, height){ //IMAGE ISSUES NOT UPDATING??????
    document.getElementById("img2").src = src;
    document.getElementById("img2").width = width;
    document.getElementById("img2").height = height;
}

astro.addEventListener("submit", (e) => {
    e.preventDefault();
    //alert("jawnski submitted");

    let longValue = long.value;
    let latValue = lat.value;
    let dateValue = dat.value;
    //console.log(typeof longValue)
    //console.log(longValue)
    //console.log(dateValue)

    fetch("https://io.adafruit.com/api/v2/torrseba/feeds/cpeg-eleg298", {
        "headers":{
            "x-aio-key":${{secrets.AIO_KEY}}
        },
        method:"GET"
    }).then(function(response){
        return response.json();
    }).then(function(data){
        var feed = JSON.stringify(data);
        var feedJsonObj = JSON.parse(feed);
        console.log(feedJsonObj);
        console.log(feedJsonObj.last_value);
    })



    fetch("https://api.astronomyapi.com/api/v2/studio/star-chart", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "authorization":${{secrets.AST_KEY}},
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "no-cors",
    "sec-fetch-site": "cross-site",
    "sec-gpc": "1",
    "x-requested-with": "XMLHttpRequest",
    "Referer": "http://demo.astronomyapi.com/"
    //"Referrer-Policy": "strict-origin-when-cross-origin"
  },
  method: "POST",
  body:JSON.stringify({style:"inverted",observer:{latitude:Number(latValue),longitude:Number(longValue),date:dateValue},view:{type:"area",parameters:{position:{equatorial:{rightAscension:Number(RightA.value),declination:Number(Declination.value)}},zoom:Number(zoom.value)}}})
})
.then(function(response){
    return response.json();
})
.then(function(data){
    var str = JSON.stringify(data);
    var jsonObj = JSON.parse(str);
    //console.log(data);
    //console.log(str);
    //console.log(str.data.imageUrl);
    //document.write(data.imageUrl);
    //document.write(str);
    //console.log(long)
    //console.log(longValue);
    //console.log(dateValue);
    console.log(jsonObj.data);
    console.log(jsonObj.data.imageUrl);
    //document.write(str.data.imgUrl);
    //displayImage(jsonObj.data.imageUrl, 700, 700);
    displayImage(jsonObj.data.imageUrl, 600, 600);
    /////////displayImage(str.data, 300, 300);
})
.catch(function(error){
    console.log("Error lolz " + error);
})
}) ;
