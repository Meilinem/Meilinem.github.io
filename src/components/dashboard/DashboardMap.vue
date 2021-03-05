<template>
	<div id="chartdiv"></div>
</template>

<script>
	import * as am4core from "@amcharts/amcharts4/core"
	import * as am4maps from "@amcharts/amcharts4/maps"
	import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow"
	// import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow"
	import am4themes_animated from "@amcharts/amcharts4/themes/animated"

	export default {
		name: "DashboardMap",
		created() {
			this.interval_chart = setTimeout(() => {
				am4core.ready(this.initiate_map());
			}, 100);
		},
		methods: {
			initiate_map() {
				
				// Themes begin
				am4core.useTheme(am4themes_animated);
				// Themes end

				// Create map instance
				var chart = am4core.create("chartdiv", am4maps.MapChart);

				var mapData = [
					{ "id": "AF", "name": "Afghanistan", "value": 1, "color": "#000000", "idx": 1 },
					{ "id": "DZ", "name": "Algeria", "value": 1, "color": "#000000", "idx": 2 },
					{ "id": "AO", "name": "Angola", "value": 1, "color": "#000000", "idx": 3 },
					{ "id": "AR", "name": "Argentina", "value": 1, "color": "#000000", "idx": 4 },
					{ "id": "AM", "name": "Armenia", "value": 1, "color": "#000000", "idx": 5 },
					{ "id": "AU", "name": "Australia", "value": 1, "color": "#000000", "idx": 8 },
					{ "id": "BH", "name": "Bahrain", "value": 1, "color": "#000000", "idx": 6 },
					{ "id": "BD", "name": "Bangladesh", "value": 1, "color": "#000000", "idx": 7 },
					{ "id": "BY", "name": "Belarus", "value": 1, "color": "#000000", "idx": 8 },
					{ "id": "BE", "name": "Belgium", "value": 1, "color": "#000000", "idx": 9 },
					{ "id": "BJ", "name": "Benin", "value": 1, "color": "#000000", "idx": 10 },
					{ "id": "BO", "name": "Bolivia", "value": 1, "color": "#000000", "idx": 11 },
					{ "id": "BW", "name": "Botswana", "value": 1, "color": "#000000", "idx": 12 },
					{ "id": "BR", "name": "Brazil", "value": 1, "color": "#000000", "idx": 13 },
					{ "id": "BN", "name": "Brunei", "value": 1, "color": "#000000", "idx": 14 },
					{ "id": "KH", "name": "Cambodia", "value": 1, "color": "#000000", "idx": 15 },
					{ "id": "CM", "name": "Cameroon", "value": 1, "color": "#000000", "idx": 16 },
					{ "id": "CA", "name": "Canada", "value": 1, "color": "#000000", "idx": 17 }
				];

				// Set map definition
				chart.geodata = am4geodata_worldLow;

				// Set projection
				chart.projection = new am4maps.projections.Miller();
				chart.homeZoomLevel = 6;
				chart.homeGeoPoint = {
					latitude: 39.48,
					longitude: 125.46
				};

				// Create map polygon series
				var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
				polygonSeries.exclude = ["AQ"];
				polygonSeries.useGeodata = true;
				// polygonSeries.nonScalingStroke = true;
				polygonSeries.strokeWidth = 0.5;
				polygonSeries.calculateVisualCenter = true;
				
				var polygonTemplate = polygonSeries.mapPolygons.template;
				polygonTemplate.fill = "{color}";

				// Small map
				chart.smallMap = new am4maps.SmallMap();
				// Re-position to top right (it defaults to bottom left)
				chart.smallMap.align = "right";
				chart.smallMap.valign = "top";
				chart.smallMap.series.push(polygonSeries);
				chart.smallMap.rectangle.stroke = am4core.color("#FF0000");
				chart.smallMap.rectangle.strokeWidth = 2;
				chart.smallMap.rectangle.strokeOpacity = 1;

				// Zoom control
				chart.zoomControl = new am4maps.ZoomControl();

				var homeButton = new am4core.Button();
				homeButton.events.on("hit", function(){
					chart.goHome();
				});

				homeButton.icon = new am4core.Sprite();
				homeButton.padding(7, 5, 7, 5);
				homeButton.width = 30;
				homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
				homeButton.marginBottom = 10;
				homeButton.parent = chart.zoomControl;
				homeButton.insertBefore(chart.zoomControl.plusButton);

				polygonSeries.events.on("validated", function(){
					imageSeries.invalidate();
				})

				var imageSeries = chart.series.push(new am4maps.MapImageSeries());
				imageSeries.data = mapData;
				imageSeries.dataFields.value = "value";

				var imageTemplate = imageSeries.mapImages.template;
				imageTemplate.nonScaling = true

				imageTemplate.adapter.add("latitude", function(latitude, target) {
				var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
				if(polygon){
					return polygon.visualLatitude;
				}
				return latitude;
				})

				imageTemplate.adapter.add("longitude", function(longitude, target) {
				var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
				if(polygon){
					return polygon.visualLongitude;
				}
				return longitude;
				})

				var circle = imageTemplate.createChild(am4core.Circle);
				circle.fillOpacity = 1;
				circle.fill = "#3d50ff";
				circle.tooltipText = "{name}: [bold]{value}[/]";

				imageSeries.heatRules.push({
					"target": circle,
					"property": "radius",
					"min": 9,
					"max": 9,
					"dataField": "value"
				})

				var label = imageTemplate.createChild(am4core.Label);
				label.text = "[bold]{idx}"
				label.fill = "#FFFFFF"
				label.fontSize = 12
				label.horizontalCenter = "middle";
				label.padding(-15);
				label.adapter.add("dy", function(dy, target){
				var circle = target.parent.children.getIndex(0);
					return circle.pixelRadius;
				})
			}
		}
	}
</script>

<style>
#chartdiv {
  width: 100%;
  height: 800px;
}
</style>