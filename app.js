const questions = [{
        'que': "Which of the following is a markup language?",
        'a': "HTML",
        'b': "CSS",
        'c': "JAVASCRIPT",
        'd': "PHP",
        'correct': "a",
    },
    {
        'que': "What year was JavaScript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the obove",
        'correct': "b",
    },
    {
        'que': "What does CSS stands for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason Object Notation",
        'd': "Helicopter Terminals Motorboats Lamborginis",
        'correct': "b",
    },

]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const queBox = document.getElementById('queBox')
const optionInput = document.querySelectorAll('.option')
const loadQuestion  = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    queBox.innerText = `${index + 1}) ${data.que}` 
    optionInput[0].nextElementSibling.innerText = data.a
    optionInput[1].nextElementSibling.innerText = data.b
    optionInput[2].nextElementSibling.innerText = data.c
    optionInput[3].nextElementSibling.innerText = data.d
    
    
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () =>{
    optionInput.forEach(
        (input) => {
            input.checked = false
        }
    )
};

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <div style="text-align:center">
        <h3> Thank you for playing the quiz</h3>
        <h2> ${right} / ${total} are correct</h2>
    </div>    
    `
}

loadQuestion();