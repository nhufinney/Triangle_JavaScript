var prime = function(input) {

    var prime = [2];

    for (var i = 3; i<= input; i++){
        prime.push(i);
    };


    for (var a = 0; a <= array.length; a++){
        for (var b = 0; b <= prime.length; b++){
            if (array[a] % prime[b] !== 0){
                var new_prime = array[a];
                prime.push(new_prime);

            }break;
        }
    }

    return prime;
};



jQuery(document).ready(function(event){
  $("#prime").submit(function(event) {
  var input = $("#input").val();
  var result = prime(input);
  result.pop();

  //$("#order").text(order[0]);

  for (var i in result){
    $("#final").append(result[i]+ " , ");
  }

  $("#result").show();
  event.preventDefault();
});
});
