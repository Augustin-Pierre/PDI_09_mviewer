
const layer = new ol.layer.Vector({
    source: new ol.source.Vector({

        url: 'apps/pnmgl/data/test_stats.geojson',
        format: new ol.format.GeoJSON()

    }),

});

new CustomLayer('test_stats', layer);



// const layer = new ol.layer.Tile({
//     source: new ol.source.TileWMS({
//         url: 'http://localhost:8080/geoserver/wms',
//         params: {'LAYERS': 'pnmgl:departement', 'TILED': true},
//     })
// })
// new CustomLayer('departement', layer)

// const layer2 = new ol.layer.Tile({
//     source: new ol.source.TileWMS({
//         url: 'http://localhost:8080/geoserver/wms',
//         params: {'LAYERS': 'pnmgl:us_med_PNMGL_cale_de_mise_a_leau_ofb_pt_4326', 'TILED': true},
//     })
// })
// new CustomLayer('cale_mise_eau', layer2)

// // const layer3 = new ol.layer.Tile({
// //     source: new ol.source.TileWMS({
// //         url: 'http://localhost:8080/geoserver/wms',
// //         params: {'LAYERS': 'pnmgl:us_med_PNMGL_chantier_naval_AAMP_pt_L93', 'TILED': true},
// //     })
// // })
// // new CustomLayer('chantier_naval', layer3)


// const layer4 = new ol.layer.Tile({
//      source: new ol.source.TileWMS({
//         url: 'http://localhost:8080/geoserver/wms',
//         params: {'LAYERS': 'pnmgl:us_med_PNMGL_parcours_jetski_2023_ofb_ln_4326', 'TILED': true},
//     })
// })
// new CustomLayer('jetski', layer4) 

// // const layer5 = new ol.layer.Tile({
// //     source: new ol.source.TileWMS({
// //         url: 'http://localhost:8080/geoserver/wms',
// //         params: {'LAYERS': 'pnmgl:us_med_PNMGL_plan_balisage_plages_ofb_pol_4326', 'TILED': true},
// //     })
// // })
// // new CustomLayer('balisage_plages', layer5)

// // const layer6 = new ol.layer.Tile({
// //     source: new ol.source.TileWMS({
// //         url: 'http://localhost:8080/geoserver/wms',
// //         params: {'LAYERS': 'pnmgl:us_med_PNMGL_port_de_commerce_ofb_pt_4326', 'TILED': true},
// //     })
// // })
// // new CustomLayer('port_commerce', layer6)

// // const layer7 = new ol.layer.Tile({
// //     source: new ol.source.TileWMS({
// //         url: 'http://localhost:8080/geoserver/wms',
// //         params: {'LAYERS': 'pnmgl:us_med_PNMGL_route_transport_commerce_ofb_ln_4326', 'TILED': true},
// //     })
// // })
// // new CustomLayer('route_transport', layer7)

// // const layer8 = new ol.layer.Tile({
// //     source: new ol.source.TileWMS({
// //         url: 'http://localhost:8080/geoserver/wms',
// //         params: {'LAYERS': 'pnmgl:us_med_PNMGL_sites_plongee_2021_ofb_pt_4326', 'TILED': true},
// //     })
// // })
// // new CustomLayer('sites_plongee', layer8)

// // const layer9 = new ol.layer.Tile({
// //     source: new ol.source.TileWMS({
// //         url: 'http://localhost:8080/geoserver/wms',
// //         params: {'LAYERS': 'pnmgl:us_med_PNMGL_zones_initiation_jetski_2023_ofb_pol_4326', 'TILED': true},
// //     })
// // })
// // new CustomLayer('zones_jetski', layer9)

// // // http://localhost/?config=apps/pnmgl.xml#