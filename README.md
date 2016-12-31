# TodoMVC++ : Taking TodoMVC To Production

TodoMVC++ is the companion application for Zero to Production with Node.js.
To learn more about how this application works, check out the video course on 
[Frontend Masters](https://www.frontendmasters.com).

This application is based on [TodoMVC](http://todomvc.com/), and specifically
on a [Vue.js implementation](http://todomvc.com/examples/vue/) by Evan You.

## Running Locally

### Installing Node.js and npm

This application has been tested on Node.js 6 and npm 3 - these packages should
be available for download [here](https://nodejs.org/en/) - choose the "Current"
version for download.

### Installing Node.js modules

Once you have Node and npm installed and this repository downloaded, you'll need
to install the application's dependencies. Do this with:

    npm install

For development you'll probably want to install the following modules globally:

    npm install -g grunt-cli sequelize-cli

### Setting up the database

To run this application locally, you'll require a Postgres database. On a Mac,
the easiest path to installing Postgres is [Homebrew](http://brew.sh/). Once
installed, grab Postgres with:

    brew update
    brew install postgres

If Postgres is installed using the method above, you should now have a few 
Postgres administrative commands on your system path. Begin by firing up another
Terminal tab and starting the database:

    postgres -D /usr/local/var/postgres

Next, create the development and test databases:

    createdb todos
    createdb todos-test

If Postgres is **not** installed locally, you can setup a free instance as follows:
- visit https://elephantsql.com
- login and setup a *free* tiny turtle instance
- goto "Details" and copy the url. It should look something like this [postgres://abcdefg:icRAC...](https://customer.elephantsql.com/instance)
- in the project, copy `config/test.js` to `config/user.js`
- set `config.databaseUrl` to your copied postgres url
- don't forget to run `sequelize db:migrate` 

    PJ Notes
    Error: unable to resolve sequelize  - I had to google and then found 'npm install --save sequelize' worked adn allowed me to run sequalize db:migrate
    Error: Now I have to install pg manually so I'm about to run npm install pg - which seemed to work **and is allowing me to run the database migrations

Apply the database migrations:

    sequelize db:migrate 
    
Copy over static assets:

    grunt collect_static

    PJ Notes
    
    grunt hasn't been installed locally yet

    ran 'npm install grunt'

    then run

    grunt collect_static- that still didn't work
     - npm install grunt-contrib-sass
     - npm install grunt-contrib-watch
     - grunt collect_static - still didn't work, so I'm manually installing the missing packages
     - npm install grunt-sass
     - npm install grunt-browserify
     - npm install uglify
     - npm install grunt-nodemon
     - npm install grunt-concurrent
     - npm install grunt-shell


    removed the browerify-shim from the transform array in the package.json

    ran grunt collect_static - cannot find the vue module
    ran npm install vue
    ran grunt collect_static - cannot find the director module
    ran npm install director
    ran grunt collect_static - cannot find the jquery module
    ran npm install jquery

    ran grunt collect_static - public/app.js created

    However Uglification failed

    Since they're just warnings and no errors - I'll try and run grunt

### Running the application

To run the application in development mode:

    grunt

-------------------------------------------------------------------------------------------------
    PJ Notes
    When running grunt - Error: Cannot find module 'express'
    Ran npm install express
    When running grunt - Error: Cannot find module 'body-parser'
    Ran npm install body-parser
    When running grunt - Error: Cannot find module 'morgan'
    Ran npm install morgan
    When running grunt - Error: Cannot find module 'socket.io'
    Ran npm install socket.io

    Ran grunt for a final time and got the express server listening on port 3000
-------------------------------------------------------------------------------------------------

Couldn't find module ejs
Ran npm install ejs

Ran grunt again and opened http://localhost:3000/ and the app loaded

-----PJ Notes--------------------------------------------------------------------------------------------------------------

To run the application simulating production settings:

    NODE_ENV=production
    grunt collect_static
    npm start

## License

MIT
    
