$(document).ready(function(){
    $.get("https://opentdb.com/api.php?amount=3&category=22&difficulty=easy&type=multiple", function(data1){geography = data1.results;})

    $.get("https://opentdb.com/api.php?amount=3&category=15&difficulty=easy&type=multiple", function(data2){entertainment = data2.results;})

    $.get("https://opentdb.com/api.php?amount=3&category=18&difficulty=easy&type=multiple", function(data3){science = data3.results;})

    // First column
    $("#a1").click(function(){
        $("#a1").html('<div class="questions wrapper"><p>'+geography[0].question+'</p><br/><p>'+geography[0].incorrect_answers[0]+'</p><p>'+geography[0].incorrect_answers[1]+'</p><p>'+geography[0].correct_answer[0]+'</p><p>'+geography[0].incorrect_answers[2]+'</p></div>');
    })

    $("#a2").click(function(){
        $("#a2").html('<div class="questions wrapper"><p>'+ geography[1].question +'</p><br/><p>'+geography[1].correct_answer[0]+'</p><p>'+geography[1].incorrect_answers[0]+'</p><p>'+geography[1].incorrect_answers[1]+'</p><p>'+geography[1].incorrect_answers[2]+'</p></div>')
    })

    $("#a3").click(function(){
        $("#a3").html('<div class="questions wrapper"><p>'+ geography[2].question +'</p><br/><p>'+geography[2].correct_answer[0]+'</p><p>'+geography[2].incorrect_answers[0]+'</p><p>'+geography[2].incorrect_answers[1]+'</p><p>'+geography[2].incorrect_answers[2]+'</p></div>')
    })

    // Second column
    $("#b1").click(function(){
        $("#b1").html('<div class="questions wrapper"><p>'+entertainment[0].question+'</p><br/><p>'+entertainment[0].incorrect_answers[0]+'</p><p>'+entertainment[0].incorrect_answers[1]+'</p><p>'+entertainment[0].correct_answer[0]+'</p><p>'+entertainment[0].incorrect_answers[2]+'</p></div>');
    })

    $("#b2").click(function(){
        $("#b2").html('<div class="questions wrapper"><p>'+entertainment[1].question+'</p><br/><p>'+entertainment[1].incorrect_answers[0]+'</p><p>'+entertainment[1].incorrect_answers[1]+'</p><p>'+entertainment[1].correct_answer[0]+'</p><p>'+entertainment[1].incorrect_answers[2]+'</p></div>');
    })

    $("#b3").click(function(){
        $("#b3").html('<div class="questions wrapper"><p>'+entertainment[2].question+'</p><br/><p>'+entertainment[2].incorrect_answers[0]+'</p><p>'+entertainment[2].incorrect_answers[1]+'</p><p>'+entertainment[2].correct_answer[0]+'</p><p>'+entertainment[2].incorrect_answers[2]+'</p></div>');
    })

    // Third column
    $("#c1").click(function(){
        $("#c1").html('<div class="questions wrapper"><p>'+science[0].question+'</p><br/><p>'+science[0].incorrect_answers[0]+'</p><p>'+science[0].incorrect_answers[1]+'</p><p>'+science[0].correct_answer[0]+'</p><p>'+science[0].incorrect_answers[2]+'</p></div>');
    })

    $("#c2").click(function(){
        $("#c2").html('<div class="questions wrapper"><p>'+science[0].question+'</p><br/><p>'+science[0].incorrect_answers[0]+'</p><p>'+science[0].incorrect_answers[1]+'</p><p>'+science[0].correct_answer[0]+'</p><p>'+science[0].incorrect_answers[2]+'</p></div>');
    })

    $("#c3").click(function(){
        $("#c3").html('<div class="questions wrapper"><p>'+science[0].question+'</p><br/><p>'+science[0].incorrect_answers[0]+'</p><p>'+science[0].incorrect_answers[1]+'</p><p>'+science[0].correct_answer[0]+'</p><p>'+science[0].incorrect_answers[2]+'</p></div>');
    })
});
