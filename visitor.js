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
    this.index = 0;
    this.fullName = fullName;
    this.age = age;
    this.dateOfVisit = dateOfVisit;
    this.timeOfVists = timeOfVists;
    this.comments = comments;
    this.nameOfPersonWhoAssistedTheVisistor = nameOfPersonWhoAssistedTheVisistor;
  }

  save() {
    let fs = require("fs");
    ++this.index;
    let visitorObj = {
      name: this.name,
      Age: this.age,
      "Data of Visit": this.dateOfVisit,
      "Time of Visit": this.timeOfVists,
      Comments: this.comments,
      "Name of person who assisted the visitor": this
        .nameOfPersonWhoAssistedTheVisistor
    };

    let visitorData = JSON.stringify(visitorObj);
    fs.writeFileSync(`visitor_${this.index}.json`, visitorData);

    console.log("saved");
  }
}

let visitor1 = new Visitor(
  "halesasdr",
  200,
  "12-1-2312",
  "12:12",
  "Hurrarne",
  "jh"
);
visitor1.save();
