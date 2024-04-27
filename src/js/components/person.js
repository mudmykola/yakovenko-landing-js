import { createContainer } from "./container.js";

document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.getElementById("main");

  if (mainElement) {
    const person = document.createElement("div");
    person.className = "person";

    const personContainer = createContainer();
    person.appendChild(personContainer);

    const personBox = document.createElement("div");
    personBox.className = "person-box";

    const personBoxText = document.createElement("div");
    personBoxText.className = "person-box__text";
    personBox.appendChild(personBoxText);

    const personBoxImage = document.createElement("div");
    personBoxImage.className = "person-box__image";
    personBox.appendChild(personBoxImage);

    const personBoxTitle = document.createElement("h2");
    personBoxTitle.className = "person-title";
    personBoxTitle.textContent = "АННА ЯКОВЕНКО";
    personBoxText.appendChild(personBoxTitle);

    const personBoxDescription = document.createElement("p");
    personBoxDescription.className = "person-box__description";
    personBoxDescription.textContent =
      "вилікувала без медицини алергію у доньки та аутоімунні захворювання у себе та тисяч людей";
    personBoxText.appendChild(personBoxDescription);

    const personBoxInner = document.createElement("div");
    personBoxInner.className = "person-box__inner";
    personBoxText.appendChild(personBoxInner);

    const personBoxList = document.createElement("ul");
    personBoxList.className = "person-box__list";
    personBoxInner.appendChild(personBoxList);

    function personCreateItem(itemNumber, itemText) {
      const personBoxItem = document.createElement("li");
      personBoxItem.className = "person-box__item";
      personBoxList.appendChild(personBoxItem);

      const personBoxItemNumber = document.createElement("span");
      personBoxItemNumber.textContent = itemNumber;

      const personBoxItemText = document.createElement("p");
      personBoxItemText.textContent = itemText;

      personBoxItem.appendChild(personBoxItemNumber);
      personBoxItem.appendChild(personBoxItemText);
    }

    personCreateItem("1", "6000 здорових щасливих клієнтів");
    personCreateItem("2", "Має офіційну державну освіту психолога");
    personCreateItem(
      "3",
      "Викладала «психосоматику» в «Київському інституті раціонально-інтуїтивної психотерапії Я»",
    );
    personCreateItem(
      "4",
      "Провела тренінги з психосоматики у Німеччині, Туреччині, Іспанії та Україні",
    );
    personCreateItem("5", "Навчила більше 400 людей");

    const personBoxImg = document.createElement("img");
    personBoxImg.className = "person-box__img";
    personBoxImg.src = "./img/person-img.png";
    personBoxImg.alt = "person-img";
    personBoxImage.appendChild(personBoxImg);

    personContainer.appendChild(personBox);
    person.appendChild(personContainer);

    mainElement.appendChild(person);
  }
});