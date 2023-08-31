const currentSpace = document.querySelector('#current--space');
const locationSpace = document.querySelector('#location--space');
const nextButton = document.querySelector('#show--more--button');
const prevButton = document.querySelector('#show--less--button');
const textField = document.querySelector('#text--field');
const searchIcon = document.querySelector('#search--icon');
const button = document.querySelector('#button');
const axception = document.querySelector('#axception');

let search ='london';
const key =  '7466afa010mshe81b5d8d5a68023p1d0c5djsn100f837b673b';




async function myZero(){

   const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`;
   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': `${key}`,
         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
   };

   try{
      const api = await fetch(url, options);
      const jsonData = await api.json();
      const jsonDataSecond = jsonData.current;
      const jsonDataSecond0 = jsonData.location;
      console.log(jsonData);
   
      
    currentSpace.innerHTML = `
      <div id="current--text">${'Temperature_c: '+ jsonDataSecond.temp_c}</div>
      <div id="current--text">${'Temperature_f: '+ jsonDataSecond.temp_f}</div>
      <div id="current--text">${'Wind_mph: '+ jsonDataSecond.wind_mph}</div>
      <div id="current--text">${'Wind_kph: '+ jsonDataSecond.wind_kph}</div>
      <div id="current--text">${'Humidity: '+ jsonDataSecond.humidity}</div>    
     `
     locationSpace.innerHTML = `
      
      <div id="location--text">${'Country: '+jsonDataSecond0.country}</div>
      <div id="location--text">${'Lat: '+jsonDataSecond0.lat}</div>
      <div id="location--text">${'Localtime_epoch: '+jsonDataSecond0.localtime_epoch}</div>
      <div id="location--text">${'Lon: '+jsonDataSecond0.lon}</div>
      <div id="location--text">${'Name: '+jsonDataSecond0.name}</div>
      <div id="location--text">${'Region: '+jsonDataSecond0.region}</div>
      <div id="location--text">${'Tz_id: '+jsonDataSecond0.tz_id}</div>
`
   } catch(TypeError){
      axception.innerHTML = `<div id='axception--error'>0 results found,<br/>  ${textField.value} did not match anything in our database</div>`     
 }
      
}

myZero();

button.addEventListener('click', ()=>{
      search = textField.value;
      console.log(search);
      if(search ==="")throw axception.innerHTML = `<div id='axception--error'>You did not enter anything<div>`; 
      else{
      axception.innerHTML = "";
      }     
       myZero();
})

searchIcon.addEventListener('submit', (e)=>{
   e.preventDefault();
})
textField.addEventListener('submit', (e)=>{
   e.preventDefault();
})