import mapboxgl from 'mapbox-gl';
const initMapbox = () => {

  const mapElement = document.getElementById('map');
  
  const buildMap = () => {
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    return new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });
  };
  
  const addMarkersToMap = (map, markers) => {
    markers.forEach((marker) => {
      new mapboxgl.Marker({ color: '#E53E3E' })
        .setLngLat([ marker.lng, marker.lat ])
        .addTo(map);
    });
  };
  
  const fitMapToMarkers = (map, markers) => {
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
    map.fitBounds(bounds, { padding: 70, maxZoom: 15 });
  };
  
  const runMapbox = () => {
    if (mapElement) {
      const map = buildMap();
      const markers = JSON.parse(mapElement.dataset.markers);
      addMarkersToMap(map, markers);
      fitMapToMarkers(map, markers);
    }
  };

  runMapbox()
  
}
export { initMapbox };