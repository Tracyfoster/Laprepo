'use strict'

module.exports = {

 findMinMax: function(aray) { 	
 	var maxN = aray[0];
	var minN = aray[0];
	var minMax = [];
	var num = aray.length
	for (var i = 1; i<num; ++i){
		if (aray[i] < minN) {
			minN = aray[i]
		}
		else if (aray[i] > maxN) {
			maxN = aray[i]
		}
	}

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
