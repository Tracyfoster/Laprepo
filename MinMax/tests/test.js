var myApp = require('../app/minMax.js');

(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [-3, 20] for [-1, 20, -3, 4]', function () {
        expect(myApp.findMinMax([-1, 20, -3, 4])).toEqual([-3, 20]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });
      
      it('should return [-50, 0] for [-10, -2, -50, 0]', function () {
        expect(myApp.findMinMax([-10, -2, -50, 0])).toEqual([-50, 0]);
      });

      it('should return [-15, 40] for [40, -7, 1, -15, 0]', function () {
        expect(myApp.findMinMax([40, -7, 1, -15, 0])).toEqual([-15, 40]);
      });

      it('should return [-5.9, 47] for [-1, -2, 47, 0,-1.05, -2, -5.9, 8]', function () {
        expect(myApp.findMinMax([-1, -2, 47, 0,-1.05, -2, -5.9, 8])).toEqual([-5.9, 47]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [-9] for [-9, -9]', function () {
        expect(myApp.findMinMax([-9, -9])).toEqual([4]);
      });

      it('should return [0] for [0, 0, 0]]', function () {
        expect(myApp.findMinMax([0, 0, 0])).toEqual([4]);
      });

    });

  });

})();