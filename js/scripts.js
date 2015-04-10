var triangle = function(side_a, side_b, side_c) {

    //check a combination of 3 lengths to form a triangle
    var result ="";


    if ((side_a + side_b > side_c) && (side_a + side_c > side_b) && (side_b + side_c > side_a)){
        if ((side_a === side_b) || (side_a === side_c) || (side_b === side_c)){
            if ((side_a === side_b) && (side_b === side_c)){
                result = "an equilateral";
            }
            else {
                result = "an isosceles";
            }} else {
        result = "a scalene";
    }} else { result = "not a triangle"}

    return result;
};

$(document).ready(function() {
    $("form#triangle").submit(function(event) {
        var input1 = parseInt($('input#input1').val());
        var input2 = parseInt($('input#input2').val());
        var input3 = parseInt($('input#input3').val());

        var result = triangle(input1, input2, input3);


        $("#result").text("It is "+result);
        

        $("#result").show();

        event.preventDefault();
    });
});
