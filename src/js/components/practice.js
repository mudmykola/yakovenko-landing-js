document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.getElementById("main");

  if (mainElement) {
    const practice = document.createElement("div");
    practice.className = "practice";

    const existingContainer = document.createElement("div");
    existingContainer.className = "container";
    practice.appendChild(existingContainer);

    const practiceBox = document.createElement("div");
    practiceBox.className = "practice-box";
    existingContainer.appendChild(practiceBox);

    const practiceTitle = document.createElement("div");
    practiceTitle.className = "practice-title";
    practiceBox.appendChild(practiceTitle);

    const practiceTitleBox = document.createElement("h2");
    practiceTitleBox.className = "practice-title__box";
    practiceTitle.appendChild(practiceTitleBox);

    const practiceTitleColor = document.createElement("span");
    practiceTitleColor.style.color = "#599d2e";
    practiceTitleColor.textContent = "20 ПРАКТИК";
    practiceTitleBox.appendChild(practiceTitleColor);

    practiceTitleBox.innerHTML +=
      " ДЛЯ УСУНЕННЯ ПСИХОЛОГІЧНИХ ПРИЧИН ЗАХВОРЮВАННЯ";

    const practiceDescription = document.createElement("p");
    practiceDescription.className = "practice-description";
    practiceDescription.textContent =
      "У захворювання може бути 7 основних психологічних причин. І з кожним типом причин потрібно працювати спеціальними практиками.Ви пройдете всі практики для основних причин і таким чином точно усунете свою головну причину і всі другорядні.";
    practiceTitle.appendChild(practiceDescription);

    const practiceBtnBox = document.createElement("div");
    practiceBtnBox.className = "practice-btn__box";
    practiceTitle.appendChild(practiceBtnBox);

    const practiceBtnLink = document.createElement("a");
    practiceBtnLink.className = "practice-btn__link";
    practiceBtnLink.textContent = "Долучитися";
    practiceBtnLink.href = "/";
    practiceBtnBox.appendChild(practiceBtnLink);

    mainElement.appendChild(practice);
  }
});