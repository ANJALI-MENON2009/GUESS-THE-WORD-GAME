player1_name = localStorage.getItem("Player1_name"); 
player2_name = localStorage.getItem("Player2_name"); 
player1_score = 0; 
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : " ;
document.getElementById("player2_name").innerHTML = player2_name + " : " ;

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name ;

function send() 
{
    get_Word = document.getElementById("word").value ;
    word = get_Word.toLowerCase() ;

    charAt1 = word.charAt(1) ;
    
    length = Math.floor(word.length/2) ;
    charAt2 = word.charAt(length) ;

    minus = word.length - 1 ;
    charAt3 = word.charAt(minus) ;

    remove_CharAt1 = word.replace(charAt1, "__") ;
    remove_CharAt2 = remove_CharAt1.replace(charAt2, "__") ;
    remove_CharAt3 = remove_CharAt2.replace(charAt3, "__") ;
    console.log(remove_CharAt3) ;

    question_word =  "<br> <br> Q." + remove_CharAt3 ;
    input_box = "<br> <br> <input type='text' id='answer_input'>" ;
    button = " <br> <br> <br> <button class='btn btn-info' onclick='check()'> Check </button> <br> <br>" ; 
    row = question_word + input_box + button ;

    document.getElementById("output").innerHTML = row ;
    document.getElementById("word").value = "" ;
}

question_turn = "player1" ;
answer_turn = "player2" ;

function check() {
    question_word = document.getElementById("answer_input").value ; 
    answer = question_word.toLowerCase() ;

    if(answer==word) {
        if(answer_turn=="player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score ;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score ;
        }

    }
    if(question_turn=="player1") {
        question_turn ="player2" ;
        document.getElementById("player_question").innerHTML = "Question turn : " + player2_name ; 
    }
    else {
        question_turn = "player1" ;
        document.getElementById("player_question").innerHTML = "Question turn : " + player1_name ;
    }

    if(answer_turn=="player1") {
        answer_turn = "player2" ;
        document.getElementById("player_answer").innerHTML = "Answer turn : " + player2_name ;
    }
    else {
        answer_turn = "player1" ;
        document.getElementById("player_answer").innerHTML = "Answer turn : " + player1_name ;
    }

    document.getElementById("output").innerHTML = "" ;
}


