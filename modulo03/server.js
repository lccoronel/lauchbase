const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static("public"));
server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get('/', function(req, res) {
  const about = {
    avatar_url: 'https://avatars2.githubusercontent.com/u/54275445?s=460&u=ea9d639a1b02421e9ece251e5d5d319a651d43ba&v=4',
    name: "Lucas Coronel",
    role: 'Dev Frontend',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fuga? Possimus unde ullam alias dicta praesentium aperiam ducimus provident eum iste enim, facere esse tenetur voluptatem repellat beatae? Cum, architecto.',
    links: [
      { name: "Github", url: "https://github.com/lccoronel" },
      { name: "Twittter", url: "https://twitter.com/lcoronel07" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/lucas-coronel-08b582188/" }
    ]
  }

  return res.render("about", { about });
})

server.get('/portfolio', function(req, res) {
  return res.render("portfolio", { items: videos });
})

server.listen(5000, function() {
  console.log("Server started on port 5000");
});