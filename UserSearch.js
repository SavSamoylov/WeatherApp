const Weather = require("weather-js");
const Log = require("./LogSearch.js");

module.exports = UserSearch;

function UserSearch(name, location){

	this.name = name;
	this.location = location;
	this.date = new Date().getTime();

	Log.LogSearch(this.name, this.location, this.date);

	//Return Search Results

	Weather.find({search: location, degreeType: 'F'}, function(err, result) {
	  if(err) console.log(err);
	 
	  console.log(JSON.stringify(result, null, 2));
	});
}