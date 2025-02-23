document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageDiv = document.getElementById("message");
    const userList = document.getElementById("userList");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        if (name === "" || email === "") {
            messageDiv.textContent = "Por favor, preencha todos os campos.";
            messageDiv.style.color = "red";
            } else {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${name} - ${email} 
            <button class="edit">Editar</button> 
            <button class="delete">Excluir</button>`;
            userList.appendChild(listItem);
            messageDiv.textContent = "Usuário cadastrado com sucesso!";
            messageDiv.style.color = "green";
            form.reset();
        }
    });

userList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    } else if (event.target.classList.contains("edit")) {
    const listItem = event.target.parentElement;
    const userData = listItem.textContent.split(" - ");
    nameInput.value = userData[0].trim();
    emailInput.value = userData[1].split(" ")[0].trim();
    listItem.remove();
    }
    });
   })
