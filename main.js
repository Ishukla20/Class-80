name_of_the_student_array = []
var display_student_array=[]
function submit(){
    var display_student_array = []
for (var j=1; j<=4; j++){
    var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
    name_of_the_student_array.push(name_of_the_student)
    console.log(name_of_the_student_array);
}
//    var name_1 = document.getElementById("name_of_the_student_1").ariaValueMax;
//    var name_2 = document.getElementById("name_of_the_student_2").ariaValueMax;
//    var name_3 = document.getElementById("name_of_the_student_3").ariaValueMax;
//    var name_4 = document.getElementById("name_of_the_student_4").ariaValueMax;
//
//  name_of_the_student_array.push(name_1);
//  name_of_the_student_array.push(name_2);
//  name_of_the_student_array.push(name_3);
//  name_of_the_student_array.push(name_4);
var lenght_of_the_name_of_student_array = name_of_the_student_array.lenght;
for (var k=0; k<lenght_of_the_name_of_student_array;k++){
    display_student_array.push("<h4> NAME-"+name_of_the_student_array [k]+"</h4>")
}
    document.getElementById("display_name_with_commas").innerHTML= display_student_array;
    var remove_commas = display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas
//  document.getElementById("display_name").innerHTML = name_of_the_student_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
    var display_student_array_sorting=[];
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var lenght_of_the_name_of_student_array=name_of_the_student_array.lenght;
    for (var k=0; k<lenght_of_the_name_of_student_array;k++){
        display_student_array_sorting.push("<h4> NAME-"+name_of_the_student_array[k]+"</h4>");
    }
    var remove_commas = display_student_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}