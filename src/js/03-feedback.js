import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
// const formData = {};


formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

// formEl.addEventListener('input', event => {
//   // console.log(event.target.name, event.target.value);
//   formData[event.target.name] = event.target.value;
//   console.log(formData);
// })


OutputFormData()

function onFormInput() { //в 1м варианте ф-я принимает event
  // formData[event.target.name] = event.target.value;
  // console.log(formData[event.target.name]);

  const formData = {
  email: formEl.email.value,
  message: formEl.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function onFormSubmit(event) {
  event.preventDefault();
 
  if (!formEl.email.value) {
    return alert('You must fill field "Email"');
  }
  if (!formEl.message.value) {
    return alert('You must fill field "Message"');
  }

  const savedFormData = localStorage.getItem('feedback-form-state');
  console.log(JSON.parse(savedFormData));
    
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  
};

function OutputFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  // console.log(savedData);
  const parsedData = JSON.parse(savedData);
  // console.log(parsedData);
  // console.log(parsedData.email);
  // console.log(parsedData.message);

  if (parsedData) {
    formEl.email.value = parsedData.email;
    formEl.message.value = parsedData.message;
  }

  // if (parsedData.email) {
  //   formEl.email.value = parsedData.email;
  // }
     
  // if (parsedData.message) {
  //  formEl.message.value = parsedData.message;

  // }

}






// SOLUTION WOTHOUT USING IN LOCALSTORAGE OBJECT WITH DATA 

// import throttle from 'lodash.throttle';

// const formEl = document.querySelector('.feedback-form');

// formEl.addEventListener('input', throttle(onFormInput, 500));
// formEl.addEventListener('submit', onFormSubmit);

// OutputFormData()

// function onFormInput() {
//   const formMessage = formEl.message.value;
//   const formEmail = formEl.email.value;
//   localStorage.setItem('message', formMessage);
//   localStorage.setItem('email', formEmail);
// }

// function onFormSubmit(event) {
//   event.preventDefault();
  
//   if (!formEl.email.value) {
//     return alert('You must fill field "Email"');
//   }
//   if (!formEl.message.value) {
//     return alert('You must fill field "Message"');
//   }
  
//   console.log('Email:', localStorage.getItem('email'));
//   console.log('Message:', localStorage.getItem('message'));
//   event.target.reset();
//   localStorage.removeItem('message');
//   localStorage.removeItem('email');
// };

// function OutputFormData() {
//   const savedEmail = localStorage.getItem('email');
//   const savedMessage = localStorage.getItem('message');
  
//   if (savedEmail) {
//     formEl.email.value = savedEmail;
//   }
//   if (savedMessage) {
//     formEl.message.value = savedMessage;
//   }
// }

