// Add your code here
// Add your code here
function submitData(){
    let formData = {
        userName: name,
        userEmail: email
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
          console.log(object);
        });
}
