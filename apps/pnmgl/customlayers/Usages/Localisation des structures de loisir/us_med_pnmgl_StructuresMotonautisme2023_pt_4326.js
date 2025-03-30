
const layer = new ol.layer.Vector({
    source: new ol.source.Vector({

        url: 'apps/pnmgl/data/geojson/Localisation des structures de loisir/us_med_pnmgl_StructuresMotonautisme2023_pt_4326.geojson',
        format: new ol.format.GeoJSON()

    }),

    style: new ol.style.Style({
        image: new ol.style.RegularShape({
        points: 4, 
        radius: 6, 
        angle: 0, 
        fill: new ol.style.Fill({
            color: "rgba(36, 12, 166, 0.85)" 
        }),
        stroke: new ol.style.Stroke({
            color: "rgba(255, 255, 255, 0)", 
            width: 3
        })
    })
    }),
});

new CustomLayer('us_med_pnmgl_StructuresMotonautisme2023_pt_4326', layer);
