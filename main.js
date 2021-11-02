 //essential keywords
  //describe- "let me describe __ to you"
     //it - "let me tell you about__"
         //epect- "here's what I expect"
  //toBe is a matcher
  //example of a conceptual excersice
  //essential keywords
//describe- "let me describe __ to you"
   //it - "let me tell you about__"
       //epect- "here's what I expect"
//matcher
//toBe is a matcher
//toBe/ not.toBe
//toBeCloseTo
//toBeDefined
//toBeFalsey/toBeTruthy
//toBeGreaterThan/toBeLessThan
//toContain
//toEqual
//jasmine.any()   -- to check the type

//example of a conceptual excersice

var earth = {
    isRound: true,
    numberFromSun: 3
  }
  
  describe("Earth", function() {
    it("is round", function() {
      expect(earth.isRound).toBe(true)
    });
    it("is the third planed from the sun", function() {
      expect(earth.numberFromSun).toBe(3)
    });
  });
  describe("Jasmine Matchers", function() {
    it("allows for === and deep equality", function() {
      expect(1+1).toBe(2);
      expect([1,2,3]).toEqual([1,2,3]);
    });
    it("allows for easy precision checking", function() {
      expect(3.1415).toBeCloseTo(3.14,2);
    });
    it("allows for easy truthy / falsey checking", function() {
      expect(0).toBeFalsy();
      expect([]).toBeTruthy();
    });
    it("allows for easy type checking", function() {
      expect([]).toEqual(jasmine.any(Array));
      expect(function(){}).toEqual(jasmine.any(Function));
    });
    it("allows for checking contents of an object", function() {
      expect([1,2,3]).toContain(1);
      expect({name:'Elie', job:'Instructor'}).toEqual(jasmine.objectContaining({name:'Elie'}));
    });
  });
  
  //better tests with hooks
  //wrong version
  describe("#push", function() {
    it("adds elements to an array", function() {
      var arr = [1, 3, 5];
      arr.push(7);
      expect(arr).toEqual([1,3,5,7]);
      
    });
    it("returns the new length of an array", function() {
      var arr = [1, 3, 5];
      expect(arr.push(7)).toBe(4);
      
    });
    it("adds anything into the array", function() {
      var arr = [1, 3, 5];
      expect(arr.push({})).toBe(4);
      
    });
  });
  //instead of repeating ourselves we use BeforeEach
  
  describe("Arrays", function() {
    var arr; //we only reffer to arr once
    beforeEach(function() { // used before each "it callback"
      arr = [1, 3, 5]
    });
    it("adds elements to an array", function(){
      arr.push(7);
      expect(arr).toEqual([1,3,5,7]);
    });
  
    it("returns the new length of the array", function(){
      expect(arr.push(7)).toBe(4);
    });
  
    it("adds anything into the array", function(){
      expect(arr.push({})).toBe(4);
    });
  });
   
  //aftereach run after each "it" callback- useful for teardown
  describe("Counting", function(){
    var count = 0;
    
    beforeEach(function(){
      count++;
    });
    
    afterEach(function(){ //this means count resets to 0 after each test, makes sure data remains same for each test
      count = 0;
    });
    
    it("has a counter that increments", function(){
      expect(count).toBe(1);
    });
  
    it("gets reset", function(){
      expect(count).toBe(1);
    });
  });
  // pending specs
  describe("Pending specs", function(){
  
    xit("can start with an xit", function(){
      expect(true).toBe(true);
    });
  
    it("is a pending test if there is no callback function");
  
    it("is pending if the pending function is invoked inside the callback", function(){
      expect(2).toBe(2);
      pending();
    });
  
  });
