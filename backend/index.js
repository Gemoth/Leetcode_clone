const express = require('express')
const app = express()
const port = 3000

const USERS = [];

const QUESTIONS = [{
    title: "Two states",
    description: "Given an array, return the maximum of the array",
    testCase: [{
        input: [1, 2, 3],
        output: 3
    }, {
        input: [1, 2, 3, 4],
        output: 4
    }]
}];

const SUBMISSIONS = [
    {
        userId: 1,
        questionId: 1,
        solution: "function max(arr) { return Math.max(...arr); }",
        status: "accepted"
    },
    {
        userId: 2,
        questionId: 1,
        solution: "function max(arr) { return Math.max(...arr) + 1; }",
        status: "rejected"
    }
];

app.post('/SignUp', (req, res) => {
    // Add logic to decode body of request
    // body should have email and password
    
    
    
    // Store email and password in the USERs array (only if the user with the given email doesn't exist)

    // return back 200 status code to the client
res.send('Hello World!')
})

app.post('Login', (req, res) => {
    // Add logic to decode body of request
    // body should have email and password

    // Check if the user with the given email exists in the USERs array
    // if it does, check if the password matches
    // if the password is the same, return 200 status code.
    // Also send back an access token to the client.(any random string will do for now)
    // if the password is not the same, return 401 status code.
    res.send(' <html><body><h1>Hello World!</h1></body></html> ')
  })

app.get('/questions', (req, res) => {
    // return all the questions in the QUESTIONS array
    res.send(' <html><body><h1>Hello World!</h1></body></html> ')
  })

  
  app.get('/submissions', (req, res) => {
    // return the users submissions for this problem.
    res.json({ Name: 'John',
    Age: 30,
    City: 'New York'})
  })
  app.post('/submissions', (req, res) => {
    // Let the user submit a problem, randomnly accept or reject the solution.
    // Store the submission in the submission in the submissions array.
    res.json({ Name: 'John',
    Age: 30,
    City: 'New York'})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})