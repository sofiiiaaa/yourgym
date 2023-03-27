# My React Application
This is a simple React application that you can view in several ways:

GitHub repository: [Github](https://github.com/sofiiiaaa/yourgym)
GitHub Pages: [View deployment](https://sofiiiaaa.github.io/yourgym/courses)
Docker image: `ghcr.io/sofiiiaaa/yourgym:master`

## How to View the Application
### GitHub Repository
To view the application on GitHub, simply visit the repository page. You can browse the source code, view the commit history, and even make contributions by submitting pull requests.

### GitHub Pages
To view the application on GitHub Pages, visit https://sofiiiaaa.github.io/yourgym. You can interact with the application just like any other web page.

### Docker Image
To view the application using Docker, first make sure you have Docker installed on your machine. Then, you can pull the image from Docker Hub:

```sh
docker pull ghcr.io/sofiiiaaa/yourgym:master
```

Once you have the image, you can run it:

```sh
docker run -p 3000:3000 ghcr.io/sofiiiaaa/yourgym:master
```

Then, open your web browser and go to http://localhost:3000 to view the application.