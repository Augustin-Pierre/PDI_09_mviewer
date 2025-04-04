
const layer = new ol.layer.Vector({
    source: new ol.source.Vector({

        url: 'apps/pnmgl/data/geojson/Ports et transport maritime/us_med_PNMGL_route_transport_commerce_ofb_ln_4326.geojson',
        format: new ol.format.GeoJSON()

    }),

    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: "rgb(255, 0, 0)",
          width: 1,
        }),

    }),
});

new CustomLayer('us_med_PNMGL_route_transport_commerce_ofb_ln_4326', layer);
