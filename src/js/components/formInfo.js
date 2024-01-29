document.addEventListener('DOMContentLoaded', function (){
    const mainElement = document.getElementById('main');

    if(mainElement){
        const leftContent = document.createElement('div');
        leftContent.className = 'form-left__content';

        const formInfo = document.createElement('div');
        formInfo.className = 'form-info';

        const container = document.createElement('div');
        container.className = 'container';

        const formBox = document.createElement('div');
        formBox.className = 'form-info__box';

        const title = document.createElement('h2');
        title.textContent = 'ХВОРІЮТЬ ДІТИ?';

        const desc = document.createElement('p');
        desc.innerHTML = 'Якщо дитині <span style="color: #00B200;">до 9 років</span>, цей курс рекомендовано проходити батькам задля усунення психологічних причин, які впливають на здоров\'я вашої дитини.';

        const formBtn = document.createElement('div');
        formBtn.className = 'form-info__btn';

        const formBtnLink = document.createElement('button');
        formBtnLink.textContent = 'Залишити заявку';
        formBtnLink.className = 'form-btn__link';

        formBtnLink.addEventListener('click', function (){
            event.preventDefault();

            const formElement = document.getElementById('form');

            if(formElement){
                formElement.style.display = 'flex';
            }
        })

        leftContent.appendChild(title);
        leftContent.appendChild(desc);
        formBtn.appendChild(formBtnLink);
        leftContent.appendChild(formBtn);

        const rightContent = document.createElement('div');
        rightContent.className = 'form-right__content';

        const image = document.createElement('img');
        image.src = './img/form-img.png';
        image.alt = 'Image Alt Text';

        rightContent.appendChild(image);

        formBox.appendChild(leftContent);
        formBox.appendChild(rightContent);
        container.appendChild(formBox);
        formInfo.appendChild(container);

        mainElement.appendChild(formInfo);
    }
})