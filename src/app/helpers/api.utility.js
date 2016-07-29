import 'whatwg-fetch';

const JSON_HEADERS = {
  "Content-Type": "application/json"
};

export function GET(url) {
  return new Promise((resolve, reject) => {

    return fetch(url, {
      method: "GET",
      headers: JSON_HEADERS
    })
      .then((serverResponse) => { return resolve(serverResponse.json()); })
      .catch((error) => { return reject(error); });

  });
}

export function POST(url, data) {
  return new Promise((resolve, reject) => {

    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: JSON_HEADERS
    })
      .then((serverResponse) => {
        return resolve(serverResponse.json());
      })
      .catch((error) => {
        return reject(error);
      });

  });
}

export function PUT(url, data) {
  return new Promise((resolve, reject) => {

    return fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: JSON_HEADERS
  })
    .then((serverResponse) => { return resolve(serverResponse.json()); })
    .catch((error) => { return reject(error); });

  });
}

