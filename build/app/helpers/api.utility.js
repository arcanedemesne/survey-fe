"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;
exports.POST = POST;
exports.PUT = PUT;

require("whatwg-fetch");

var JSON_HEADERS = {
  "Content-Type": "application/json"
};

function GET(url) {
  return new Promise(function (resolve, reject) {

    return fetch(url, {
      method: "GET",
      headers: JSON_HEADERS
    }).then(function (serverResponse) {
      return resolve(serverResponse.json());
    }).catch(function (error) {
      return reject(error);
    });
  });
}

function POST(url, data) {
  return new Promise(function (resolve, reject) {

    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: JSON_HEADERS
    }).then(function (serverResponse) {
      return resolve(serverResponse.json());
    }).catch(function (error) {
      return reject(error);
    });
  });
}

function PUT(url, data) {
  return new Promise(function (resolve, reject) {

    return fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: JSON_HEADERS
    }).then(function (serverResponse) {
      return resolve(serverResponse.json());
    }).catch(function (error) {
      return reject(error);
    });
  });
}