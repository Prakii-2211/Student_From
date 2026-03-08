console.log("Hellooo");

function saveStudent() {
    let fname = document.getElementById("name");
    let age = document.getElementById("age");
    let course = document.getElementById("course");
    let gender = document.querySelector("input[name='gender']:checked");
    let email = document.getElementById("mail");

    let studentDetails = document.querySelector("#studentsData tbody");
    let userdetails = document.querySelectorAll("#userform tbody td")
    userdetails.forEach(function (userdetail) {
        let element = userdetail.querySelector("input, select");
        if (element) {
            if (element.type === "text") { 
                fname = element.value;
            }
            else if (element.type === "number") {
                age = element.value;
            }
            else if (element.type === "email") {
                email = element.value;
            }
            else if (element.type === "radio") {
                gender =  element.value;
            }
            else if (element.tagName === "SELECT") {
                course = element.value;
            }
        }
        else {
            userdetail.innerText.Trim();
        }
    });
    if (fname.value === "" || age.value === "" || email.value === "") {
        alert("Fill the Fields");
        return;
    }
    let rowData = document.createElement("tr");
    rowData.innerHTML = `<td>${fname}</td>
    <td>${age}</td>
    <td>${gender}</td>
    <td>${course}</td>
    <td>${email}</td> 
    <td><button class="delete-btn" onclick = 'deleteRow(event)'>Delete</button></td>`;
    studentDetails.appendChild(rowData);

}

function deleteRow(event) {
    event.target.parentElement.parentElement.remove();
}