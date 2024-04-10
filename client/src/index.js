const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoibXlyZXdhcmQiLCJhIjoiY2x1c3RpMXE5MG82YzJpcDRzcnFzbzdobiJ9.aL5j11VmaE9wWhWn0i1BNw"

const successCallback = (position) => {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude])
};

const errorCallback = (error) => {
    console.log(error);
};

const options = {
    enableHighAccuracy: true,
    timeout: 10000,
};

function setupMap(center) {

    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center,
        zoom: 15
    })

    const popup = new mapboxgl.Popup({ offset: 25 }).setText('Start journey')

    new mapboxgl.Marker({ color: '#57fa7d', scale: 0.7 })
        .setLngLat(center)
        .setPopup(popup)
        .addTo(map)

    map.addControl(new mapboxgl.FullscreenControl({
        container: document.querySelector('body')
    }))

    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    map.addControl(new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
        'top-left')
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);

function startWatching(stopSelector) {
    if (stopSelector) {
        const element = document.querySelector(stopSelector);
        if (element) {
            const id = navigator.geolocation.watchPosition(successCallback, errorCallback, options);

            element.addEventListener('click', () => {
                navigator.geolocation.clearWatch(id);
            })

            const evtSource = new EventSource("/devices/sns");

            evtSource.onmessage = (event) => {
                console.log(event.data)
            };
        }
    }
}

startWatching("button.connect")