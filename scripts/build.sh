#eval $(minikube docker-env)
docker build ./src/antony/ -t antony:3
docker build ./src/roger/ -t roger:3
