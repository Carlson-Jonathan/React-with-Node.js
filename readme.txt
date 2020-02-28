Setup:
  1.) Run "npm install" in both the main and client (React) folders.
  2.) Run "npm run build" from the client folder.
  3.) Take "app.use(express.static('client/build'));" out of the "if" statement if it is there (server.js).
  4.) In the .replit file, make sure it shows "run = "node server.js" ".

Heroku link: 
  https://jcc-react-node-practice.herokuapp.com/
