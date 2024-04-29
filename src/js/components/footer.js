import { createContainer } from "./container.js";

document.addEventListener("DOMContentLoaded", function () {
  const footerElement = document.getElementById("footer");
  if (footerElement) {
    const footerInner = document.createElement("div");
    footerInner.classList.add("footer-inner");

    const footerContainer = createContainer();
    footerInner.appendChild(footerContainer);

    const footerInnerBox = document.createElement("div");
    footerInnerBox.className = "footer-inner__box";
    footerContainer.appendChild(footerInnerBox);

    const footerInnerFaq = document.createElement("div");
    footerInnerFaq.classList.add("footer-inner__faq");
    footerInnerBox.appendChild(footerInnerFaq);

    const footerInnerFaqTitle = document.createElement("h2");
    footerInnerFaqTitle.textContent = "Залишились питання?";
    footerInnerFaqTitle.classList.add("footer-inner__faq--title");
    footerInnerFaq.appendChild(footerInnerFaqTitle);

    const footerInnerFaqLink = document.createElement("a");
    footerInnerFaqLink.textContent = "Написати в підтримку";
    footerInnerFaqLink.href = "/";
    footerInnerFaqLink.classList.add("footer-inner__faq--link");
    footerInnerFaq.appendChild(footerInnerFaqLink);

    const footerMenu = document.createElement("div");
    footerMenu.className = "footer-menu";
    footerInnerBox.appendChild(footerMenu);

    const footerMenulist = document.createElement("ul");
    footerMenulist.className = "footer-menu__list";
    footerMenu.appendChild(footerMenulist);

    function footerCreateItemLink(link, text) {
      const footerMenuItem = document.createElement("li");
      footerMenuItem.className = "footer-menu__item";
      footerMenulist.appendChild(footerMenuItem);

      const footerMenuItemLink = document.createElement("a");
      footerMenuItemLink.href = link;
      footerMenuItemLink.textContent = text;
      footerMenuItemLink.classList.add("footer-menu__link");
      footerMenuItem.appendChild(footerMenuItemLink);
    }

    footerCreateItemLink("/", "Про курс");
    footerCreateItemLink("/", "Відгуки");
    footerCreateItemLink("/", "Ціни");
    footerCreateItemLink("/", "Відповіді на питання");

    const footerContact = document.createElement("div");
    footerContact.className = "footer-contact";
    footerInnerBox.appendChild(footerContact);

    const footerContactList = document.createElement("ul");
    footerContactList.className = "footer-contact__list";
    footerContact.appendChild(footerContactList);

    function footerContactItemLink(link, text) {
      const footerContactItem = document.createElement("li");
      footerContactItem.className = "footer-contact__item";
      footerContactList.appendChild(footerContactItem);

      const footerContactLink = document.createElement("a");
      footerContactLink.href = link;
      footerContactLink.textContent = text;
      footerContactItem.appendChild(footerContactLink);
    }

    footerContactItemLink("/", "ФОП Яковенко Анна Юріївна");
    footerContactItemLink("tel:+380994227268", "+380994227268");
    footerContactItemLink("/", "ЄДРПОУ 3114203626");
    footerContactItemLink("/", "Договір оферти");
    footerContactItemLink("/", "Політика конфіденційності");

    footerElement.appendChild(footerInner);
  }
});