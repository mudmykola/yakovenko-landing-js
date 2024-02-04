document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.getElementById("main");

  if (mainElement) {
    const historyInner = document.createElement("div");
    historyInner.className = "history-inner";

    const container = document.createElement("div");
    container.className = "container";

    const historyInnerBox = document.createElement("div");
    historyInnerBox.className = "history-inner__box";

    historyInner.appendChild(container);
    container.appendChild(historyInnerBox);

    const historyInnerTitle = document.createElement("h2");
    historyInnerTitle.innerHTML =
      "СФОРМУЄТЕ НОВІ НЕЙРОННІ ЗВ'ЯЗКИ,ЯКІ <span style='color: #00B200;'>АВТОМАТИЧНО БУДУТЬ РОБИТИ ВАС ЗДОРОВИМИ</span> В БУДЬ ЯКІЙ СИТУАЦІЇ";

    historyInnerBox.appendChild(historyInnerTitle);

    const historyInnerContent = document.createElement("div");
    historyInnerContent.className = "history-inner__content";
    historyInnerBox.appendChild(historyInnerContent);

    const leftContent = document.createElement("div");
    leftContent.className = "history-inner__left--content";
    const rightContent = document.createElement("div");
    rightContent.className = "history-inner__right--content";
    historyInnerContent.appendChild(leftContent);
    historyInnerContent.appendChild(rightContent);

    const historyInnerList = document.createElement("ul");

    const historyInnerListItems = [
      {
        text: "<p>Навіть після проходження терапії, коли ви виходите від психолога, ваш мозок все ще може бути наповнений негативними асоціаціями, які <span style='color: #00B200;'> можуть викликати стан: \"я - хворий\".</span>  Це призводить до безрезультатності лікування та рецедиву - повернення до попереднього стану.</p>",
      },
      {
        text: "Задля уникнення цього необхідно створити нові нейронні зв'язки, які будуть повідомляти вашому мозку, що ви здорові. Цього можна досягти за допомогою механізмів нейропсихології, які дозволяють створити позитивні асоціації.",
      },
    ];

    historyInnerListItems.forEach((item) => {
      const historyInnerItem = document.createElement("li");
      historyInnerItem.innerHTML += `${item.text}`;
      historyInnerList.appendChild(historyInnerItem);
    });

    leftContent.appendChild(historyInnerList);

    const historyRightInnerList = document.createElement("ul");

    const historyRightInnerListItems = [
      {
        imagePath: "./img/history-img-1.png",
        text: "<p>до проходження курсу</p>",
      },
      {
        imagePath: "./img/history-img-2.png",
        text: "<p>після</p>",
      },
    ];

    historyRightInnerListItems.forEach((data) => {
      const imageBlock = createImageBlock(data.imagePath);
      const textBlock = createTextBlock(data.text);

      const listItem = document.createElement("li");
      listItem.appendChild(imageBlock);
      listItem.appendChild(textBlock);

      historyRightInnerList.appendChild(listItem);
    });

    rightContent.appendChild(historyRightInnerList);

    mainElement.appendChild(historyInner);
  }
});

function createImageBlock(imagePath) {
  const imageBlock = document.createElement("div");
  imageBlock.className = "history-inner__right--img";

  const image = document.createElement("img");
  image.src = imagePath;
  image.alt = "image";
  imageBlock.appendChild(image);

  return imageBlock;
}

function createTextBlock(text) {
  const textBlock = document.createElement("div");
  textBlock.className = "text-block";

  const paragraph = document.createElement("p");
  paragraph.innerHTML = text;
  textBlock.appendChild(paragraph);

  return textBlock;
}