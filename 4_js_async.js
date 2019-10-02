// # 1. REQUISIÇÕES AJAX

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/jayme-anchante");
xhr.send(null);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
    }
  }

// # 2. PROMISES

var myPromise = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/jayme-anchante");
    xhr.send(null);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
          } else {
            reject("Error on request");
          }
        }
      }
    });
  }

myPromise()
  .then(function(response) {
    console.log(response);
    })
  .catch(function(error) {
    console.warn(error);
    });

// # 3. USING AXIOS

axios.get("https://api.github.com/users/jayme-anchante")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });






























