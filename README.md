# docker-boilerplate
This is a boiler-plate application for using a docker nginx and react.

## features
This is a basic web application which just calculates the fibonacci number at a particular index.
And this also contains a redis chaching layer to store the fibonacci numner at a particular index so that the request does not go to the server every time.
This can be a boiler-plate for your application with CI usiug travis.

## prerequisites
  + docker
  + nodejs
  + docker-compose

## Services
+ Api - backend which return the nth Fibonacci number
+ Worker - This is a caching server
+ Redis - This acts as a cache
+ client - This is the front-end app in reactjs
+ postgres - primary database

## local development
+ Use dockerfile.dev instead of **Dockerfile**
+ In the root directory run the below command
  ```zsh
  $ docker-compose up --build
  
 head over to http://localhost:4000, to see the react-app running.
 
 You can also run this application on an **Elastic Beanstalk** multicontainer docker environment, served from github or from the source code,
 with CI using tracis CI.

## Production
In production replave my Docker Hub ID which is afif1400 with your Docker Hub ID, SO that the images can be pushed to your repository and also fetched from.

## Help
If you face a problem starting up the app, just file an issue and i would be happy to help. 
All PRs are welcome
