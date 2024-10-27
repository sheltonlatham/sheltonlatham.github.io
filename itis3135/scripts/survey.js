function displayIntroPage() {
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const imageCaption = document.getElementById("imageCaption").value;
    const personalBackground = document.getElementById("personalBackground").value;
    const professionalBackground = document.getElementById("professionalBackground").value;
    const academicBackground = document.getElementById("academicBackground").value;
    const webDevBackground = document.getElementById("webDevBackground").value;
    const primaryPlatform = document.getElementById("primaryPlatform").value;
    const funnyThing = document.getElementById("funnyThing").value;
    const anythingElse = document.getElementById("anythingElse").value;

    let courses = "";
    document.querySelectorAll(".courseField").forEach(course => courses += `<li>${course.value}</li>`);

    const introContent = `
        <h2>${name}'s Introduction Page</h2>
        <p><strong>Mascot:</strong> ${mascot}</p>
        <img src="${URL.createObjectURL(document.getElementById("image").files[0])}" alt="${imageCaption}">
        <p>${imageCaption}</p>
        <h3>Backgrounds</h3>
        <p><strong>Personal:</strong> ${personalBackground}</p>
        <p><strong>Professional:</strong> ${professionalBackground}</p>
        <p><strong>Academic:</strong> ${academicBackground}</p>
        <p><strong>Web Development:</strong> ${webDevBackground}</p>
        <p><strong>Primary Platform:</strong> ${primaryPlatform}</p>
        <h3>Courses</h3>
        <ul>${courses}</ul>
        <p><strong>Funny Thing:</strong> ${funnyThing}</p>
        <p><strong>Anything Else:</strong> ${anythingElse}</p>
        <button onclick="resetForm()">Reset</button>
    `;

    document.getElementById("introForm").innerHTML = introContent;
}

document.getElementById("introForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    if (document.getElementById("agree").checked) {
        displayIntroPage(); 
    } else {
        alert("Please agree to the terms before submitting.");
    }
});

function addCourseField() {
    const coursesContainer = document.getElementById("coursesContainer");
    const newField = document.createElement("div");
    newField.className = "courseEntry";

    const courseInput = document.createElement("input");
    courseInput.type = "text";
    courseInput.placeholder = "Enter course";
    courseInput.className = "courseField";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => coursesContainer.removeChild(newField);

    newField.appendChild(courseInput);
    newField.appendChild(deleteButton);
    coursesContainer.appendChild(newField);
}

function resetForm() {
    document.getElementById("introForm").reset();
    document.getElementById("coursesContainer").innerHTML = `
        <label>Courses currently taking:</label>
        <button type="button" onclick="addCourseField()">Add Course</button>
    `;
}

