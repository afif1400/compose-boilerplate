# docker-fibonacci
This is a boiler-plate application for using a docker nginx and react.

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
  $ docker-compose up
