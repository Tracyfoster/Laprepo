'use strict'

module.exports = {

 findMinMax: function(aray) { 	
 	var maxN = 0;
	var minN = 0;
	var minMax = [];
	minN = Math.min.apply(null,aray);
	maxN = Math.max.apply(null,aray);
	if (minN === maxN){
		minMax.push(minN);
	}
	else {
		minMax.push(minN);
		minMax.push(maxN);
	}
	return minMax;
 }

}