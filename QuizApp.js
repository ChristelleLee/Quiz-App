var question = ["When is my date of birth?","What is my favorite colour?","What is my favourite subject?","Which pet do I prefer?"];
var option = [{
    "correct": "5th August 2010",
    "wrong1": "8th August 2010",
    "wrong2": "16th August 2010",
    "wrong3": "31 August 2010"

}]
var select = "";

function select(a){
    for (var i = 0; i < 4; i++){
        if (a == option[i].correct); 
    }
};



for (var i = 0; i < question.length; i++){
    $(".question").html(question[i]);

}