const form = document.querySelector('.feedback-form');

const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? {email : '',message : ''};

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

function onInput(evt) {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onSubmit(evt) {
    evt.preventDefault();
    const { email: userEmail, message: userMessage } = evt.target.elements;
    if (!userEmail.value.trim() || !userMessage.value.trim())
        alert('Fill please all fields');
    else {   
        formData = {
            email: userEmail.value.trim(),
            message: userMessage.value.trim()
        };  
        console.log(formData);
        form.reset();   
        localStorage.removeItem(LOCAL_KEY);   
     
    }
}


  

