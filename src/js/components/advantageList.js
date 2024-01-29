document.addEventListener('DOMContentLoaded', function () {

    const mainElement = document.getElementById('main');

    if (mainElement) {
        const container = document.createElement('div');
        container.className = 'container';

        const advantage = document.createElement('div');
        advantage.className = 'advantage';

        const advantageList = document.createElement('div');
        advantageList.className = 'advantage-list';

        const advantageBox = document.createElement('div');
        advantageBox.className = 'advantage-box';

        const title = document.createElement('h2');
        title.textContent = 'ВТОМИЛИСЯ ВІД ХВОРОБИ, БОЛЮ, ОБМЕЖЕНЬ?';

        const description = document.createElement('p');
        description.textContent = 'Кому підходить цей курс?';

        const list = document.createElement('ul');

        const listItems = [
            {number: '01', text: "кому стан здоров'я та тіла не дає спокійно жити і робити те, що хочеться"},
            {
                number: '02',
                text: "у кого були результати після психологічної або медичної терапії, але потім хвороба все одно повернулася "
            },
            {
                number: '03',
                text: "в кого хворіє дитина і ви вже не знаєте, як цьому зарадити, відчуваєте своє безсилля, провину та виснаження"
            },
            {
                number: '04',
                text: "кому звичний рівень медицини недоступний, лікуватися дуже дорого або лікарі налаштовані лише на зняття симптомів, а не лікування причини"
            },
        ];

        listItems.forEach(item => {
            const listItem = document.createElement('li');

            const spanNumber = document.createElement('span');
            spanNumber.textContent = item.number;

            listItem.appendChild(spanNumber);
            listItem.innerHTML += ` ${item.text}`;

            list.appendChild(listItem);
        });

        advantage.appendChild(container);
        container.appendChild(advantageBox);
        advantageList.appendChild(list);
        advantageBox.appendChild(title)
        advantageBox.appendChild(description);
        advantageBox.appendChild(advantageList);

        mainElement.appendChild(advantage);
    }
});