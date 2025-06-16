var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_observatorios_para_qgis1_2 = new ol.format.GeoJSON();
var features_observatorios_para_qgis1_2 = format_observatorios_para_qgis1_2.readFeatures(json_observatorios_para_qgis1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_observatorios_para_qgis1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_observatorios_para_qgis1_2.addFeatures(features_observatorios_para_qgis1_2);
var lyr_observatorios_para_qgis1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_observatorios_para_qgis1_2, 
                style: style_observatorios_para_qgis1_2,
                popuplayertitle: 'observatorios_para_qgis (1)',
                interactive: true,
                title: '<img src="styles/legend/observatorios_para_qgis1_2.png" /> observatorios_para_qgis (1)'
            });

lyr_Positron_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_observatorios_para_qgis1_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_OSMStandard_1,lyr_observatorios_para_qgis1_2];
lyr_observatorios_para_qgis1_2.set('fieldAliases', {'nomedoobservatorio': 'nomedoobservatorio', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_observatorios_para_qgis1_2.set('fieldImages', {'nomedoobservatorio': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_observatorios_para_qgis1_2.set('fieldLabels', {'nomedoobservatorio': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_observatorios_para_qgis1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});