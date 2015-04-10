describe('triangle', function(){

    it("it returns 3 lengthes do not form a triangle", function(){
        expect(triangle(2 , 8, 3)).to.equal("not a triangle");
    });

    it("it returns 3 lengthes form a normal triangle: scalene", function(){
        expect(triangle(5 , 8, 7)).to.equal("a scalene");
    });

    it("it returns 3 lengthes form an isosceles triangle", function(){
            expect(triangle(5 , 8, 5)).to.equal("an isosceles");
    });

    it("it returns 3 lengthes form an equilateral triangle", function(){
            expect(triangle(5 , 5, 5)).to.equal("an equilateral");
    });
});
