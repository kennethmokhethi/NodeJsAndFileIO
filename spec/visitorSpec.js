let Visitor = require("../src/visitor");

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
    expect(alice.save()).toBe(`visitor_alice_kellu.json`);
  });
});
