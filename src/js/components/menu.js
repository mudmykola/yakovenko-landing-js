document.addEventListener('DOMContentLoaded', () => {
    const headerElement = document.getElementById('header');

    if (headerElement) {
        // Створення елементів
        const headerBox = document.createElement('div');

        // Додавання класу до блоку header-box
        headerBox.className = 'header-top__box';

        // Створення блоку header-top
        const headerTop = document.createElement('div');

        // Додавання класу до блоку header-top
        headerTop.className = 'header-top';

        // Створення контейнера .container
        const container = document.createElement('div');
        container.className = 'container';

        // Створення блоку для логотипу
        const logoBox = document.createElement('div');
        logoBox.className = 'header-top__logo';
        const logo = document.createElement('img');

        // Додавання класу до логотипу
        logo.src = 'path/to/your/logo.png';
        logo.alt = 'Logo';

        // Створення об'єкта з елементами меню та їх посиланнями та класами
        const menuItems = {
            'Про курс': {link: '/about', class: 'menu-item'},
            'Відгуки': {link: '/reviews', class: 'menu-item'},
            'Ціни': {link: '/price', class: 'menu-item'},
            'Відповіді на питання': {link: '/faq', class: 'menu-item'}
        };

        // Створення блоку для меню
        const menuBox = document.createElement('div');
        menuBox.className = 'header-top__menu';
        const nav = document.createElement('nav');
        nav.className = 'main-menu';

        // Створення списку (ul) для меню
        const menuList = document.createElement('ul');

        // Додавання тексту, посилань та класів до меню
        Object.entries(menuItems).forEach(([item, {link, class: menuItemClass}]) => {
            const menuItem = document.createElement('li');
            const menuLink = document.createElement('a');
            menuLink.href = link;
            menuLink.textContent = item;
            menuLink.className = menuItemClass;
            menuItem.appendChild(menuLink);
            menuList.appendChild(menuItem);
        });

        // Додавання списку до блоку навігації
        nav.appendChild(menuList);

        // Додавання блоків до відповідних контейнерів
        logoBox.appendChild(logo);
        menuBox.appendChild(nav);

        // Додавання контейнера та його вмісту до блоку header-top
        container.appendChild(headerBox);
        headerTop.appendChild(container);

        // Додавання блоку header-top до блоку header-box
        headerBox.appendChild(logoBox);
        headerBox.appendChild(menuBox);

        headerElement.innerHTML = '';
        headerElement.appendChild(headerTop);
    }
});