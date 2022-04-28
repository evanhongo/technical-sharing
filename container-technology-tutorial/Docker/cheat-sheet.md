```sh
docker build -t <image_name> .
docker images
docker run -d -p 3000:8080 --name <container_name> -e <key>=<value> <image_name>
docker ps -a
docker logs <containerID>
docker stop <containerID>
docker start <containerID>
docker exec -it <containerID> bash
docker login <registryURI>
docker cp <file> <containerID>:<path>
```

```sh
# Save one or more images to a tar archive
docker save <image_name> -o myapp.tar
docker save <image_name> | gzip -c > myapp.tar.gz

# Load an image from a tar archive
docker load -i myapp.tar
gunzip -c myapp.tar.gz | docker load
```
