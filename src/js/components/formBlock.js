document.addEventListener('DOMContentLoaded', function () {
    const formElementBlock = document.querySelector('.form-info');

    if (formElementBlock) {
        const formId = document.createElement('form');
        formId.className = 'form';
        formId.id = 'form';

        const nameBlock = createFormBlock('Ваше ім\'я', 'username');
        const surnameBlock = createFormBlock('Ваше прізвище', 'surname');
        const phoneBlock = createFormBlock('Номер телефону', 'phone', 'tel');
        const emailBlock = createFormBlock('Електронна пошта', 'email', 'email');

        formId.appendChild(nameBlock);
        formId.appendChild(surnameBlock);
        formId.appendChild(phoneBlock);
        formId.appendChild(emailBlock);

        const closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        closeButton.textContent = '✕';

        closeButton.addEventListener('click', function () {
            formId.style.display = 'none';
        });

        formId.appendChild(closeButton);

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Відправити';

        submitButton.addEventListener('click', function (event) {
            event.preventDefault();
            if (validatePhoneNumber(phoneBlock.querySelector('input').value) &&
                validateEmail(emailBlock.querySelector('input').value)) {

                formId.submit();
            } else {
                alert('Будь ласка, введіть коректний номер телефону та електронну пошту.');
            }
        });


        formId.appendChild(submitButton);

        formElementBlock.appendChild(formId);
    }
});

function createFormBlock(placeholder, name, type = 'text') {
    const formBlock = document.createElement('div');
    formBlock.className = 'form-block';

    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;

    formBlock.appendChild(input);

    return formBlock;
}

function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\+380\d{9}$/;
    return phoneRegex.test(phoneNumber);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}