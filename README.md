Screengrabber, that'll run on heroku

# Local install

```
#install node.js
git clone https://github.com/latentflip/heroku-screengrabber.git
cd heroku-screengrabber
npm install
node bootstrap.js
```

Then visit localhost:3000/shot.png?url=foo.com.

# Heroku install
`git push heroku` ;)

Based on [webshot](https://github.com/brenden/node-webshot) so view the docs there for how to configure screenshot sizes etc.
