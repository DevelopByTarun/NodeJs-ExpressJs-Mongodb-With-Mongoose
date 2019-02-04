const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const passport = require("passport");
const session = require("express-session");
const FacebookStrategy = require("passport-facebook");
app.use(bodyParser.urlencoded({ extended: false }))
const router = express.Router();
//app.use(app.router);
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session()); 
//app.use(express.static("public"));
// parse application/json
app.use(bodyParser.json());

passport.use(new FacebookStrategy({
    clientID: "",  // AppId
    clientSecret: "",  // AppSecret
    callbackURL: "http://localhost:9876/auth/facebook/callback",
	profileFields:['id','email','name']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("Call Back Call ",accessToken);
	process.nextTick(function() {
	console.log("Profile ",profile);
	passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});	
	var User = require("./userschema");	
	User.findOne({ 'userid' : profile.id }, function(err, user) {
 
        // if there is an error, stop everything and return that
        // ie an error connecting to the database
        if (err)
          return done(err);
 
          // if the user is found, then log them in
          if (user) {
            return done(null, user); // user found, return that user
          } else {
            // if there is no user found with that facebook id, create them
            var newUser = new User();
 
            // set all of the facebook information in our user model
            newUser.userid    = profile.id; // set the users facebook id                 
            newUser.password = profile.familyName; // we will save the token that 
 
            // save our user to the database
            newUser.save(function(err) {
              if (err)
                throw err;
 
              // if successful, return the new user
              return done(null, newUser);
            });
         } 
      });	
		
	}
)
}));

app.get('/auth/facebook',
  passport.authenticate('facebook',{scope:['email']}));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
	console.log("CallBACK CALL>>>>");
    // Successful authentication, redirect home.
	var path = require("path");
	var newpath = path.join(__dirname,"/public/welcome.html");
    res.sendFile(newpath);
	//res.redirect('/');
  });
app.get("/",function(req,res){
	response.send("Hello User ");
})
app.listen(9876,function(){
	console.log("Server Start...");
})