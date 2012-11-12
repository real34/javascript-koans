function Muppet(age, hobby) {
  this.age = age;
  this.hobby = hobby;

  function introduceHimself() {
    return "Hello I am " + age + " and I like " + hobby;
  }

  this.answerNanny = function(){
    return "Everything's cool!";
  }
}

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby);
  this.mood = mood;

  this.cook = function() {
    return "Mmmm soup!";
  }

  this.favoriteRecipe = function() {
    var hobby = 'eating';

    return hobby + ' every day for ' + age + ' years';
  }

}

numberOfTimesAsked = 0;
Muppet.prototype.doMeAFavor = function() {
  var responses = ['Sure!', 'OK!', 'Are you kidding?!'];

  return (numberOfTimesAsked in responses)
    ? responses[numberOfTimesAsked++]
    : 'No! I prefer ' + this.hobby;
}

SwedishChef.prototype = new Muppet();

describe("Inheritance", function() {
  beforeEach(function(){
    this.muppet = new Muppet(2, "coding");
    this.swedishChef = new SwedishChef(3, "cooking", "chillin");
  });

  it("should test the developer understands basic inheritance", function() {
    expect(this.swedishChef.cook()).toEqual(FILL_ME_IN);
    expect(this.swedishChef.answerNanny()).toEqual(FILL_ME_IN);
    expect(this.swedishChef.age).toEqual(FILL_ME_IN);
    expect(this.swedishChef.hobby).toEqual(FILL_ME_IN);
    expect(this.swedishChef.mood).toEqual(FILL_ME_IN);

    this.swedishChef.age = 5;
    this.muppet.age = 6;
    this.muppet.mood = 'test';
    expect(this.swedishChef.age).toEqual(FILL_ME_IN);
    expect(this.muppet.age).toEqual(FILL_ME_IN);
    expect(this.swedishChef.mood).toEqual(FILL_ME_IN);
  });

  it("should test the developer also understands scopes", function() {
    expect(this.muppet.introduceHimself).toBe(FILL_ME_IN);

    expect(this.muppet.doMeAFavor()).toBe(FILL_ME_IN);
    expect(this.muppet.doMeAFavor()).toBe(FILL_ME_IN);
    expect(this.swedishChef.doMeAFavor()).toBe(FILL_ME_IN);
    expect(this.swedishChef.doMeAFavor()).toBe(FILL_ME_IN);
    expect(this.muppet.doMeAFavor()).toBe(FILL_ME_IN);

    expect(this.swedishChef.favoriteRecipe()).toBe(FILL_ME_IN);
  });
});