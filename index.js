// Add your code here
// Add your code here
function submitData(userName, userEmail){
  let formData = {
      name: userName,
      email: userEmail
    };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
    })
    .then(function(object) {
      return console.log(object);
    });
}

function addToDOM(stuff) {
  let body = document.querySelector('body')
  let header = document.createElement('h1')
  header.innerHTML = stuff
  body.appendChild(header);
}
