(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("ridemap",
{ "compressionlevel":-1,
 "height":12,
 "infinite":false,
 "layers":[
        {
         "data":[16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
         "height":12,
         "id":1,
         "name":"\u0421\u043b\u043e\u0439 \u0442\u0430\u0439\u043b\u043e\u0432 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 18, 19, 22, 33, 33, 33, 33, 21, 19, 20, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 18, 19, 20, 0, 0, 0, 0, 18, 19, 20, 0, 0, 0, 4, 5, 5, 5,
            5, 5, 5, 7, 19, 20, 0, 16, 4, 5, 7, 19, 20, 0, 0, 0, 18, 19, 19, 19,
            19, 19, 19, 19, 19, 20, 0, 16, 18, 19, 19, 19, 20, 0, 0, 0, 18, 19, 22, 33,
            33, 33, 33, 33, 33, 34, 0, 16, 18, 19, 19, 22, 34, 0, 0, 0, 18, 19, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 16, 18, 19, 19, 8, 5, 5, 5, 5, 7, 19, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 16, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 0,
            0, 0, 0, 0, 0, 0, 0, 16, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":12,
         "id":2,
         "name":"ride",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141, 142, 143, 0, 71, 72,
            88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0,
            102, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 134, 135,
            0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 113,
            129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127,
            143, 0, 0, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141,
            134, 135, 0, 0, 0, 0, 0, 0, 0, 0, 57, 58, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 49, 0, 43, 0, 48, 0, 0, 0, 71, 72, 0, 87, 88, 0, 48, 0, 49, 0],
         "height":12,
         "id":3,
         "name":"deteils",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":5,
         "name":"\u0421\u043b\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 1",
         "objects":[
                {
                 "height":0,
                 "id":1,
                 "name":"",
                 "polyline":[
                        {
                         "x":0,
                         "y":0
                        }, 
                        {
                         "x":-148.528802320763,
                         "y":431.946006749156
                        }, 
                        {
                         "x":295.542004617844,
                         "y":427.399206678113
                        }, 
                        {
                         "x":286.448404475756,
                         "y":163.684802557575
                        }, 
                        {
                         "x":730.519211414363,
                         "y":166.716002604938
                        }, 
                        {
                         "x":730.519211414363,
                         "y":415.274406488663
                        }, 
                        {
                         "x":595.630809306731,
                         "y":413.758806464981
                        }, 
                        {
                         "x":666.86401041975,
                         "y":603.208809425138
                        }, 
                        {
                         "x":1138.21561778462,
                         "y":604.724409448819
                        }, 
                        {
                         "x":1112.45041738204,
                         "y":347.072405423006
                        }, 
                        {
                         "x":1411.02362204724,
                         "y":362.228405659819
                        }],
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":0,
                 "x":4.54680007104375,
                 "y":-6.062400094725
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":6,
 "nextobjectid":2,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":64,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/tileset.tsx"
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.10",
 "width":20
});