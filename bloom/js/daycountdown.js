function getRemainingDays(dateString) {
  const today = new Date();
  const examDate = new Date(dateString);

  today.setHours(0, 0, 0, 0);
  examDate.setHours(0, 0, 0, 0);

  const diff = examDate - today;

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function formatDate(dateString) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}



document.addEventListener("DOMContentLoaded", function () {

const exams = [
  {
    name:"共通テスト",
    date:"2027-01-17"
  }
]

const countdownList = document.querySelector("#countdown-list");

exams.forEach(exam => {
  const card = document.createElement("div");
  card.classList.add("countdown-card");

  const remainingDays = getRemainingDays(exam.date);
  const formattedDate = formatDate(exam.date);

  let countdownText;

  if (remainingDays > 1) {
    countdownText = `${remainingDays} DAYS LEFT`;
  } else if (remainingDays === 1) {
    countdownText = "1 DAY LEFT";
  } else if (remainingDays === 0) {
    countdownText = "TODAY";
  } else {
    countdownText = "FINISHED";
  }

  card.innerHTML = `
    <p class="countdown-label">${exam.name}</p>
    <p class="countdown-days">${countdownText}</p>
    <time class="countdown-date" datetime="${exam.date}">${formattedDate}</time>
  `;

  countdownList.appendChild(card);
});

});