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
    this.index = 0; ///Start of the index
    do {
      this.index++;
    } while (fs.existsSync(`visitor_${this.index}.json`)); ///If theres an existing file,increment the number by 1

    fs.writeFile(`visitor_${this.index}.json`, jsonArray, function(err) {
      if (err) {
        console.log("File could not be created"); ///If the could not be created,this message will be executed
      }
      console.log("Data saved successfully"); ///This will be executed if file was successfuly created
    });

    return `visitor_${this.index}.json`;
  }
}

function load(index) {
  fs.readFile(`visitor_${index}.json`, "utf8", function(err, data) {
    if (err) {
      console.log("File could not be found");
    }
    return data;
  });
}

// let visitor1 = new Visitor(
//   "halesasdr",
//   200,
//   "12-1-2312",
//   "12:12",
//   "Hurrarne",
//   "jh"
// );
// visitor1.save();
// console.log(load(1));

(module.exports = Visitor), load;

// let bob = new Visitor("bob Kellu", 200, "20-06-2019", "09:12", "None", "Gugu");
// // console.log(alice.fullName);
// bob.save();
// console.log(load(1));
