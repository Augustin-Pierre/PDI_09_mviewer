
const layer = new ol.layer.Vector({
    source: new ol.source.Vector({

        url: 'apps/pnmgl/data/geojson/Zones de mouillage/Zone interdite au mouillage - Elmes/us_med_pnmgl_ZMEL_Plage_sanatorium_mouillage_reglemente_pol_4326.geojson',
        format: new ol.format.GeoJSON()

    }),

    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: "rgb(194, 0, 0)",
          width: 1,
        }),
        fill: new ol.style.Fill({
          color: "rgba(255, 0, 0, 0.19)",
        }),
    }),
});

new CustomLayer('us_med_pnmgl_ZMEL_Plage_sanatorium_mouillage_reglemente_pol_4326', layer);
