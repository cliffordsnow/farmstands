var wms_layers = [];

var format_export85_0 = new ol.format.GeoJSON();
var features_export85_0 = format_export85_0.readFeatures(json_export85_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_export85_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_export85_0.addFeatures(features_export85_0);
var lyr_export85_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_export85_0, 
                style: style_export85_0,
                interactive: true,
                title: '<img src="styles/legend/export85_0.png" /> export (85)'
            });
var format_farmstands_1 = new ol.format.GeoJSON();
var features_farmstands_1 = format_farmstands_1.readFeatures(json_farmstands_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_farmstands_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_farmstands_1.addFeatures(features_farmstands_1);
var lyr_farmstands_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_farmstands_1, 
                style: style_farmstands_1,
                interactive: true,
                title: '<img src="styles/legend/farmstands_1.png" /> farmstands'
            });

        var lyr_OpenStreetMapmonochrome_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://osm.org">@OpenStreetMap Contributors</a>',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var format_farmstands_3 = new ol.format.GeoJSON();
var features_farmstands_3 = format_farmstands_3.readFeatures(json_farmstands_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_farmstands_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_farmstands_3.addFeatures(features_farmstands_3);
var lyr_farmstands_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_farmstands_3, 
                style: style_farmstands_3,
                interactive: true,
                title: '<img src="styles/legend/farmstands_3.png" /> farmstands'
            });
var group_export85 = new ol.layer.Group({
                                layers: [lyr_export85_0,lyr_farmstands_1,],
                                title: "export (85)"});

lyr_export85_0.setVisible(true);lyr_farmstands_1.setVisible(true);lyr_OpenStreetMapmonochrome_2.setVisible(true);lyr_farmstands_3.setVisible(true);
var layersList = [group_export85,lyr_OpenStreetMapmonochrome_2,lyr_farmstands_3];
lyr_export85_0.set('fieldAliases', {'id': 'id', '@id': '@id', 'addr:city': 'addr:city', 'addr:housenumber': 'addr:housenumber', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'building': 'building', 'name': 'name', 'phone': 'phone', 'shop': 'shop', 'website': 'website', 'cuisine': 'cuisine', 'contact:facebook': 'contact:facebook', 'amenity': 'amenity', 'opening_hours': 'opening_hours', 'organic': 'organic', 'landuse': 'landuse', 'addr:state': 'addr:state', 'cheese': 'cheese', 'email': 'email', 'product': 'product', });
lyr_farmstands_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', '@id': '@id', 'addr:city': 'addr:city', 'addr:housenumber': 'addr:housenumber', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'building': 'building', 'name': 'name', 'phone': 'phone', 'shop': 'shop', 'website': 'website', 'cuisine': 'cuisine', 'contact:facebook': 'contact:facebook', 'amenity': 'amenity', 'opening_hours': 'opening_hours', 'organic': 'organic', 'landuse': 'landuse', 'addr:state': 'addr:state', 'cheese': 'cheese', 'email': 'email', 'product': 'product', });
lyr_farmstands_3.set('fieldAliases', {'name': 'Name', 'phone': 'Phone', 'website': 'URL', 'cuisine': 'cuisine', 'contact:facebook': 'Facebook', 'opening_hours': 'opening_hours', 'organic': 'organic', 'addr:state': 'addr:state', 'cheese': 'cheese', 'email': 'Email', 'product': 'product', 'address2': 'Address', });
lyr_export85_0.set('fieldImages', {'id': '', '@id': '', 'addr:city': '', 'addr:housenumber': '', 'addr:postcode': '', 'addr:street': '', 'building': '', 'name': '', 'phone': '', 'shop': '', 'website': '', 'cuisine': '', 'contact:facebook': '', 'amenity': '', 'opening_hours': '', 'organic': '', 'landuse': '', 'addr:state': '', 'cheese': '', 'email': '', 'product': '', });
lyr_farmstands_1.set('fieldImages', {'fid': '', 'id': '', '@id': '', 'addr:city': '', 'addr:housenumber': '', 'addr:postcode': '', 'addr:street': '', 'building': '', 'name': '', 'phone': '', 'shop': '', 'website': '', 'cuisine': '', 'contact:facebook': '', 'amenity': '', 'opening_hours': '', 'organic': '', 'landuse': '', 'addr:state': '', 'cheese': '', 'email': '', 'product': '', });
lyr_farmstands_3.set('fieldImages', {'name': 'TextEdit', 'phone': 'TextEdit', 'website': 'TextEdit', 'cuisine': 'TextEdit', 'contact:facebook': 'TextEdit', 'opening_hours': 'TextEdit', 'organic': 'TextEdit', 'addr:state': 'TextEdit', 'cheese': 'TextEdit', 'email': 'TextEdit', 'product': 'TextEdit', 'address2': 'TextEdit', });
lyr_export85_0.set('fieldLabels', {});
lyr_farmstands_1.set('fieldLabels', {});
lyr_farmstands_3.set('fieldLabels', {'name': 'inline label', 'phone': 'inline label', 'website': 'inline label', 'cuisine': 'no label', 'contact:facebook': 'inline label', 'opening_hours': 'inline label', 'organic': 'inline label', 'addr:state': 'no label', 'cheese': 'no label', 'email': 'inline label', 'product': 'inline label', 'address2': 'inline label', });
lyr_farmstands_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});