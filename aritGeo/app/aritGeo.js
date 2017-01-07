'use strict'

module.exports = {

aritGeo: function(aray) { 	
 	var diff = aray[1] - aray[0];
	var ratio = aray[1] / aray[0];

	var arit = true;
	var geo = true;

	for(var i = 0; i < aray.length - 1; i++) {
	    if( aray[i + 1] - aray[i] !== diff )
	      arith = false;
	    if(aray[i + 1] / ratio !== aray[i])
	      geo = false;
	}

	if(arit === true)
	    return "Arithmetic";
	else if(geo === true)
	    return "Geometric";
	else
	    return -1;
  }
}