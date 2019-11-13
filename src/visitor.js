let fs = require("fs");

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
    this.index = 0; ///Start of the index
    do {
      this.index++;
    } while (fs.existsSync(`visitor_${this.fullName}_.json`)); ///If theres an existing file,increment the number by 1

    let lowerCaseName = this.fullName.toLowerCase();
    fs.writeFile(`visitor_${lowerCaseName}_.json`, jsonArray, function(err) {
      if (err) {
        console.log("File could not be created"); ///If the could not be created,this message will be executed
      }
      console.log("Data saved successfully"); ///This will be executed if file was successfuly created
    });
  }
}
GDGDGDGSDGSD;
function load(fullName) {
  let lowerCaseName = fullName.toLowerCase();
  fs.readFile(`visitor_${lowerCaseName}_.json`, "utf8", function(err, data) {
    if (err) {
      console.log("File could not be found");
    }
    console.log(data);
  });
}

let alice = new Visitor("ALICE", 200, "12-1-2312", "12:12", "None", "Andile");

alice.save();
// console.log(load("HELLO"));
