# When Not to Use Docker: Cases Where Containers Don’t Help

## **`When Performance Is Critical`**

## Docker may not be the best choice for systems where performance is critical. The nature of containerization creates overheads that don’t exist when software’s installed directly onto a host machine.

## Of course Docker can also help improve performance, particularly by making it easier to horizontally scale your application. It’s therefore important that this judgement is made in the context of your system’s requirements and its interactions with the underlying operating system.

## Docker will use far fewer resources than a VM but it’s still another process that must run on the host. In resource-constrained environments, you could find that container processes or the Docker daemon itself are targeted by the OS out-of-memory killer, causing cascading failures as pieces of your application are evicted.

<br />

## **`Lots of Persistent Data`**

## Docker containers are designed to be ephemeral by default. Persistent data is supported through the use of volumes. These are mounted into containers to store data elsewhere on the host.

## The performance of volume storage varies depending on the selected driver and the host environment. Even in the best case scenario, there’s an extra overhead compared with directly interacting with the host’s filesystem. This can be significant in cases where there’s a high volume of file reads or writes.

## The data stored within volumes can be tricky to manage and maintain. You need to use Docker commands to interact with your volumes. Data inspections are best performed by getting a shell to the container and enumerating the volume’s content from within.

## `Docker requires you to think about storage and choose your own persistence strategy.` This is a departure from VMs and OS package installation where you can safely store data in any directory without worrying about how you’ll manage it later on.

<br />

## **`Developing Local Tools and Apps`**

## Docker makes the most sense when you’re building long-lived services that have dependencies you don’t want to install in each environment. A common example could be a PHP web application running behind an NGINX web server: there are multiple components including a background server that you want to start from a single command.

## Docker adds less value when you’re creating tools for local use such as desktop programs and mobile apps. This kind of software development tends to produce artifacts that either can’t be run in containers or won’t be commonly containerized by users.

## You could still benefit from Docker in these situations by using it to package the toolchain, rather than the final output. As an example, you can create a Docker image that includes Java and the Android Platform Tools to save new developers from having to add these packages to their machines.

## However this tends to end up adding more complexity in disciplines which are driven by IDEs like Android Studio, Visual Studio, and Xcode. Developers are used to installing the IDE and letting it configure their environment. Hence Docker tends to add less value to compiled language workflows than for interpreted languages where the correct interpreter version can be baked into an image.

<br />

## **`Security Is Top Priority`**

## Docker can increase your stack’s security but it takes work to properly harden your installation. A mistake that’s made too often is to assume Docker’s secured out-of-the-box. To put it bluntly: it isn’t.

## We’re not saying the mere presence of Docker is a security risk, as that’s not the case either. Nonetheless it’s important to recognize that Docker carries unique risks and they’ll vary depending on your use of the technology. Just like any other software component, you need to take the time to understand those risks, how they affect your compliance with the security standards that matter to you, and what you should do to address them.

## It’s too easy to hear the “isolated applications” pitch and assume that extends to sandbox-level security. In reality a standard Docker installation runs container processes as root and a container breakout could compromise your host.

## Docker security is a multi-faceted topic that requires you consider the host environment, the Docker daemon, and how you build and maintain your images. Developers have a role to play too by minimizing risky operations in code that runs within containers.

## All this means that Docker may not be a great option for security-critical settings. `Although Docker can provide security protections, you need to have skilled team members and a security-conscious mindset to ensure you’re addressing the new problems it introduces.`

<br />

## **`Your Codebase Is a Monolith`**

## You’ve probably read that containers go hand-in-hand with microservices. This mentality describes the process of carving your system into independent components that can be readily containerized. Once you’ve split your services up, they can be scaled individually and you can replace pieces without affecting the others.

## When your app’s a monolith, you won’t be able to see these benefits. But containerizing a monolithic system as-is can be the wrong approach. A large legacy application tends to acquire reams of dependencies and a long build process that can quickly inflate your Docker image. This results in frustrating wait times during image builds as well as excess storage and bandwidth costs.

## As usual there’s two sides to this coin though: containerizing a monolith is often the first step towards modernizing your stack and breaking it into smaller services. It’s the point at which you split the codebase from the environment it’s become tied to.

## Yet if you’re containerizing with no intention of continuing the refactoring in the future, it might be best to reconsider your motivations. Large container images that include multiple functional components are a good indicator that you’re not meeting container best practices. Over time you may find the approach actually holds you back and becomes part of the problem.

<br />

## **`You’re Trying to Cut Complexity`**

## Trying to cut complexity? Thinking that containerizing will bring a new simplicity to development and deployment? Once again it’s an “it depends” moment but we’d caution against jumping on the Docker bandwagon with simplicity as your main motivation.

## Docker requires a mindset shift and familiarization with new tools and concepts. Will your developers be comfortable with it and how will it impact your hiring processes? These are questions which can be easily overlooked but should be considered early on.

## Although Docker removes many forms of complexity, it tends to resurface in different forms. You’ll need to write, document, maintain, and build your Docker images, either locally on developer machines or as part of a CI pipeline. Developers will need to learn the Docker CLI, the fundamentals of what containers are, and the potential issues to be aware of when preparing applications for containerization.

## If you’re planning to run containers in production, you’ll have further considerations too. How is network traffic going to be routed to the containers? How will the system respond if a container stops unexpectedly?

## Proponents of the “Docker is simple” mentality tend to focus narrowly on the ease with which you can naively start instances of images you already have. It’s true that if you want a new MySQL database on your laptop it’s just a docker run -d mysql:8 away. Yet there’s much more to learn if you’re to successfully use Docker to build and run your own software while meeting best practices and avoiding common pitfalls.

<br />

## **`You’re Not Sure Why You’re Containerizing`**

## Containers are everywhere; you can’t read more than a few articles about software development without coming across them, and supporters are vocal and enthusiastic. This popular appeal can create pressure to adopt as Docker’s a “modern” tool that others have found useful.

## This isn’t a good reason to containerize. You need a more concrete goal, such as `“developers should be able to precisely replicate production locally”` or `“we need to be able to horizontally scale replicas of our services.”` If you’re not feeling a precise use case for Docker, and you’re satisfied with your current workflow, the best option could be to stick with what works. A boring choice it may seem but Docker is no impeccable transforming force and successful adoption isn’t guaranteed.

## Adding Docker to your processes can require significant upfront investment. You might have to refactor your codebase, write and test your Dockerfiles, give developers time to learn, and complete a security assessment. When the resulting benefits are unclear – and you’ve not identified what success will look like – the effort could be a burden that detracts from productive work on your system.

<br />

## **`Conclusion`**

## Even if Docker’s not a great fit for your projects today, you may still be able to glean some benefits by adopting it incrementally. Identify what the challenges in your processes are, then assess if Docker can help in those specific areas. As an example, if developers are spending too much time spinning up staging instances of your API, Dockerizing that part of your stack could resolve the bottleneck even if you’re not able to run containers in production.

## The whole point of containers is being able to package parts of your app as isolated components that operate independently. This doesn’t automatically mean you need to package every component as a container. `Stay objective, look for opportunities to containerize where it makes sense, but be prepared to recognize situations where Docker doesn’t add value to your existing workflow.`


