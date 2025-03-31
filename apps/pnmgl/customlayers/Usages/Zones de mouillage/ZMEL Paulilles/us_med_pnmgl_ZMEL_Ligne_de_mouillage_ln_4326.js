
const layer = new ol.layer.Vector({
    source: new ol.source.Vector({

        url: 'apps/pnmgl/data/geojson/Zones de mouillage/ZMEL Paulilles/us_med_pnmgl_ZMEL_Ligne_de_mouillage_ln_4326.geojson',
        format: new ol.format.GeoJSON()

    }),

    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: "rgba(46,83,103,0.6)",
          width: 2,
        }),
    }),
});

new CustomLayer('us_med_pnmgl_ZMEL_Ligne_de_mouillage_ln_4326', layer);
