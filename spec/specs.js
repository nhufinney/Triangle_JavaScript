describe('anagram', function(){

    it("it returns to false if no match of anagram found, in one word compare", function(){
        expect(anagram("hat", "at")).to.eql([]);
    });

    it("it returns to false if no match of anagram found, in 2 words compare", function(){
        expect(anagram("hat", "in morning")).to.eql([]);
    });

    it("it returns to one match, in 1 word compare", function(){
        expect(anagram("hat", "tah")).to.eql(["tah"]);
    });

    it("it returns to 2 match, in a sentence", function(){
        expect(anagram("hat", "tah ath")).to.eql(["tah", "ath"]);
    });

    it("it returns to 2 match, in a long sentence", function(){
        expect(anagram("hat", "tah ath htis morning I love studying JS")).to.eql(["tah", "ath"]);
    });

    it("it returns to 4 match, in a long sentence", function(){
        expect(anagram("tah", "tah ath htis morning I aht tah love studying JS")).to.eql(["tah", "ath", "aht", "tah"]);
    });
});
