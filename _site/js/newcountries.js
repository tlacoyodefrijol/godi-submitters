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
  'submission':'#14dff0',//Assessed
  'defaultFill': '#bababa'
},
data:{
  "AFG":{
    "fillKey":"submission",
  "Prepared":"Afghanistan submitted for the first time in 2016"
  },
  "BLR":{
    "fillKey":"submission",
  "Prepared":"Belarus submitted partially for the first time in 2016"
  },
  "BTN":{
    "fillKey":"submission",
  "Prepared":"Bhutan submitted for the first time in 2016"
  },
  "EST":{
    "fillKey":"submission",
  "Prepared":"Estonia submitted for the first time in 2016"
  },
  "MWI":{
    "fillKey":"submission",
  "Prepared":"Malawi submitted for the first time in 2016"
  },
  "MNE":{
    "fillKey":"submission",
  "Prepared":"Montenegro submitted for the first time in 2016"
  },
  "MOZ":{
    "fillKey":"submission",
  "Prepared":"Mozambique submitted for the first time in 2016"
  },
  "NAM":{
    "fillKey":"submission",
  "Prepared":"Namibia submitted for the first time in 2016"
  },
  "PER":{
    "fillKey":"submission",
  "Prepared":"Peru submitted for the first time in 2016"
  },
  "VEN":{
    "fillKey":"submission",
  "Prepared":"Venezuela submitted for the first time in 2016"
  },
  "UNK":{
    "fillKey":"submission",
  "Prepared":"Kosovo submitted for the first time in 2016"
  },
  },

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
