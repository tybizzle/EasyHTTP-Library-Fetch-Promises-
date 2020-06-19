const http = new EasyHTTP;

// // Get Users(GET Request)
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

        // OR
  // .then(function(data) {
  //   console.log(data);
  // })
  // .catch(function(err) {
  //   console.log(err);
  // });

// Create user data
const data = {
  name: 'John Doe',
  username: 'jdoe',
  email: 'jdoe@gmail.com'
};

// // Create User(POST Request)
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// // Update User(PUT Request)
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

  // Delete User(DELETE Request)
// http.delete('https://jsonplaceholder.typicode.com/users/2')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

getTextFile()
  .then(data => console.log(data))
  .catch(err => console.log(err));
