
const layer = new ol.layer.Vector({
    source: new ol.source.Vector({

        url: 'apps/pnmgl/data/geojson/Localisation des structures de loisir/us_med_pnmgl_StructuresLocationsBateaux2023_pt_4326.geojson',
        format: new ol.format.GeoJSON()

    }),

    style: new ol.style.Style({
        image: new ol.style.RegularShape({
        points: 4, 
        radius: 6, 
        angle: 0, 
        fill: new ol.style.Fill({
            color: "rgba(6, 132, 35, 0.68)" 
        }),
        stroke: new ol.style.Stroke({
            color: "rgba(0, 0, 0, 0)", 
            width: 3
        })
    })
    }),
});

new CustomLayer('us_med_pnmgl_StructuresLocationsBateaux2023_pt_4326', layer);
