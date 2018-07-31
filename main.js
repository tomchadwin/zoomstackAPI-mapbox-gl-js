var map = new mapboxgl.Map({
    container: 'map',
    style: 'style.json',
    hash: true,
    zoom: 11,
    pitch:0,
    bearing: 0,
    center: [-2, 53]
});
map.on('load', function() {
    // Add Mapillary sequence layer.
    // https://www.mapillary.com/developer/tiles-documentation/#sequence-layer
    map.addLayer({
        "id": "zoomstack",
        "type": "line",
        "source": {
            "type": "vector",
            "tiles": ["https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt"],
            "minzoom": 6,
            "maxzoom": 14
        },
        "source-layer": "waterlines",
        "layout": {
            "line-cap": "round",
            "line-join": "round"
        },
        "paint": {
            "line-opacity": 0.6,
            "line-color": "rgb(53, 175, 109)",
            "line-width": 2
        }
    }, 'waterway-label');
});