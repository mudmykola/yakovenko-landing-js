document.addEventListener('DOMContentLoaded', function (){

    const mainElement = document.getElementById('main');

    if (mainElement) {
        const diseases = document.createElement('div');
        diseases.className = 'diseases';

        const container = document.createElement('div');
        container.className = 'container';

        const diseaseBox = document.createElement('div');
        diseaseBox.className = 'diseases-box';

        const diseasesList = document.createElement('div');
        diseasesList.className = 'diseases-list';

        const title = document.createElement('h2');
        title.textContent = 'Для тих, хто давно страждає від:';

        const list = document.createElement('ul');

        const listItems = [
            {text: "язви"},
            {text: "аутоімунних захворювань"},
            {text: "діабету ІІ типу"},
            {text: "колітів"},
            {text: "псоріаза, алергії"},
            {text: "мастопатії"},
            {text: "безсоння"},
            {text: "акне, прищів, фурункулів"},
            {text: "астми, гіпертонії"},
            {text: "безпліддя"},
            {text: "онко, фіброзів, міоми"},
            {text: "панічних атак, тривожності"},
        ];

        listItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML += ` ${item.text}`;
            list.appendChild(listItem);
        });

        diseases.appendChild(container);
        container.appendChild(diseaseBox);
        diseasesList.appendChild(list);
        diseaseBox.appendChild(title);
        diseaseBox.appendChild(diseasesList);

        mainElement.appendChild(diseases);
    }
})