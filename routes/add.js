var data = require("../data.json");

exports.addFriend = function(req, res) {    
	
	
  console.log("The project name is: " + name);
  var name = req.query.name;
  var description=req.query.description;
  var newFriend ={
  	name:name,
  	description:description,
  	imageURL:"http://lorempixel.com/500/500/people"
  } 
  data.friends.push(newFriend);
  res.redirect('/');

 }