const inq = require("inquirer");
const UserSearch = require("./UserSearch.js");
const Log = require("./LogSearch.js");

// Initialize App
runApp();

function runApp(){

	inq.prompt([
		{
			name: "viewType",
			type: "list",
			message: "Are you a user or an Admin?",
			choices: ["USER", "ADMIN"]
		}
	]).then(function(choice){
		if (choice.viewType === "USER"){
			userQuery();
		} else if (choice.viewType === "ADMIN"){
			Log.LogRead();
		}
	});
}

function userQuery(){

	inq.prompt([
			{
				name: "username",
				type: "input",
				message: "What is your name?",			
			},
			{
				name: "location",
				type: "input",
				message: "What is the location?",			
			},
		]).then(function(ans){
			console.log("Thank you for your search.");
			var userSearch = new UserSearch(ans.username, ans.location);
		});
}