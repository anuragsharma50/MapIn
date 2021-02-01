    var selectedValue = sessionStorage.getItem("location");
    console.log(selectedValue);

    var rotation1 = '';
    var rotation2 = '';
    var rotation3 = '';
    var rotation4 = '';

    if(selectedValue === 'temple'){
        rotation1 = '0 0 0';
        rotation2 = '0 0 0';
        rotation3 = '0 0 0';
        rotation4 = '0 300 0';
    }
    else{
        rotation1 = '0 0 0';
        rotation2 = '0 150 0';
        rotation3 = '0 210 0';
        rotation4 = '0 200 0';
    }

    console.log(rotation1);
    console.log(rotation2);
    console.log(rotation3);

window.onload = () => {    
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Arrow',
            location: {
                lat: 28.734376,
                lng: 77.510645,
            },
             rotation: rotation1,
        },
         {
            name: 'Arrow2',
            location: {
                lat: 28.734213,
                lng: 77.510555,
            },
            rotation: rotation2,
        },
         {
            name: 'Arrow3',
            location: {
                lat: 28.733957,
                lng: 77.510505,
            },
            rotation: rotation3,
        },
        {
            name: 'Arrow4',
            location: {
                lat: 28.733786,
                lng: 77.510468,
            },
            rotation: rotation4,
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
         console.log(place.name);
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/arrow.glb');
         console.log(place.rotation);
         if (place.rotation) {
               model.setAttribute('rotation', place.rotation);
          }
         else{
               model.setAttribute('rotation', '0 0 0');
         }

//         model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.8 0.8 0.8');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
