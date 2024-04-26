document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.getElementById("main");

  if (mainElement) {
    const therapyInner = document.createElement("div");
    therapyInner.className = "therapy-inner";

    const container = document.createElement("div");
    container.className = "container";

    const therapyInnerBox = document.createElement("div");
    therapyInnerBox.className = "therapy-inner__box";

    therapyInner.appendChild(container);
    container.appendChild(therapyInnerBox);

    const therapyInnerTitle = document.createElement("h2");
    therapyInnerTitle.className = "therapy-inner__title";
    therapyInnerTitle.innerHTML = "ЕФЕКТ, ЯК ПРИ ЖИВІЙ ТЕРАПІЇ";

    const therapyInnerContent = document.createElement("div");
    therapyInnerContent.className = "therapy-inner__content";

    const therapyInnerList = document.createElement("ul");
    therapyInnerList.className = "therapy-inner-list";

    const therapyInnerListItem = [
      {
        text: "Курс-практикум по суті повторює ті 10 основних етапів, по яким Анна проводить кожного клієнта в індивідуальній терапії.",
      },
      {
        text: "Курс підходить тим, у кого не має багато грошей та часу, щоб проходити особисту психотерапію, ви зможете прослухати і виконати техніки в будь-який зручний для вас час.",
      },
    ];

    therapyInnerListItem.forEach((item) => {
      const therapyInnerListItem = document.createElement("li");
      therapyInnerListItem.innerHTML += `<p>${item.text}</p>`;
      therapyInnerList.appendChild(therapyInnerListItem);
    });

    therapyInnerContent.appendChild(therapyInnerList);

    therapyInnerBox.appendChild(therapyInnerTitle);
    therapyInnerBox.appendChild(therapyInnerContent);

    mainElement.appendChild(therapyInner);
  }
});