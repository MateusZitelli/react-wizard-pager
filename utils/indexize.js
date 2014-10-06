"use strict";

var addIndexesToArray = function(arr){
  // Return if arr is not an array
  if(window.toString.call(arr) !== "[object Array]"){
    return;
  }

  for(var i = 0, arrLen = arr.length; i < arrLen; i++){
    arr[i].index = i;
    indexize(arr[i]);
  }
};

var indexize = function(obj) {
  if(window.toString.call(obj) !== "[object Object]"){
    return;
  }

  var keys = Object.keys(obj);
  var keysLength = keys.length;

  if(keysLength === 0){
    return; 
  }

  for(var i = 0; i < keysLength; i++){
    addIndexesToArray(obj[keys[i]]);
    indexize(obj[keys[i]]);
  }
};

module.exports = indexize;
