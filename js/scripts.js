var triangle = function(side_a, side_b, side_c) {

    //check a combination of 3 lengths to form a triangle
    var result ="";


    if ((side_a + side_b > side_c) && (side_a + side_c > side_b) && (side_b + side_c > side_a)){
        if ((side_a === side_b) || (side_a === side_c) || (side_b === side_c)){
            if ((side_a === side_b) && (side_b === side_c)){
                result = "equilateral";
            }
            else {
                result = "isosceles";
            }} else {
        result = "scalene";
    }} else { result = "not triangle"}

    return result;
};
