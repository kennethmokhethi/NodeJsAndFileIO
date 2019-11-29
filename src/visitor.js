let fs = require("fs");
//
class Visitor {
  ///Constructor for initialising the values
  constructor(
    fullName,
    age,
    dateOfVisit,
    timeOfVists,
    comments,
    nameOfPersonWhoAssistedTheVisistor
  ) {
    this.index;
    this.fullName = fullName;
    this.age = age;
    this.dateOfVisit = dateOfVisit;
    this.timeOfVists = timeOfVists;
    this.comments = comments;
    this.nameOfPersonWhoAssistedTheVisistor = nameOfPersonWhoAssistedTheVisistor;
  }

  ///Saving the data to the files
  save() {
    let jsonArray = JSON.stringify(this, null, 4);

    let lowerCaseName = this.fullName.replace(" ", "_"); ///Replacing the space with an underscore
    lowerCaseName = lowerCaseName.toLowerCase(); ///Changing the name to lowercase

    fs.writeFile(`visitor_${lowerCaseName}_.json`, jsonArray, function(err) {
      if (err) {
        console.log("File could not be created"); ///If the could not be created,this message will be executed
      }
      console.log(`Data saved successfully for ${lowerCaseName}`); ///This will be executed if file was successfuly created
    });

    return `visitor_${lowerCaseName}.json`;
  }
}

function load(fullName) {
  let lowerCaseName = fullName.replace(" ", "_");
  lowerCaseName = lowerCaseName.toLowerCase();
  fs.readFile(`visitor_${lowerCaseName}_.json`, "utf8", function(err, data) {
    if (err) {
      console.log("File could not be found");
    }
    console.log(data);
  });
}

module.exports = Visitor;
