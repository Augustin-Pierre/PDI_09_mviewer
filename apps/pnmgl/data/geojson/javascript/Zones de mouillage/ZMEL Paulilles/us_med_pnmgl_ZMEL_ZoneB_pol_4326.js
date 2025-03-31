
const layer = new ol.layer.Vector({
    source: new ol.source.Vector({

        url: 'apps/pnmgl/data/geojson/Zones de mouillage/ZMEL Paulilles/us_med_pnmgl_ZMEL_ZoneB_pol_4326.geojson',
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

new CustomLayer('us_med_pnmgl_ZMEL_ZoneB_pol_4326', layer);
