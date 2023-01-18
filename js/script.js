let botStatement = document.getElementById("botStatement");
let userInput = document.getElementById("user-Input");
let counter = 0;

function test() {
    if(counter == 0 && isNaN(userInput.value)){
        counter++;
        firstStatement();
    } else if (counter > 0) {
        switch(counter) {
            case 1:
                secondStatement();
                break;
            case 2:
                thirdStatement();
                break;
            case 3:
                fourthStatement();
                break;
            case 4:
                fifthStatement();
                break;
        }
    }
    else {
        userInput.value = "";
        botStatement.innerHTML = "Please try again.. What is your name?";
    }
}

function firstStatement() {
    if(userInput.value != null || userInput.value != undefined|| isNaN(userInput)) {
        userInput.value = ""
        botStatement.innerHTML = `Hi ${userInput.value}. I'm Webot. How old are you?`;
    } else {
        counter--;
    };
}

function secondStatement() {
    if(userInput.value < 18) {
        botStatement.innerHTML = `${userInput.value}? You still a kids. What is your hobby?`;
        userInput.value = "";
        counter++;
    } else if(userInput.value < 30) {
        botStatement.innerHTML = `${userInput.value}? You still young. What is your hobby?`;
        userInput.value = "";
        counter++;
    } else if(userInput.value < 50) {
        botStatement.innerHTML = `${userInput.value}? You getting old. What is your hobby?`;
        userInput.value = "";
        counter++;
    } else {
        console.log(counter);
    }
}

function thirdStatement() {
    if(userInput.value != null || userInput.value != undefined || isNaN(userInput)) {
        userInput.value = "";
        botStatement.innerHTML = `Interesting. Do you want to repeat again. type y or n`;
        counter++;
    }
}

function fourthStatement() {
    if(userInput.value == "y") {
        location.reload();
    } else if(userInput.value == "n") {
        botStatement.innerHTML = "bye";
    }
}