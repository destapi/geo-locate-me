import { generateToken, onMessageEvent } from './fb-messaging';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const localProps = require('./init-props');

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

    mapboxgl.accessToken = localProps("REACT_APP_MAPBOX_ACCESS_TOKEN");
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

function openApiSession() {
    fetch("http://localhost:8082/api/session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            email: "zes.ty@aol.com",
            password: "admin"
        }
    })
        // .then(res => {
        //     return res.json()
        // })
        .then(data => {
            console.log(data)
            openWebsocket();
        })
        .catch(err => {
            console.log(err)
        })
}

function openWebsocket() {
    var socket;
    socket = new WebSocket('ws://localhost:8082/api/socket');

    socket.onclose = function (event) {
        console.log("WebSocket closed");
    };

    socket.onmessage = function (event) {
        var i, j, store, data, array, entity, device, typeKey, alarmKey, text, geofence;
        console.log(event.data);
    };
}

//startWatching("button.connect")

document.addEventListener('DOMContentLoaded', () => {
    generateToken()
    onMessageEvent((payload) => {
        console.log(payload)
    })
    openApiSession()
})