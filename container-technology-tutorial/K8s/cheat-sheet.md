```bash
kubectl version
kubectl cluster-info
kubectl get nodes

kubectl get pods -l <key>=<value> -o wide/yaml
kubectl describe pods <pod_name>
kubectl label pod <pod_name> <key>=<value>
kubectl logs <pod_name>
kubectl exec <pod_name> env
kubectl exec -it <pod_name> bash
```

# Deploy containers using Kubectl

```bash
# Create the deployment
kubectl create deployment <deployment_name> --image=<image_name>

# Expose the deployment
kubectl expose deployment <deployment_name>  --type=NodePort   --node-port=8080 --port=3000 --target-port=3000

# Create the deployment and expose it as a single command
kubectl run <deployment_name> --image=<image_name> --replicas=1 --port=3000 --target-port=3000

# Adjust the number of Pods running for a particular deployment
kubectl scale deployments <deployment_name> --replicas=<number>

# Delete a service
kubectl delete service -l <key>=<value>

# Update the configuration of the deployment
kubectl edit deployments <deployment_name>

# Update the image of the application
kubectl set image deployments <deployment_name> <deployment_name>=<image_name>

# Rollback an update
kubectl rollout undo deployments <deployment_name>
```

# Deploy containers using YAML

```bash
kubectl create -f <yaml_file>
kubectl apply -f <yaml_file>
```
