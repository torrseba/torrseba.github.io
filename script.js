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

astro.addEventListener("submit", (e) => {
    e.preventDefault();

fetch("https://api.astronomyapi.com/api/v2/studio/star-chart", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "Basic MTJiZDhjMDItYjJiOS00Y2Q5LWE1MjItNmIzZjYzMjM0NjkzOjM0ZmE1NGNkOTYwNWUzYmExMTg1NDM0YzE1MTFmMjlmYjI2Y2IxNjg1MTIxYjBkZDcwMWI0N2FiMWM0YmUwYWVjNDE0ODgzZjcxMzI1OTNlYTEzNWVmYTVlNzM3NTA3ZGMyMWY1YmFhMGY3YWNlMjlkOTRkYThjNTE2NjI4YzYzN2QyMTM5N2I5ZTlmNmRiYTBhMjRiZjYwMmQzYTNkMWI2YTkxNjIyODk1YTM4NDdjODM3M2VjZDc1YzcxMTFlZTdlOWE0ZjZiYzU4MTRmMDQ5ODgxNzZmMTRhMDA5MDBm",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "sec-gpc": "1",
    "x-requested-with": "XMLHttpRequest",
    "Referer": "http://demo.astronomyapi.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"style\":style,\"observer\":{\"latitude\":lat,\"longitude\":long,\"date\":date},\"view\":{\"type\":\"area\",\"parameters\":{\"position\":{\"equatorial\":{\"rightAscension\":0,\"declination\":0}},\"zoom\":6}}}",
  "method": "POST"
}); ;
fetch("https://api.astronomyapi.com/api/v2/studio/star-chart", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "sec-gpc": "1",
    "Referer": "http://demo.astronomyapi.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "OPTIONS"
});
})