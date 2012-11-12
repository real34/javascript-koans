describe("About Objects (obfuscated)", function () {

  describe("Properties", function () {
    var meglomaniac;

    beforeEach(function () {
       meglomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should test the developer understands JS properties", function () {
      expect(meglomaniac.mastermind).toBe(FILL_ME_IN);
      expect(meglomaniac.henchwoman).toBe(FILL_ME_IN);
      expect(meglomaniac.henchWoman).toBe(FILL_ME_IN);
    });
  });


  it("should test the developer understands methods", function () {
    var meglomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    var battleCry = meglomaniac.battleCry(4);
    expect(FILL_ME_IN).toMatch(battleCry);
  });

  it("should test the developer understands the 'in' keyword", function () {
    var meglomaniac = {
      mastermind: "The Monarch",
      henchwoman: "Dr Girlfriend",
      theBomb: true
    };

    var hasBomb = "theBomb" in meglomaniac;
    var hasDetonator = "theDetonator" in meglomaniac;

    expect(hasBomb).toBe(FILL_ME_IN);
    expect(hasDetonator).toBe(FILL_ME_IN);
  });

  it("should test the developer understand properties manipulation", function () {
    var meglomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in meglomaniac).toBe(FILL_ME_IN);

    meglomaniac.secretary = "Agent Smith";
    expect("secretary" in meglomaniac).toBe(FILL_ME_IN);

    delete meglomaniac.henchman;
    expect("henchman" in meglomaniac).toBe(FILL_ME_IN);
  });

  it("should test the developer understand prototypes", function () {
      function Circle(radius)
      {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";

      expect(simpleCircle.colour).toBe(FILL_ME_IN);
      expect(colouredCircle.colour).toBe(FILL_ME_IN);

      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };

      expect(simpleCircle.describe()).toBe(FILL_ME_IN);
      expect(colouredCircle.describe()).toBe(FILL_ME_IN);
  });
});
