document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.getElementById("header");

  if (headerElement) {
    const headerBox = document.createElement("div");

    headerBox.className = "header-top__box";

    const headerTop = document.createElement("div");

    headerTop.className = "header-top";

    const container = document.createElement("div");
    container.className = "container";

    const logoBox = document.createElement("div");
    logoBox.className = "header-top__logo";
    const logo = document.createElement("img");

    logo.src = "path/to/your/logo.png";
    logo.alt = "Logo";

    const menuItems = [
      { name: "Про курс", link: "/about", class: "menu-item" },
      { name: "Відгуки", link: "/reviews", class: "menu-item" },
      { name: "Ціни", link: "/price", class: "menu-item" },
      { name: "Відповіді на питання", link: "/faq", class: "menu-item" },
    ];

    const menuBox = document.createElement("div");
    menuBox.className = "header-top__menu";
    const nav = document.createElement("nav");
    nav.className = "main-menu";

    const menuList = document.createElement("ul");

    menuItems.forEach((item) => {
      const menuItem = document.createElement("li");
      const menuLink = document.createElement("a");
      menuLink.href = item.link;
      menuLink.textContent = item.name;
      menuLink.className = item.class;
      menuLink.style.cursor = " pointer";
      menuItem.appendChild(menuLink);
      menuList.appendChild(menuItem);
    });

    nav.appendChild(menuList);

    logoBox.appendChild(logo);
    menuBox.appendChild(nav);

    container.appendChild(headerBox);
    headerTop.appendChild(container);

    headerBox.appendChild(logoBox);
    headerBox.appendChild(menuBox);

    headerElement.innerHTML = "";
    headerElement.appendChild(headerTop);
  }
});