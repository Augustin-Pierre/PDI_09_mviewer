<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0"
    xmlns="http://www.opengis.net/sld"
    xmlns:ogc="http://www.opengis.net/ogc"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd">
    
    <NamedLayer>
        <Name>pnmgl:us_med_PNMGL_parcours_jetski_2023_ofb_ln_4326</Name> <!-- Nom de la couche dans GeoServer -->
        <UserStyle>
            <Title>Style Parcours Jetski</Title>
            <Abstract>Un style rouge épais pour les parcours de jetski</Abstract>
            
            <FeatureTypeStyle>
                <Rule>
                    <Name>Jetski Rouge</Name>
                    <Title>Parcours en rouge</Title>
                    
                    <LineSymbolizer>
                        <Stroke>
                            <CssParameter name="stroke">#ff0000</CssParameter>  <!-- Rouge -->
                            <CssParameter name="stroke-width">3</CssParameter>  <!-- Épaisseur de 3px -->
                            <CssParameter name="stroke-opacity">0.8</CssParameter> <!-- Opacité à 80% -->
                        </Stroke>
                    </LineSymbolizer>
                </Rule>
            </FeatureTypeStyle>
        </UserStyle>
    </NamedLayer>
</StyledLayerDescriptor>
