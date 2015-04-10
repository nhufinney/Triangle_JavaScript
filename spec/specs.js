describe('triangle', function(){

    it("it returns 3 lengthes do not form a triangle", function(){
        expect(triangle(2 , 8, 3)).to.equal("not triangle");
    });

    it("it returns 3 lengthes form a normal triangle: scalene", function(){
        expect(triangle(5 , 8, 7)).to.equal("scalene");
    });

    it("it returns 3 lengthes form an isosceles triangle", function(){
            expect(triangle(5 , 8, 5)).to.equal("isosceles");
        });
});
