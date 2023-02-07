const diaryElem = document.getElementById('diary-contents');
const diaryBtn = document.getElementById('diary-btn');

//다이어리 목록 띄우기 
function listUp () {
    console.log(`다이어리 리스트 로드`);
    diaryElem.innerHTML="";

    //diaryDiv
    const newDiaryDiv= document.createElement('div');
    newDiaryDiv.classList.add('diaryDiv');

    //다이어리 추가 버튼
    const addBtn= document.createElement('button');
    addBtn.innerHTML= "+";
    addBtn.classList.add('add-diary');

    //피드 타이틀
    const feedTitle= document.createElement('h1');
    feedTitle.innerHTML= "피드";
    feedTitle.classList.add('diary-feed');

    //피드 날짜
    const diaryDate= document.createElement('p');
    diaryDate.innerHTML="2023.02.06(월)";
    diaryDate.classList.add('diary-date');

    //다이어리 리스트 ol
    const diaryOl= document.createElement('ol');

    //다이어리 리스트 li
    const diaryLi= document.createElement('li');
    diaryLi.classList.add('diary');

    //다이어리 기분 아이콘
    const feelingcon= document.createElement('img');
    feelingcon.classList.add('feeling-list');
    feelingcon.src= "./images/config-2" + ".png";

    //다이어리 작성자
    const diaryWriter = document.createElement('p');
    diaryWriter.innerHTML= "이경은의 일기";
    diaryWriter.classList.add("diary-writer");

    //----------append------------------
    diaryLi.append(feelingcon);
    diaryLi.append(diaryWriter);    
    diaryOl.append(diaryLi);

    newDiaryDiv.append(addBtn);
    newDiaryDiv.append(feedTitle);
    newDiaryDiv.append(diaryDate);
    newDiaryDiv.append(diaryOl);

    diaryElem.append(newDiaryDiv);
}

diaryBtn.addEventListener('click', listUp);