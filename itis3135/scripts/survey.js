function addCourse() {
    const courseWrapper = document.createElement('div');
    courseWrapper.classList.add('course');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Course Title');
    titleInput.classList.add('courseTitle');
    titleInput.required = true;

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', 'Course Description');
    descriptionInput.classList.add('courseDescription');
    descriptionInput.required = true;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteCourseBtn');
    deleteBtn.addEventListener('click', function() {
        courseWrapper.remove();
    });

    courseWrapper.appendChild(titleInput);
    courseWrapper.appendChild(descriptionInput);
    courseWrapper.appendChild(deleteBtn);

    document.getElementById('courses').appendChild(courseWrapper);
}

document.getElementById('addCourseBtn').addEventListener('click', addCourse);

//delete course button
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteCourseBtn')) {
        event.target.parentElement.remove();
    }
});

//loads image
function loadImage() {
    let image = document.getElementById('image').files[0];
    const imageUrl = URL.createObjectURL(image);
    let text = "<img src=\"" + imageUrl + "\" >";
    document.getElementById('loadImage').innerHTML = text;
}

//gets user input to display
function displayUserInformation() {
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const imageCaption = document.getElementById('imageCaption').value;
    const background = document.getElementById('personalBackground').value;
    const professional = document.getElementById('professionalBackground').value;
    const academic = document.getElementById('academicBackground').value;
    const webDev = document.getElementById('webDevelopmentBackground').value;
    const platform = document.getElementById('primaryComputerPlatform').value;
    const funny = document.getElementById('funnyThing').value;
    const anything = document.getElementById('anythingElse').value;

    const courses = [];
    document.querySelectorAll('.course').forEach(course => {
        const title = course.querySelector('.courseTitle').value;
        const description = course.querySelector('.courseDescription').value;
        courses.push({ title, description });
    });

    const introHTML = `
        <h2>${name}'s ${mascot}</h2>
        <div id="loadImage"></div>
        <p>${imageCaption}</p>
        <ul>
            <li><strong>Personal Background:</strong> ${background}</li>
            <li><strong>Professional Background:</strong> ${professional}</li>
            <li><strong>Academic Background:</strong> ${academic}</li>
            <li><strong>Background in Web Development:</strong> ${webDev}</li>
            <li><strong>Primary Computer Platform:</strong> ${platform}</li>
            <li><strong>Courses Currently Taking:</strong>
                <ul>
                    ${courses.map(course => `<li><strong>${course.title}:</strong> ${course.description}</li>`).join('')}
                </ul>
            </li>
            <li><strong>Funny Thing About You:</strong> ${funny}</li>
            <li><strong>Anything Else You Would Like To Add:</strong> ${anything}</li>
        </ul>
    `;

    document.getElementById('userIntro').innerHTML = introHTML;
}

//submission
document.getElementById('byoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    displayUserInformation();
    loadImage();

    //reset button
    const resetFormButton = document.createElement('button');
    resetFormButton.textContent = 'Reset Form';
    resetFormButton.id = 'resetFormButton';
    resetFormButton.addEventListener('click', function() {
        document.getElementById('byoForm').reset();
        document.getElementById('courses').innerHTML = '';
        document.getElementById('loadImage').innerHTML = '';
        document.getElementById('userIntro').innerHTML = '';
        resetFormButton.remove();
    });

    document.getElementById('userIntro').appendChild(resetFormButton);
});
