# Calcy - A Basic Calculator App

## Overview

Calcy can add, subtract, multilpy, and divide numbers

### `Visit app online`

Currently the app is hosted via AWS on an EC2 t2.micro instance (cus it's free) and can be reached at `http://ec2-54-151-50-156.us-west-1.compute.amazonaws.com:3001/`. It's exposed on port 3001 so make sure to include that at the end of the ip address. If exposed at port 80 it would not be needed. 

### `Build and run app locally`

Clone repo to local machine. CD into /calcy. Install npm if havnt already. Run `npm run fbuild`. Navigate to localhost:3001 in browser.

### `Run the tests`

Run `npm run tests'`.  I created some basic unit tests using react-testing-library / jest on a couple of the components because tests are important. Given more time, I would strive for 100% coverage in my test suite.

## API Design

This specific app uses only `GET` requests to calculate operations on the server and return the results. 

```
GET /:operator/:num1/:num2
```

The `:operator` options include `add`, `subtract`, `multiply`, and `divide`

The response will be a JSON object containing a number

### Example request and response

/multiply/6/5

`Status: 200 OK`
```
{
   30
}
```


## Handling Load and Scaling

For this app the client and server are both running on the same machine.  Ideally, the Express.js (node) Server would be running on a seperate machine, making it easy to horizontally/vertically scale.

Using a load balancer to disperse requests to multiple instances of the server is a great option. 

Node js could introduce `clustering`,  which would allow the app to run on multiple cores (if the machine has them).  Nodejs is single threaded by defualt.  Allowing clustering could run requests on multiple cores, generally in a round-robin fashion, dispersing load.  Using pm2 package is also another option that does this with just a couple lines of code. 

My hosted app on a T2.micro only has one core, and only 1 gb of memory.  Using clusters would not help here. Also expanding nodejs memory limit (which defaults around 1gb) is also not viable in this situation.  But on a much more powerful machine this would be a good option. 


## Saving/Caching Results 

Although the operations happening on the server are not super intensive in this particular app (just adding, multiplying, subtracting, dividing 2 numbers),  a cache could come in handy.  Something like NGINX could be great for reducing load on the server.  Time to live would not be that great of a factor, as these math operations never change results.  5 x 5 will always be 25. Always.

An LRU could be handy here to limit the size of the cache.  Some operations over time, would probably end up being much more frequent than others, and keeoing them in the cache would be a great strategy.

Saving past calculations/results locally could be nice.  The 10 most recent results could be stored in a table below the calculator.  This could be implemented in several ways, like storing them locally with various methods, or storing them in a database to be accessed whenever logging back into the app in the case of users and accounts. 

