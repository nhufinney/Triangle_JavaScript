var anagram = function(word, sentence) {

    var word = word.split("").sort().join("");
    var sentence = sentence.split(" ");
    var array = [];

    for (var i in sentence){
        var each = sentence[i].split("").sort().join("");
        if (word === each){
            array.push(sentence[i]);
        }
    };

    return array;
};

jQuery(document).ready(function(event){
  $("#anagram").submit(function(event) {
      var word = $("#input").val();
      var sentence = $("#sentence").val();
      var result = anagram(word, sentence);

      $("#your_input").text("Your word is '"+word +"'");
      $("#your_sentence").text("Your sentence is '"+ sentence+ "'");

      var string = result.join("," + " ");
      $("#final").text(string);

      $("#result").show();
      event.preventDefault();
});
});
