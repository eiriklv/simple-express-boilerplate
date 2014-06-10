Express 4.x application with the basics
=======================================

#### Built with:
* [node.js](http://www.nodejs.org/)
* [express](http://www.expressjs.com/)
* [gulp](http://www.gulpjs.com/)
* [socket.io](http://www.socket.io/)
* [convict](http://github.com/mozilla/node-convict/)
* [browserify](http://www.browserify.org/)
 * [hbsfy](http://github.com/epeli/node-hbsfy/)
 * [envify](http://github.com/hughsk/envify/)
* [handlebars](http://handlebarsjs.com/)
* [stylus](http://learnboost.github.io/stylus/)
 * [nib](http://visionmedia.github.io/nib/)
* [bootstrap](http://getbootstrap.com/)
* [fontawesome](http://fortawesome.github.io/Font-Awesome/)
* [jquery](http://www.jquery.com/)

### Install dependecies (some might need to use `sudo` for various reasons):
- `npm install -g gulp`
- `npm install`

#### Set environment variables
* `PORT` - Port exposed by this component.
 * example: `3000`
* `DEBUG` - Debug output (* for all)
 * example: `*`
* `NODE_ENV` - Environment ('development', 'production')
 * example: `development`
* `APPSECRET` - Application session secret
 * example: `sOmeCrAzYhAsH894372`
* `CLIENT_API_URL` - Path to the client REST api (relative)
 * example: `/api`

### Run application:
- `gulp`
- navigate your browser to `http://localhost:3000`