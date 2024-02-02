document.addEventListener('DOMContentLoaded', function (){
    const mainElement = document.getElementById('main');

    if (mainElement){
        const  reasonsInner = document.createElement('div');
        reasonsInner.className = 'reasons-inner';

        const container = document.createElement('div');
        container.className = 'container';

        const reasonsInnerBox = document.createElement('div');
        reasonsInnerBox.className = 'reasons-inner__box';

        const reasonsInnerTitle = document.createElement('h2');
        reasonsInnerTitle.innerHTML = 'ПОЗБУДИТЕСЬ ПРИЧИНИ ЗАХВОРЮВАННЯ ТА НАВЧИТЕСЯ <span style="color: #00B200;"> ПЕРЕБУВАТИ В СТАНІ ЗДОРОВОГО ТІЛА</span>'

        const reasonsInnerDesc = document.createElement('p');
        reasonsInnerDesc.textContent = 'Завдяки авторський методиці поєднання класичних та новітніх інструментів психології ви:';

        container.appendChild(reasonsInnerBox);
        reasonsInnerBox.appendChild(reasonsInnerTitle);
        reasonsInnerBox.appendChild(reasonsInnerDesc);
        reasonsInner.appendChild(container);

        const reasonsInnerlist = document.createElement('ul')

        const reasonsInnerListItems = [
            {text: 'Знайдете причину свого захворювання та позбудитесь її.'},
            {text: 'Отримаєте ресурс для того щоб діяти так, як потрібно для одужання.'},
            {text: 'Відчуєте як це жити без симптомів, без болю, дискомфорту та обмежень.'},
            {text: 'Навчитесь та доведете до автоматизму навичку виражати свої емоції так, щоб вони не викликали нові захворювання, не руйнували вас і не шкодити іншим.'},
            {text: 'Почнете перебувати в стані здорового тіла постійно.'},
        ];

        reasonsInnerListItems.forEach(item =>{
            const  reasonsInnerListItem = document.createElement('li');
            reasonsInnerListItem.innerHTML += `${item.text}`;
            reasonsInnerlist.appendChild(reasonsInnerListItem);
        })

        reasonsInnerBox.appendChild(reasonsInnerlist);
        mainElement.appendChild(reasonsInner);
    }
})