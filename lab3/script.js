function zero(el){
    if (el < 10) el = '0'+el;
    return el;
}
function RostDate() {
    const Rdate = new Date();
    const rday=zero(Rdate.getDate());
    const rmonth=zero(Rdate.getMonth()+1);
    const ryear=Rdate.getFullYear();
    const rhour=zero(Rdate.getHours());
    const rminute=zero(Rdate.getMinutes());
    const rsecond=zero(Rdate.getSeconds());
    return rday+'.'+rmonth+'.'+ryear+' '+rhour+':'+rminute+':'+rsecond;
}
setInterval(function(){
    document.getElementById("date").innerHTML = RostDate();
},1000);

function tempC(val){
    val-=273;
    if (val>0) return "+"+Math.round(val)+'&deg;'+'C';
    else return Math.round(val)+'&deg;'+'C'
}

const apikey = "a8739939f91c6183c6234204b3bb64a8";
async function WeatherRostov() {
    const url = "https://api.openweathermap.org/data/2.5/weather?lang=ru&q=Rostov-on-Don,ru&appid=" + apikey;
    let response = await fetch(url);
    data = await response.json();
    console.log(data);
    document.getElementById('tempRov').innerHTML = tempC(data.main.temp);
    document.querySelector('.iconRov').innerHTML = '<img src="https://openweathermap.org/img/wn/'+ data.weather[0]['icon']+'@2x.png">';
    document.getElementById('wind').innerHTML = 'Скорость ветра: '+data.wind.speed + " м/c";
    document.getElementById('feelslike').innerHTML = "По ощущению: " + tempC(data.main.feels_like);
    document.getElementById('pressure').innerHTML = 'Давление: '+Math.round(data.main.pressure * 0.750062) + " мм рт. ст.";
    document.getElementById('humidity').innerHTML = 'Влажность: '+data.main.humidity + " %";
}

const cities1 = ["Moscow,ru", "Dubai,ae", "New York City,us", "Helsinki,fi"];
const cities2=["Rome,it","Vladivostok,ru","Tashkent","Luxembourg, LU"];

/*async function WeatherCities() {
    const cities = ["Moscow,ru", "Dubai,ae", "New York City,us", "Helsinki,fi"];
    let icon = document.getElementById("tablerow");
    let icon1 = document.getElementById("tablerow");
    let icon2 = document.getElementById("tablerow1");
    let icon3 = document.getElementById("tablerow2");
    let icon4 = document.getElementById("tablerow3");
    for (let k=0;k<7;k+2){
        if (k==0) icon===icon1;
        else if (k==2) icon===icon2;
        else if (k==4) icon===icon3;
        else if (k==6) icon===icon4
    
        for (let i = 0; i < cities.length; i++) {
            const url = "https://api.openweathermap.org/data/2.5/weather?lang=ru&q=" + cities[i] + "&appid=" + apikey;
            let response = await fetch(url);
            json = await response.json();      
            let tr = document.createElement("tr");
            icon.appendChild(tr);
            let td1 = document.createElement("td");
            td1.innerHTML = json.name;
            tr.appendChild(td1);
            let td2 = document.createElement("td");
            td2.innerHTML = '<img src="https://openweathermap.org/img/wn/'+ json.weather[0]['icon']+'@2x.png">';
            tr.appendChild(td2);
            let td3 = document.createElement("td");
            td3.innerHTML = "Температура: "+tempC(json.main.temp);
            tr.appendChild(td3);
            let td4 = document.createElement("td");
            td4.innerHTML = "По ощущению: " + tempC(json.main.feels_like);
            tr.appendChild(td4);
            
        }
    }
}*/
let icon = document.getElementById("tablerow");
let icon1 = document.getElementById("tablerow1");
cities1.forEach(async function WeatherCities(cityn){
    const url = "https://api.openweathermap.org/data/2.5/weather?lang=ru&q=" + cityn + "&appid=" + apikey;
    let response = await fetch(url);
    json = await response.json();      
    let tr = document.createElement("tr");
        icon.appendChild(tr);
        let td1 = document.createElement("td");
        td1.innerHTML = json.name;
        tr.appendChild(td1);
        let td2 = document.createElement("td");
        td2.innerHTML = '<img src="https://openweathermap.org/img/wn/'+ json.weather[0]['icon']+'@2x.png">';
        tr.appendChild(td2);
        let td3 = document.createElement("td");
        td3.innerHTML = "Температура: "+tempC(json.main.temp);
        tr.appendChild(td3);
        let td4 = document.createElement("td");
        td4.innerHTML = "По ощущению: " + tempC(json.main.feels_like);
        tr.appendChild(td4);
}
);
cities2.forEach(async function WeatherCities(cityn){
    const url = "https://api.openweathermap.org/data/2.5/weather?lang=ru&q=" + cityn + "&appid=" + apikey;
    let response = await fetch(url);
    json = await response.json();      
    let tr = document.createElement("tr");
        icon1.appendChild(tr);
        let td1 = document.createElement("td");
        td1.innerHTML = json.name;
        tr.appendChild(td1);
        let td2 = document.createElement("td");
        td2.innerHTML = '<img src="https://openweathermap.org/img/wn/'+ json.weather[0]['icon']+'@2x.png">';
        tr.appendChild(td2);
        let td3 = document.createElement("td");
        td3.innerHTML = "Температура: "+tempC(json.main.temp);
        tr.appendChild(td3);
        let td4 = document.createElement("td");
        td4.innerHTML = "По ощущению: " + tempC(json.main.feels_like);
        tr.appendChild(td4);
});

/*async function WeatherCities1() {
    const cities = ["Rome,it","Vladivostok,ru","Tashkent","Luxembourg, LU"];
    let icon = document.getElementById("tablerow1");
    for (let i = 0; i < cities.length; i++) {
        const url = "https://api.openweathermap.org/data/2.5/weather?lang=ru&q=" + cities[i] + "&appid=" + apikey;
        let response = await fetch(url);
        data = await response.json();
        let tr = document.createElement("tr");
        icon.appendChild(tr);
        let td1 = document.createElement("td");
        td1.innerHTML = data.name;
        tr.appendChild(td1);
        let td2 = document.createElement("td");
        td2.innerHTML = '<img src="https://openweathermap.org/img/wn/'+ data.weather[0]['icon']+'@2x.png">';
        tr.appendChild(td2);
        let td3 = document.createElement("td");
        td3.innerHTML = "Температура: "+tempC(data.main.temp);
        tr.appendChild(td3);
        let td4 = document.createElement("td");
        td4.innerHTML = "По ощущению: " + tempC(data.main.feels_like);
        tr.appendChild(td4);
    }
}*/
async function WeatherCities(cityn){
    const url = "https://api.openweathermap.org/data/2.5/weather?lang=ru&q=" + cityn + "&appid=" + apikey;
    let response = await fetch(url);
    json = await response.json();      
    let tr = document.createElement("tr");
        icon1.appendChild(tr);
        let td1 = document.createElement("td");
        td1.innerHTML = json.name;
        tr.appendChild(td1);
        let td2 = document.createElement("td");
        td2.innerHTML = '<img src="https://openweathermap.org/img/wn/'+ json.weather[0]['icon']+'@2x.png">';
        tr.appendChild(td2);
        let td3 = document.createElement("td");
        td3.innerHTML = "Температура: "+tempC(json.main.temp);
        tr.appendChild(td3);
        let td4 = document.createElement("td");
        td4.innerHTML = "По ощущению: " + tempC(json.main.feels_like);
        tr.appendChild(td4);
}
let a = cities2;
cities2.forEach(WeatherCities(a, icon1));

WeatherRostov();
//WeatherCities();
//WeatherCities1();
