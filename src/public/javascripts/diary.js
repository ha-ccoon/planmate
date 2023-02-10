const planElem = document.querySelector('.plan');
const planBtn = document.querySelector('#plan-btn');
const diaryElem = document.getElementById('diary-contents');
const diaryBtn = document.getElementById('diary-btn');
let addDiaryBtn = document.getElementById('add-diary');
let diarySelectBtn = document.getElementById('diary-writer');
let goToListBtn= document.getElementById('close-diary');

//다이어리 목록 띄우기 
function listUp () {
    planElem.innerHTML="";
    diaryElem.innerHTML="";
    
    //diaryDiv
    const newDiaryDiv= document.createElement('div');
    newDiaryDiv.classList.add('diaryDiv');

    //다이어리 추가 버튼
    const addBtn= document.createElement('button');
    addBtn.innerHTML= "+";
    addBtn.classList.add('add-diary');
    addBtn.id= 'add-diary';

    //피드 타이틀
    const feedTitle= document.createElement('h1');
    feedTitle.innerHTML= "피드";
    feedTitle.classList.add('diary-feed');


    // for(let d=0; d < mytext.data[0].length; d++) {
    
    // }
    //피드 날짜
    const diaryDate= document.createElement('p');
    diaryDate.innerHTML=`2023-02-10 (금)`;
    // ${mytext.data[0].written_date}
    diaryDate.classList.add('diary-date');

    //다이어리 리스트 ol
    const diaryOl= document.createElement('ol');

    //다이어리 리스트 li
    const diaryLi= document.createElement('li');
    diaryLi.classList.add('diary');
    diaryLi.id= 'theDiary';

    //다이어리 기분 아이콘
    const feelingcon= document.createElement('img');
    feelingcon.classList.add('feeling-list');
    feelingcon.id= 'feelingcon-preview';
    feelingcon.src= "./images/feel-happy" + ".png";

    //다이어리 작성자
    const diaryWriter = document.createElement('p');
    diaryWriter.innerHTML= `'User_firstName'의 다이어리`;
    diaryWriter.classList.add("diary-writer");
    diaryWriter.id='diary-writer';

    //append
    diaryLi.append(feelingcon);
    diaryLi.append(diaryWriter);    
    diaryOl.append(diaryLi);

    newDiaryDiv.append(addBtn);
    newDiaryDiv.append(feedTitle);
    newDiaryDiv.append(diaryDate);
    newDiaryDiv.append(diaryOl);

    diaryElem.append(newDiaryDiv);
    
    addDiaryBtn = document.getElementById('add-diary');
    diarySelectBtn = document.getElementById('diary-writer');
    addDiaryBtn.addEventListener('click', addDiary);
    diarySelectBtn.addEventListener('click', showSelectedDiary);
}

diaryBtn.addEventListener('click', listUp);

//새로운 다이어리 추가
function addDiary () {
    diaryElem.innerHTML="";

    //diaryDiv
    const addDiaryDiv= document.createElement('div');
    addDiaryDiv.classList.add('diaryDiv');

    //다이어리 추가 창 끄기
    const backBtn= document.createElement('button');
    backBtn.innerHTML= "x";
    backBtn.id= 'close-diary'; 

    //오늘 날짜
    let today = new Date();   
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();  // 요일
    const dayArray = ['일', '월', '화', '수', '목', '금', '토'];
    let textday = dayArray[day];


    const todayDate= document.createElement('p');
    todayDate.innerHTML= `${year}-${month}-${date} (${textday})`;
    todayDate.classList.add('today-date'); 

    //기분 div 
    const feelDiv= document.createElement('div');
    feelDiv.id= 'select-feeling';
    feelDiv.name="feelingconURL";

    //기분 고르기
    const feel1= document.createElement('img');
    feel1.src= "./images/feel-love.png";
    const feel2= document.createElement('img');
    feel2.src= "./images/feel-happy.png";
    const feel3= document.createElement('img');
    feel3.src= "./images/feel-notbad.png";
    const feel4= document.createElement('img');
    feel4.src= "./images/feel-sad.png";
    const feel5= document.createElement('img');
    feel5.src= "./images/feel-angry.png";
    
    feel1.classList.add('choose-feeling');
    feel1.id='feel1';
    feel2.classList.add('choose-feeling');
    feel2.id='feel2'; 
    feel3.classList.add('choose-feeling'); 
    feel3.id='feel3';
    feel4.classList.add('choose-feeling'); 
    feel4.id='feel4';
    feel5.classList.add('choose-feeling');
    feel5.id='feel5';

    //다이어리 내용 작성하는 곳
    const textingArea = document.createElement('textarea');
    textingArea.classList.add('write-diary');
    textingArea.maxLength= 180;
    textingArea.spellcheck= "false";
    textingArea.name= 'comment';

    //post 전송을 위한 form 생성
    const buttonForm = document.createElement('form');
    buttonForm.action= '/main';
    buttonForm.method= "POST";

    //등록하기
    const uploadBtn= document.createElement('button');
    uploadBtn.innerHTML= "등록하기";
    uploadBtn.classList.add('upload-diary');
    uploadBtn.type= 'submit';
    
    //append
    feelDiv.append(feel1);
    feelDiv.append(feel2);
    feelDiv.append(feel3);
    feelDiv.append(feel4);
    feelDiv.append(feel5);

    buttonForm.append(todayDate);
    buttonForm.append(feelDiv);
    buttonForm.append(textingArea);
    buttonForm.append(uploadBtn);

    addDiaryDiv.append(backBtn);
    addDiaryDiv.append(buttonForm);

    diaryElem.append(addDiaryDiv);
    
    //기분 선택 시 나머지 흑백처리
    feel1.addEventListener('click', ()=> {
        feel1.src="./images/feel-love.png";
        feel2.src="./images/feel-happy-2.png";
        feel3.src="./images/feel-notbad-2.png";
        feel4.src="./images/feel-sad-2.png";
        feel5.src="./images/feel-angry-2.png";
        feelDiv.value= "./images/feel-love.png";
        console.log('feel love');
    });

    feel2.addEventListener('click', ()=> {
        feel1.src="./images/feel-love-2.png";
        feel2.src="./images/feel-happy.png";
        feel3.src="./images/feel-notbad-2.png";
        feel4.src="./images/feel-sad-2.png";
        feel5.src="./images/feel-angry-2.png";
        feelDiv.value= "./images/feel-happy.png";
        console.log('feel happy');
    });

    feel3.addEventListener('click', ()=> {
        feel1.src="./images/feel-love-2.png";
        feel2.src="./images/feel-happy-2.png";
        feel3.src="./images/feel-notbad.png";
        feel4.src="./images/feel-sad-2.png";
        feel5.src="./images/feel-angry-2.png";
        feelDiv.value= "./images/feel-notbad.png";
        console.log('feel notbad');
    });

    feel4.addEventListener('click', ()=> {
        feel1.src="./images/feel-love-2.png";
        feel2.src="./images/feel-happy-2.png";
        feel3.src="./images/feel-notbad-2.png";
        feel4.src="./images/feel-sad.png";
        feel5.src="./images/feel-angry-2.png";
        feelDiv.value= "./images/feel-sad.png";
        console.log('feel sad');
    });

    feel5.addEventListener('click', ()=> {
        feel1.src="./images/feel-love-2.png";
        feel2.src="./images/feel-happy-2.png";
        feel3.src="./images/feel-notbad-2.png";
        feel4.src="./images/feel-sad-2.png";
        feel5.src="./images/feel-angry.png";
        feelDiv.value= "./images/feel-angry.png";
        console.log('feel angry');
    });

    //리스트로 돌아가기
    goToListBtn= document.getElementById('close-diary');
    goToListBtn.addEventListener('click', listUp);
    uploadBtn.addEventListener('click', sendDiary);
}

//등록된 다이어리 세부
function showSelectedDiary() {
    diaryElem.innerHTML="";

    //diaryDiv
    const selectedDiaryDiv= document.createElement('div');
    selectedDiaryDiv.classList.add('diaryDiv');

    //창 닫기 버튼
    const backBtn2= document.createElement('button');
    backBtn2.innerHTML= "x";
    backBtn2.id='close-diary'; 

    //작성 날짜
    const writtenDate = document.createElement('p');
    writtenDate.id= 'written-date';
    writtenDate.innerHTML= '2022-01-02';
    
    //feeling con
    const todayFeel= document.createElement('img');
    todayFeel.id= 'feelingcon';
    todayFeel.src= "./images/feel-happy" + ".png";

    //일기 div
    const commentBox= document.createElement('div');
    commentBox.id='comment-box';

    //일기 내용
    const comment= document.createElement('p');
    comment.id= 'comment';
    comment.innerHTML= `어쩌구저쩌구`;

    //edit div
    const editDiv= document.createElement('div');
    editDiv.id= 'edit-btn-contain';

    //수정하기, 삭제하기
    const modifyDiary = document.createElement('button');
    const deleteDiary = document.createElement('button');
    modifyDiary.classList.add= 'diary-edit';
    modifyDiary.id= 'modify-diary';
    modifyDiary.innerHTML= '수정하기';
    deleteDiary.classList.add= 'diary-edit';
    deleteDiary.id= 'delete-diary';
    deleteDiary.innerHTML= '삭제하기';

    //append
    commentBox.append(comment);
    editDiv.append(modifyDiary);
    editDiv.append(deleteDiary);

    selectedDiaryDiv.append(backBtn2);
    selectedDiaryDiv.append(writtenDate);
    selectedDiaryDiv.append(todayFeel);
    selectedDiaryDiv.append(commentBox);
    selectedDiaryDiv.append(editDiv);

    diaryElem.append(selectedDiaryDiv);

    //리스트로 돌아가기
    goToListBtn= document.getElementById('close-diary');
    goToListBtn.addEventListener('click', listUp);
}

//다이어리 전송 alert
function sendDiary () {
    alert('새로운 일기 등록 완료!');
    setTimeout(() => {
        listUp();
      }, "100")
    // listUp();

    async function dbDiary() {
        const response = await fetch("/main/:diary")
        const mytext = await response.json()
        //console.log(mytext.data[0])
    }

    dbDiary()
}