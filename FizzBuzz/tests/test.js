var myApp = require('../app/fizzBuzz.js');

(function() {
  'use strict';


describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(myApp.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(myApp.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(myApp.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(myApp.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(myApp.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(myApp.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(101)).toBe(101);
  });

  it("should return 0 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(0)).toBe(0);
  });

  it("should return -14 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(-14)).toBe(-14);
  });

  it("should return `FizzBuzz` for -15", function() {
    expect(myApp.fizzBuzz(-15)).toBe('FizzBuzz');
  });

 });

})();