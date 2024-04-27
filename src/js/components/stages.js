document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.getElementById("main");

  if (mainElement) {
    const stages = document.createElement("div");
    stages.className = "stages";

    const container = document.createElement("div");
    container.className = "container";
    stages.appendChild(container);

    const stagesBox = document.createElement("div");
    stagesBox.className = "stages-box";
    container.appendChild(stagesBox);

    const stagesTitle = document.createElement("h2");
    stagesTitle.className = "stages-title";
    stagesTitle.textContent = "ЯК ВСЕ БУДЕ ПРОХОДИТИ";
    stagesBox.appendChild(stagesTitle);

    const stagesCardList = document.createElement("ul");
    stagesCardList.className = "stages-card__list";
    stagesBox.appendChild(stagesCardList);

    function stagesCreateCard(cardIconPath, cardTitle, cardDescription) {
      const stagesCardItem = document.createElement("li");
      stagesCardItem.className = "stages-card__item";

      const stagesCardIcon = document.createElement("img");
      stagesCardIcon.src = cardIconPath;
      stagesCardIcon.alt = "card-icon";

      const stagesCardTitle = document.createElement("h2");
      stagesCardTitle.textContent = cardTitle;

      const stagesCardDescription = document.createElement("p");
      stagesCardDescription.textContent = cardDescription;

      stagesCardItem.appendChild(stagesCardIcon);
      stagesCardItem.appendChild(stagesCardTitle);
      stagesCardItem.appendChild(stagesCardDescription);
      stagesCardList.appendChild(stagesCardItem);
    }

    stagesCreateCard(
      "../../img/stages-icon-1.png",
      "Аудіо-курс в Телеграммі",
      "Спочатку ви маєте прослухати аудіо-повідомлення з поясненням теорії.",
    );
    stagesCreateCard(
      "../../img/stages-icon-2.png",
      "Практика під аудіо",
      "Потім під аудіо повністю в супроводі голосу Анни ви робите всі практики.",
    );
    stagesCreateCard(
      "../../img/stages-icon-3.png",
      "Домашні завдання",
      "У вас будуть домашні задания и ви отримаєте всю інформацію для їх виконання.",
    );
    stagesCreateCard(
      "../../img/stages-icon-4.png",
      "Відповіді на запитання",
      "У вас буде можливіть отримати від Анни відповіді на свої питання, якщо оберете пакет, що включає це.",
    );

    mainElement.appendChild(stages);
  }
});