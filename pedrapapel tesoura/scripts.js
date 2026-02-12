const optionImage = document.querySelectorAll('.option-image')
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const computerResult = document.querySelector('.computer-result img')
const userResult = document.querySelector('.user-result img')

const computerSrcImages = ['img/pedra.png', 'img/papel.png', 'img/tesoura.png']

const winner = {
    RR: "Empate",
    RP: "Computador ",
    RS: "Você ",
    PP: "Empate",
    PR: "Você ",
    PS: "Computador ",
    SS: "Empate",
    SR: "Computador ",
    SP: "Você ",
}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget;
    const userIndex = Array.from(optionImage).indexOf(clickedImage)

    
    container.classList.add("start");
    resultText.textContent = "...";

      userResult.src = computerResult.src = 'img/pedra.png';


    setTimeout(() => {
        container.classList.remove("start")

        userResult.src = computerSrcImages[userIndex]

             const randomNumber = Math.floor(Math.random() * computerSrcImages.length)
             computerResult.src = computerSrcImages[randomNumber]

             const userValue = ['R', 'P', 'S'][userIndex]
             const computerValue = ['R', 'P', 'S'][randomNumber]
             const userComputerResult = userValue + computerValue
             const finalResult = winner [userComputerResult]

        resultText.textContent = userValue === computerValue ? 'Empate' : finalResult + 'Ganhou';
    }, 2000); 
} 
optionImage.forEach(img => {
    img.addEventListener("click", handleOptionClick);
});