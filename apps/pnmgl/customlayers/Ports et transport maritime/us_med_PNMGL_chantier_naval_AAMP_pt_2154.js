
const layer = new ol.layer.Vector({
    source: new ol.source.Vector({

        url: 'apps/pnmgl/data/geojson/Ports et transport maritime/us_med_PNMGL_chantier_naval_AAMP_pt_2154.geojson',
        format: new ol.format.GeoJSON()

    }),

    // style: new ol.style.Style({
    //     stroke: new ol.style.Stroke({
    //       color: "rgba(46,83,103,0.6)",
    //       width: 1,
    //     }),
    //     fill: new ol.style.Fill({
    //       color: "rgba(0, 0, 0, 0)",
    //     }),
    // }),
});


// Fonction pour transformer les géométries en EPSG:4326
layer.getSource().on('addfeature', function(event) {
    const feature = event.feature;
    const geometry = feature.getGeometry();
    
    if (geometry) {
        // Transformation de la géométrie de EPSG:2154 vers EPSG:4326
        geometry.transform('EPSG:2154', 'EPSG:3857');
    }
});

new CustomLayer('us_med_PNMGL_chantier_naval_AAMP_pt_2154', layer);
