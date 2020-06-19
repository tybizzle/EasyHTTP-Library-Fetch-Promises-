/**
  * EasyHTTP Library
  * Library for making HTTP request
  * 
  * @version 2.0.0
  * @author Taye Akinola
  * @license MIT
  * 
**/

document.getElementById('button').addEventListener('click', getTextFile);

// Make an HTTP GET Request
class EasyHTTP {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // get(url) {
  //   return new Promise(function(resolve, reject) {
  //     fetch(url)
  //     .then(function(res) {
  //       return res.json();
  //     })
  //     .then(function(data) {
  //       resolve(data);
  //     })
  //     .catch(function(err) {
  //       reject(err);
  //     });
  //   });
  // }

  // Make an HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(() => resolve('Resource Deleted'))
      .catch(err => reject(err));
    });
  }
}

// Get local text file
function getTextFile() {
  return new Promise((resolve, reject) => {
    fetch('test.txt')
      .then(res => res.text())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}




























































