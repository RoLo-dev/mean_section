$(document).ready(function(){
    $.get("https://opentdb.com/api.php?amount=3&category=22&difficulty=easy&type=multiple", function(data1){geography = data1.results;})

    $.get("https://opentdb.com/api.php?amount=3&category=15&difficulty=easy&type=multiple", function(data2){entertainment = data2.results;})

    $.get("https://opentdb.com/api.php?amount=3&category=18&difficulty=easy&type=multiple", function(data3){science = data3.results;})

});

const enter = [
    {
        question: entertainment[1].question,
        answers: {
            a: entertainment[1].incorrect_answers[0],
            b: entertainment[1].incorrect_answers[2],
            c: entertainment[1].correct_answer,
            d: entertainment[1].incorrect_answers[1],
        },
        correct_answer: entertainment[1].correct_answer
    },
    {
        question: entertainment[1].question,
        answers: {
            a: entertainment[1].incorrect_answers[0],
            b: entertainment[1].incorrect_answers[2],
            c: entertainment[1].correct_answer,
            d: entertainment[1].incorrect_answers[1],
        },
        correct_answer: entertainment[1].correct_answer
    },
    {
        question: entertainment[1].question,
        answers: {
            a: entertainment[1].correct_answer,
            b: entertainment[1].incorrect_answers[2],
            c: entertainment[1].incorrect_answers[0],
            d: entertainment[1].incorrect_answers[1],
        },
        correct_answer: entertainment[1].correct_answer
    },
]

const sci = [
    {
        question: science[2].question,
        answers: {
            a: science[2].incorrect_answers[0],
            b: science[2].incorrect_answers[2],
            c: science[2].correct_answer,
            d: science[2].incorrect_answers[1],
        },
        correct_answer: science[2].correct_answer
    },
    {
        question: science[2].question,
        answers: {
            a: science[2].correct_answer,
            b: science[2].incorrect_answers[2],
            c: science[2].incorrect_answers[0],
            d: science[2].incorrect_answers[1],
        },
        correct_answer: science[2].correct_answer
    },
    {
        question: science[2].question,
        answers: {
            a: science[2].correct_answer,
            b: science[2].incorrect_answers[2],
            c: science[2].incorrect_answers[0],
            d: science[2].incorrect_answers[1],
        },
        correct_answer: science[2].correct_answer
    },
]

function showQuestions() {
    const geo = [
        {
            question: geography[0].question,
            answers: {
                a: geography[0].incorrect_answers[0],
                b: geography[0].incorrect_answers[1],
                c: geography[0].incorrect_answers[2],
                d: geography[0].correct_answer
            },
            correct_answer: geography[0].correct_answer
        },
        {
            question: geography[1].question,
            answers: {
                a: geography[1].incorrect_answers[0],
                b: geography[1].correct_answer,
                c: geography[1].incorrect_answers[2],
                d: geography[1].incorrect_answers[1],
            },
            correct_answer: geography[1].correct_answer
        },
        {
            question: geography[2].question,
            answers: {
                a: geography[2].incorrect_answers[0],
                b: geography[2].correct_answer,
                c: geography[2].incorrect_answers[2],
                d: geography[2].incorrect_answers[1],
            },
            correct_answer: geography[2].correct_answer
        },
    ]

    for(let i = 0; i < array.length; i++){
        answers = []
        for(letter in geo[i].answers)
    }
}
