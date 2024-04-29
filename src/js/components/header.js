document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.getElementById("header");

  if (headerElement) {
    const leftContent = document.createElement("div");
    leftContent.className = "header-left__content";

    const container = document.createElement("div");
    container.className = "container";

    const headerContent = document.createElement("div");
    headerContent.className = "header-content";

    const onlineCourse = document.createElement("h1");
    onlineCourse.textContent = "Онлайн-курс Анни Яковенко";

    const topic = document.createElement("h2");
    topic.textContent = "ПСИХОСОМАТИКА";

    const launchSelfHealing = document.createElement("h3");
    launchSelfHealing.textContent = "ЗАПУСК САМОЗЦІЛЕННЯ";

    const methodDescription = document.createElement("p");
    methodDescription.textContent =
      "Авторська методика, щоб усунути психологічні причини вашого захворювання та знов відчути, як жити без симптомів, болю та обмежень.";

    const joinButtonBox = document.createElement("div");
    joinButtonBox.className = "btn-box";

    const joinButton = document.createElement("a");
    joinButton.textContent = "Приєднатися";
    joinButton.href = "/link";
    joinButton.className = "join-button";

    leftContent.appendChild(onlineCourse);
    leftContent.appendChild(topic);
    leftContent.appendChild(launchSelfHealing);
    leftContent.appendChild(methodDescription);
    leftContent.appendChild(joinButton);

    const rightContent = document.createElement("div");
    rightContent.className =
      "header-right__content header-right__content--after";

    const image = document.createElement("img");
    image.src = "./img/header-img.png";
    image.alt = "Image Alt Text";

    rightContent.appendChild(image);

    joinButtonBox.appendChild(joinButton);
    leftContent.appendChild(joinButtonBox);
    headerContent.appendChild(leftContent);
    headerContent.appendChild(rightContent);
    container.appendChild(headerContent);

    headerElement.appendChild(container);
  }
});