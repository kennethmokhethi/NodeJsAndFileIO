let Visitor = require("../src/visitor");
let load = require("../src/visitor");

describe("Check the class was created", () => {
  let alice;
  beforeAll(function() {
    alice = new Visitor(
      "Alice Kellu",
      200,
      "11-06-2019",
      "12:12",
      "None",
      "Andile"
    );
  });

  it("Show display the first name", () => {
    expect(alice.save()).toBe(`visitor_1.json`);
  });

  // it("Check if the function load is called", () => {
  //   // let bob = new Visitor(
  //   //   "bob Kellu",
  //   //   200,
  //   //   "20-06-2019",
  //   //   "09:12",
  //   //   "None",
  //   //   "Gugu"
  //   // );
  //   // load();
  //   expect(load(1)).toBe({
  //     fullName: "Alice Kellu",
  //     age: 200,
  //     dateOfVisit: "20-06-2019",
  //     timeOfVists: "09:12",
  //     comments: "None",
  //     nameOfPersonWhoAssistedTheVisistor: "Gugu"
  //   });
  // });
});
