const toggleButton = document.querySelector("#toggle-button");
const extraInfo = document.querySelector("#extra-info");

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        extraInfo.hidden = !extraInfo.hidden;
    });
}


const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const messageError = document.querySelector("#message-error");


    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Error: Name cannot be empty.";
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Error: Email cannot be empty.";
        }

        if (messageInput.value.trim() === "") {
            messageError.textContent = "Error: Message cannot be empty.";
        }
    });


    nameInput.addEventListener("input", () => {
        if (nameInput.value.trim() !== "") {
            nameError.textContent = "";
        }
    });


    emailInput.addEventListener("input", () => {
        if (emailInput.value.trim() !== "") {
            emailError.textContent = "";
        }
    });


    messageInput.addEventListener("input", () => {
        if (messageInput.value.trim() !== "") {
            messageError.textContent = "";
        }
    });


    const styletextbox = document.querySelector("#name");

const myClassList = [
    "valid-input1",
    "valid-input2",
    "valid-input3"
];

let indexForClass = 0;

styletextbox.addEventListener("input", () => {

    styletextbox.classList.remove(
        "valid-input1",
        "valid-input2",
        "valid-input3"
    );

    styletextbox.classList.add(myClassList[indexForClass]);

    indexForClass = (indexForClass + 1) % 3;
});
}