//오퍼시티 값 변경으로 플랜/일기 내용 변경
const planBtn = document.getElementById('plan-btn');
const diaryBtn = document.getElementById('diary-btn');
const planDiv = document.getElementById('plan-contents');
const diaryDiv = document.getElementById('diary-contents');

function showPlan() {
    planDiv.style.opacity= "1";
    diaryDiv.style.opacity= "0";
}

function showDiary() {
    planDiv.style.opacity= "0";
    diaryDiv.style.opacity= "1";
}

planBtn.addEventListener('click', showPlan);
diaryBtn.addEventListener('click', showDiary);