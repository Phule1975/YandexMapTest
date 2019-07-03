const init = () => {
    const myMap = new ymaps.Map('map', {
        center: [59.91807704, 30.30489950],
        zoom: 14
    });

    const addPoint = (point) => {
        myGeoObject = new ymaps.GeoObject({
            geometry: {
                type:"Point",
                coordinates: point
            }
        },
        {
            preset: 'islands#redIcon'
        });

        myMap.geoObjects.add(myGeoObject);
    };

    const onMapClick = (event) => {
        var coords = event.get('coords');
        myMap.balloon.open(coords, {
            contentHeader: 'Событие', 
            contentBody: '<p>Кто-то щелкнул по карте.</p>' +
                '<p>Координаты щелчка: ' + [
                coords[0].toPrecision(6),
                coords[1].toPrecision(6)
                ].join(', ') + '</p>',
            contentFooter:'<sup>Щелкните еще раз</sup>'
        });

        addPoint(coords);
        //console.log(event.target);
    };

    myMap.events.add('click', onMapClick);

};
ymaps.ready(init);

// Размещение геообъекта на карте.
