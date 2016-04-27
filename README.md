# [Mirror Conf]

## Development

Run the setup to get started:

```bash
./bin/setup
```

Start the server with:

```bash
./bin/server
```

## Deploy

You need the git remote `origin` to point to the github repo you want to deploy to. If you don't have this yet, run:

```bash
git remote add origin git@github.com:subvisual/2016.mirrorconf.com
```

You should then be able to deploy the site using:

```bash
./bin/deploy
```

## Dev Stack

This is built on top of [middleman](https://middlemanapp.com/)

Here's some of the other things we are using:

* [Slim](http://slim-lang.com/) - The template engine
* [Sass](http://sass-lang.com/) - For CSS preprocessing (using the Scss syntax)
* [Babel](https://babeljs.io/) - A transpiler for ES6
* [Autoprefixer](https://github.com/middleman/middleman-autoprefixer) -
Autoprefix CSS
* [SVG Optimizer](https://github.com/svg/svgo) - An SVG optimizer
