# CatWiki

This is a basic template to get you started with the CatWiki challenge.
It contains a frontend and a backend, with some very basic interaction
between them. Feel free to modify whatever you wish, or to start 
completely from scratch! :smiley_cat:

## Starting the backend

To start up the backend Node.js server, run the following command in your
terminal (note: you'll need to have Node v16.x or above installed):

```
npm start
```

The server will run on port 3001 by default. You can test it by running
something like this:

```
curl localhost:3001/api
{"message":"Hello from CatWiki!"}
```

## Starting the frontend

Open a new tab, and run the following commands in your terminal:

```
cd client
npm start
```

This should open up a new page in your default web browser at `localhost:3000`.
At this point, you should see the placeholder CatWiki app homepage.

## Running frontend tests

From the `client` directory, run the following:

```
npm test
```

This will run the test suite for you.

## Deploying to Heroku

First, make sure you have a Heroku account, and have successfully logged
in to Heroku on the command line via `heroku login`.

You'll need to create a new Heroku app (if you haven't already). You can
do this with the following (replace `${insert-your-app-name-here}` with the
word `catwiki` followed by your actual name, e.g. `catwiki-johnsmith`):

```
heroku app:create ${insert-your-app-name-here}
```

Next we need to add a Git remote for Heroku and commit any changes:

```
heroku git:remote -a ${insert-your-app-name-here}
git add .
git commit -am "Deploy app to Heroku"
```

Finally we can push our code to the Heroku remote, which will automatically
build and run our app for us. 

```
git push heroku master
```

You'll then be able to access your app at 
`http://${insert-your-app-name-here}.herokuapp.com`! :tada:

## Pushing changes to your GitHub repository

```
git remote add origin git@github.com:${your-github-username}/catwiki.git
git push origin master
```
