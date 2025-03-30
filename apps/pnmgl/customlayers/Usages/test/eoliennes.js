
const layer = new ol.layer.Vector({
    source: new ol.source.Vector({

        url: 'apps/pnmgl/data/geojson/Eoliennes/Zones propices/us_med_pnmgl_eoliennes_EF-macro-zone-synthese-med-S_pol_4326.geojson',
        format: new ol.format.GeoJSON()

    }),

    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: "rgba(56, 103, 46, 0.6)",
          width: 2,
        }),
        fill: new ol.style.Fill({
          color: "rgba(28, 115, 255, 0)",
        }),
      }),
});


new CustomLayer('us_med_pnmgl_eoliennes_EF-macro-zone-synthese-med-S_pol_4326', layer);

