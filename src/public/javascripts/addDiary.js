const diaryEleme = document.getElementById('diary-contents');
const addDiaryBtn = document.getElementsByClassName('add-diary');
console.log(addDiaryBtn);

function addDiary () {
    console.log(`새로운 다이어리 추가`);
    diaryEleme.innerHTML="";

    //diaryDiv
    const addDiaryDiv= document.createElement('div');
    addDiaryDiv.classList.add('diaryDiv');

    //다이어리 추가 창 끄기
    const backBtn= document.createElement('button');
    backBtn.innerHTML= "x";
    backBtn.classList.add('close-btn'); 

    //오늘 날짜
    const todayDate= document.createElement('p');
    todayDate.innerHTML= "2022-01-07";
    todayDate.classList.add('today-date'); 

    //기분 div 
    const feelDiv= document.createElement('div');
    feelDiv.classList.add('select-feeling');

    //기분 고르기
    const feel1= document.createElement('img');
    feel1.src= "./images/feel-love" + ".png";
    const feel2= document.createElement('img');
    feel1.src= "./images/feel-happy" + ".png";
    const feel3= document.createElement('img');
    feel1.src= "./images/feel-notbad" + ".png";
    const feel4= document.createElement('img');
    feel1.src= "./images/feel-sad" + ".png";
    const feel5= document.createElement('img');
    feel1.src= "./images/feel-angry" + ".png";
    
    feel1.classList.add('choose-feeling');
    feel2.classList.add('choose-feeling'); 
    feel3.classList.add('choose-feeling'); 
    feel4.classList.add('choose-feeling'); 
    feel5.classList.add('choose-feeling');

    //다이어리 내용 작성하는 곳
    const textingArea = document.createElement('textarea');
    textingArea.classList.add('write-diary');
    textingArea.maxLength= 180;
    textingArea.spellcheck= "false";

    //등록하기
    const uploadBtn= document.createElement('button');
    uploadBtn.innerHTML= "등록하기";
    uploadBtn.classList.add('upload-diary');

    //----------append------------------
    feelDiv.append(feel1);
    feelDiv.append(feel2);
    feelDiv.append(feel3);
    feelDiv.append(feel4);
    feelDiv.append(feel5);

    addDiaryDiv.append(backBtn);
    addDiaryDiv.append(todayDate);
    addDiaryDiv.append(feelDiv);
    addDiaryDiv.append(textingArea);
    addDiaryDiv.append(uploadBtn);

    diaryEleme.append(addDiaryDiv);
}

for (let i= 0; i < addDiaryBtn.length; i++) {
    addDiaryBtn[0].addEventListener('click', addDiary);
    console.log(addDiaryBtn.length);
}