"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var a=0;a<n.length;a++){var o=n[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,a){return n&&_defineProperties(e.prototype,n),a&&_defineProperties(e,a),e}!function(){var e={lat:14.550962,lng:-90.572075};google.maps.event.addDomListener(window,"load",(function(){var n=new google.maps.Map(document.getElementById("map"),{center:e,zoom:15});new google.maps.Marker({map:n,position:e,title:"Tortillas de harina",visible:!0})}))}();