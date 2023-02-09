document.addEventListener("DOMContentLoaded", () => {
  const plan = document.getElementById(".plan");
  const input = document.querySelector("#planText");
  const addButton = document.querySelector("#addButton");
  const todoList = document.querySelector("#planList");
  const alert = document.querySelector("span");

  // 0209 가은 (캘린더 시간)

  const planDate = document.querySelector("#planDate");

  // '추가' 버튼 화살표 함수

  const addTodo = () => {
    const AddCalendarEvent = (title, today, tomorrow) => {
      var calendarEl = $("#calendar")[0];

      var calendar = new FullCalendar.Calendar(calendarEl, {
        height: "700px", // calendar 높이 설정

        expandRows: true, // 화면에 맞게 높이 재설정

        slotMinTime: "08:00", // Day 캘린더에서 시작 시간

        slotMaxTime: "20:00", // Day 캘린더에서 종료 시간

        // 해더에 표시할 툴바

        headerToolbar: {
          left: "prev,next today",

          center: "title",

          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        },

        initialView: "dayGridMonth", // 초기 로드 될때 보이는 캘린더 화면(기본 설정: 달)

        navLinks: true, // 날짜를 선택하면 Day 캘린더나 Week 캘린더로 링크

        editable: true, // 수정 가능?

        selectable: true, // 달력 일자 드래그 설정가능

        nowIndicator: true, // 현재 시간 마크

        dayMaxEvents: true, // 이벤트가 오버되면 높이 제한 (+ 몇 개식으로 표현)

        locale: "ko", // 한국어 설정

        eventAdd: function (obj) {
          // 이벤트가 추가되면 발생하는 이벤트

          console.log(obj);
        },

        eventChange: function (obj) {
          // 이벤트가 수정되면 발생하는 이벤트

          console.log(obj);
        },

        eventRemove: function (obj) {
          // 이벤트가 삭제되면 발생하는 이벤트

          console.log(obj);
        },

        select: function (arg) {
          // 캘린더에서 드래그로 이벤트를 생성할 수 있다.

          // var title = prompt('Event Title:');

          if (title) {
            calendar.addEvent({
              title: title,

              start: arg.start,

              end: arg.value,

              allDay: arg.allDay, // true
            });
          }

          calendar.unselect();
        },
      });

      // 0209 가은 (캘린더에 표시 -> 할일 추가 되면 누적이 안됨)

      if (title) {
        calendar.addEvent({
          title: title,

          start: today,

          end: tomorrow,

          allDay: "true",
        });

        console.log("title : " + title);

        console.log("jsjsjsjsjsjs연동");
      }

      // 캘린더 랜더링

      calendar.render();
    };

    if (input.value !== "") {
      // 0209 가은 (캘린더 시간 쪼개기)

      const temp = planDate.value;

      const todaytemp = new Date(temp);

      const today = new Date(todaytemp);

      const tomorrow = new Date(todaytemp);

      tomorrow.setDate(todaytemp.getDate() + 1);

      console.log(today);

      console.log(tomorrow);

      // 0209 가은 (캘린더 추가 함수)

      AddCalendarEvent(input.value, today, tomorrow);

      console.log("plz");

      const item = document.createElement("div");
      item.setAttribute("id", "planItem");

      // 체크박스

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = "planCheckbox";
      // text
      const text = document.createElement("span");
      text.id = "text";
      // 제거하기 버튼
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "삭제";
      deleteButton.id = "deleteButton";
      // 수정하기 버튼
      const editButton = document.createElement("button");
      editButton.textContent = "수정";
      editButton.id = "editButton";

      text.textContent = input.value;
      input.value = "";

      item.appendChild(checkbox);
      item.appendChild(text);
      item.appendChild(deleteButton);

      item.appendChild(editButton);

      todoList.appendChild(item);

      // console.log(todoList.value);

      // 체크박스 이벤트 리스너

      checkbox.addEventListener("change", (event) => {
        if (event.currentTarget.checked) {
          // text.style.textDecoration = "line-through";
        } else {
          text.style.textDecoration = "none";
          sort(); // 목록을 가장 밑으로 이동
        }
      });

      //수정하기
      editButton.addEventListener("click", (event) => {
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = text.textContent;
        item.replaceChild(editInput, text);
        editInput.focus();
        editInput.addEventListener("keypress", (event) => {
          if (event.keyCode === 13) {
            text.textContent = editInput.value;
            item.replaceChild(text, editInput);
          }
        });
      });

      // 제거하기 버튼 클릭 이벤트 리스너
      deleteButton.addEventListener("click", (event) => {
        todoList.removeChild(event.currentTarget.parentNode);
      });
      input.value = "";
      alert.textContent = "";
    } else alert.textContent = "플랜이 입력되지 않았어요!";
  };

  addButton.addEventListener("click", addTodo);

  // 할 일 입력창에서 enter key가 눌렸을 때
  input.addEventListener("keypress", (event) => {
    const ENTER = 13; //enter의 keycode가 13
    if (event.keyCode === ENTER) addTodo();
  });
});
