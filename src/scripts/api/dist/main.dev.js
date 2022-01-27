"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*
 * 封装接口
 */
//import React from "react";
//const url = ;
var CONST_OPTIONS = {
  method: "post",
  //credentials: 'include',
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  body: JSON.stringify({
    name: "ye"
  })
};

function post(url, data) {
  return new Promise(function (resolve, reject) {
    fetch(url, CONST_OPTIONS, data).then(function (res) {
      resolve(res);
    })["catch"](function (err) {
      reject(err);
    });
  });
}

var api = {
  findStudent: function findStudent() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return post('http://localhost:9000/testApi/findStudents');
  }
};
console.log(1);
var _default = api;
exports["default"] = _default;