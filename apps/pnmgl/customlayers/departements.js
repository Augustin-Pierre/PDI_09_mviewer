const layer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/wms',
        params: {'LAYERS': 'pnmgl:departement', 'TILED': true},
    })
})
new CustomLayer('departement', layer)