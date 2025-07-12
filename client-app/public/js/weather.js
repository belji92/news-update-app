navigator.geolocation.getCurrentPosition(pos => {
    fetch(`/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('weather').innerText = `${data.name}: ${data.main.temp}°C`;
        });
});
