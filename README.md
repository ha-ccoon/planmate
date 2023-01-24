# 앨리스 IoT 트랙 1기 웹 프로젝트 '플랜메이트' 입니다.

# IA

# ERD

# Commit Convention
| 태그이름 | 설명 |
| ------ | ------ |
| [CHORE] | 코드 수정, 내부 파일 수정 |
| [FEAT] | 새로운 기능 구현 |
| [ADD] | FEAT 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 |
| [DEL] | 쓸모 없는 코드 삭제 |
| [FIX] | 버그, 오류 해결 |
| [MOVE] | 프로젝트 내 파일이나 코드의 이동 |
| [RENAME] | 파일 이름 변경이 있을 때 사용 |
| [IMPROVE] | 향상이 있을 때 사용 |
| [REFACTOR] | 전면 수정이 있을 때 사용 |
| [HOTFIX] | issue나 QA에서 급한 버그 수정에 사용 |
| [DOCS] | README나 WIKI 등의 문서 개정 |
| [CORRECT] | 주로 문법의 오류나 타입의 변경, 이름 변경에 사용 |


# Coding Convention
## - 변수명
    1. Lower Camel Case 사용
    2. 함수의 경우 동사+명사 사용 ex) getInformation()
    3. flag로 사용 되는 변수는 조동사 + flag 종류로 구성 ex) isNum
    4. 약어는 사용하지 않는 것을 원칙으로 한다. 부득이하게 약어가 필요하다고 판단되는 경우 팀원과 상의를 거친다.

## - Braket
**한줄 if 문은 여러 줄로 작성한다.**
```
// 한줄 if 문 - 여러 줄로 작성
 if(trigger) {
   return;
 }
```

**괄호는 한칸 띄우고 사용한다.**
```
// 괄호 사용 한칸 띄우고 사용한다.
 if (left == true) {
    return;
 }
```

**Bracket 양쪽 사이를 띄어서 사용한다.**
```
// 띄어쓰기
 if (a == 5) { // 양쪽 사이로 띄어쓰기
    return;  
 }
```
## - 비동기 함수의 사용
    1. async, await 함수 사용을 지향한다.
    2. Promise 사용은 지양한다.
    3. 다만 로직을 짜는 데 있어 promise를 불가피하게 사용할 경우, 주석으로 표시하고 commit에 그 이유를 작성한다.

-