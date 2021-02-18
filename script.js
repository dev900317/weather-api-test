const url = 'https://www.metaweather.com/api/location/44418/';
const searchUrl = 'https://www.metaweather.com/api/location/search/?lattlong=';
const currentCity = document.querySelector('.current-city');

let  latitude;
let  longitude;

console.dir(currentCity)

const success = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    loadDefaultPosition(latitude, longitude).then(data => {
        console.log(data[0].title);
        currentCity.textContent = data[0].title;
    });
}

const showDefaultPosition = () => {
    if(!navigator.geolocation) {
        console.log('Get location fail')
    } else {
        navigator.geolocation.getCurrentPosition(success);
    }
}

// const loadData = async () => {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data;
// }

const loadDefaultPosition = async (lat, long) => {
        const response = await fetch(`${searchUrl}${lat},${long}`);
        const data = await response.json();
        return data;
}

// loadData().then(data => console.log(data));

showDefaultPosition();