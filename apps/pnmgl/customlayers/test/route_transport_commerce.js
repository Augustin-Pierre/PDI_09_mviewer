
const layer = new ol.layer.Vector({
    source: new ol.source.Vector({

        url: 'apps/pnmgl/data/geojson/Ports et transport maritime/us_med_PNMGL_route_transport_commerce_ofb_ln_4326.geojson',
        format: new ol.format.GeoJSON()

    }),

    // style: new ol.style.Style({
    //     stroke: new ol.style.Stroke({
    //       color: "rgba(164, 165, 166, 0.6)",
    //       width: 1,
    //     }),
    //     fill: new ol.style.Fill({
    //       color: "rgba(146, 127, 127, 0)",
    //     }),
    //   }),
});

new CustomLayer('us_med_PNMGL_route_transport_commerce_ofb_ln_4326', layer);

