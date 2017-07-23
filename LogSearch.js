const fs = require("fs");

module.exports = {LogSearch, LogRead};


function LogSearch(name, location, date){

	var newLog = {
		name: name,
		location: location,
		date: date,
	}

	//Append to logger.txt file
		fs.appendFile("logger.json", JSON.stringify(newLog)+"|", "utf8", function(err){
			if (err) throw err;
			console.log("Data has been saved!")
		});
	
}

//Read logger.txt file
function LogRead(){
		fs.readFile("logger.json", "utf8", function(err, data){
			if (err) throw err;

			var dataArr = [];

			var dataSplit = data.split("|");

			for (var i = 0; i < dataSplit.length - 1; i++) {

				var parsedData = JSON.parse(dataSplit[i]);

				dataArr.push({
					name: parsedData.name,
					location: parsedData.location,
					date: parsedData.date
				});
			}

console.log(dataArr);			

		})
	}

