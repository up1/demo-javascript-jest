# demo-javascript-jest

Step to run

1. Create new image
```
$docker image build -t demo_node .
```

2. Create the docker container to install dependencies and run test
```
$docker container run -t --rm -v $(pwd):/src demo_node npm install
$docker container run -t --rm -v $(pwd):/src demo_node npm test
```
