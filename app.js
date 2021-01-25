//location

var selectedValue = '';
var select = '';
function addLoc()
    {
        select = document.getElementById("locations");
        selectedValue = select.options[select.selectedIndex].value;
        console.log(selectedValue);
        
        var rotation1 = '';
        var rotation2 = '';
        var rotation3 = '';

        if(selectedValue === 'Home'){
            rotation1 = '0 0 0';
            rotation2 = '0 0 0';
            rotation3 = '0 0 0';
        }
        else{
            rotation1 = '0 180 0';
            rotation2 = '0 90 0';
            rotation3 = '0 180 0';
        }
        
        console.log(rotation1);
        console.log(rotation2);
        console.log(rotation3);

     let places = staticLoadPlaces();
     renderPlaces(places);

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite',
            location: {
                lat: 28.734282,
                lng: 77.510596,
            },
             rotation: rotation1,
        },
         {
            name: 'Arrow',
            location: {
                lat: 28.734229,
                lng: 77.510661,
            },
            rotation: rotation2,
        },
         {
            name: 'Arrow2',
            location: {
                lat: 28.734229,
                lng: 77.510661,
            },
            rotation: rotation3,
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
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}

    }

