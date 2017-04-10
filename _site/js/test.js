var basic_choropleth = new Datamap({
  element: document.getElementById('container'),
  scope: 'world', // Currently supports 'usa' and 'world', however with custom map data you can specify your own
  projection: 'mercator', // Style of projection to be used. try "mercator"
  height: null, // If not null, datamaps will grab the height of 'element'
  width: null, // If not null, datamaps will grab the width of 'element',
  responsive: true, // If true, call `resize()` on the map object when it should adjust it's size
  highlightOnHover: true,
  highlightFillColor: '#eeeee',

 geographyConfig: {
   highlightOnHover: true,
   highlightFillColor: 'rgba(0,153,153,1)',
   highlightBorderColor: 'none',
       highlightBorderWidth: .5,
       highlightBorderOpacity: .5,
       highlightFillOpacity: 0.85,

  popupTemplate: function(geography, data) {
        return '<div class="hoverinfo">' + geography.properties.name +
        ': ' +  data.Prepared + ' '
      },
      highlightBorderWidth: 3
  },

fills: {
  'submission':'#2ff014',//Assessed
  'defaultFill': '#bababa'
},
data:{
  "AFG":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "ATG":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "ALB":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "ARG":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "AUT":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "AUS":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "BIH":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "BRB":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "BGD":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "BEL":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "BGR":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "BOL":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "BRA":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "BHS":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "BTN":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "BWA":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "CHE":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "CHL":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "CMR":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "COL":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "CRI":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "CZE":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "DEU":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "DNK":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "DOM":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "FIN":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "FRA":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "GBR":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "GHA":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "GRC":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "GTM":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "GUY":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "HKG":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "HRV":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "IDN":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "ISR":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "IMN":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "IND":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "IRN":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "ITA":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "JAM":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "JPN":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "KEN":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "KHM":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "KNA":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "LCA":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "LSO":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "LVA":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "MNE":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "MKD":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "MMR":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "MWI":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "MEX":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "MYS":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "MOZ":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "NAM":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "NLD":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "NOR":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "NPL":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "NZL":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "OMN":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "PAN":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "PER":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "PHL":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "PAK":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "POL":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "PRI":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "PRT":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "PRY":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "ROU":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "SRB":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "RUS":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "SWE":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "SGP":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "SVN":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "SVK":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "SLV":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "THA":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "TUN":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "TUR":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "TTO":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "TWN":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "TZA":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "UKR":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "USA":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "URY":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "VCT":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "VEN":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "ZAF":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "ZMB":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
  },
  "ZWE":{
    "fillKey":"submission",
  "Prepared":"This place was assessed and reviewd for 2016 GODI"
}},

done: function(datamap) {
    datamap.svg.call(d3.behavior.zoom().on("zoom", redraw));
    function redraw() {
        var prefix = '-webkit-transform' in document.body.style ?
                        '-webkit-' : '-moz-transform' in document.body.style ?
                                    '-moz-' : '-ms-transform' in document.body.style ?
                                            '-ms-' : '';
        var x = d3.event.translate[0];
        var y = d3.event.translate[1];
        datamap.svg.selectAll("g")
            .style(prefix + 'transform',
                'translate(' + x +'px, ' + y + 'px) scale(' + (d3.event.scale) + ')');
    }
}
 });
