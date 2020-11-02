const countingNumber = document.querySelector('.count-number');
const section1Title = document.querySelector('.sec1-title');
const section1BottomList = document.querySelector('.sec1-bottom-nav');

const section2 = document.querySelector('.sec2');
const section3 = document.querySelector('.sec3');
const section4 = document.querySelector('.sec4');
const section5 = document.querySelector('.sec5');

const navList1 = document.querySelector('.item1');
const navList2 = document.querySelector('.item2');
const navList3 = document.querySelector('.item3');
const navList4 = document.querySelector('.item4');


  // 메인화면 숫자 로딩, 글자 이벤트
(function counting() {
    let number = 0;

    counterFn();

    function counterFn() {
        const timer = setInterval( countFn, 10);
        const timer2 = setInterval( countFn2, 700);

        function countFn() {
            number++;
            if(number > 96) {
                countingNumber.innerHTML = `${number}%`;
                clearInterval(timer);
            }
            else {
                countingNumber.innerHTML = `${number}%`;
            }
        }

        function countFn2() {
            number++;
            if(number > 100) {
                clearInterval(timer2);
                setTimeout(()=> {
                    countingNumber.style.display = "none";
                    section2.classList.remove("hidden");
                    section3.classList.remove("hidden");
                    section4.classList.remove("hidden");
                    section5.classList.remove("hidden");
                    section1Title.classList.remove("hidden");  
                    section1Title.classList.add("animated","fadeInDown", "delay-1s");
                    navList1.classList.remove("hidden");  
                    navList2.classList.remove("hidden");  
                    navList3.classList.remove("hidden");  
                    navList4.classList.remove("hidden");  
                    navList1.classList.add("animated", "fadeIn", "delay-2s");
                    navList2.classList.add("animated", "fadeIn", "delay-3s");
                    navList3.classList.add("animated", "fadeIn", "delay-4s");
                    navList4.classList.add("animated", "fadeIn", "delay-5s");
                } ,1700)   
            }
            else {
                countingNumber.innerHTML = `${number}%`;
            } 
        }
    }
})();



  // 메뉴바 이벤트
window.addEventListener("scroll", ()=>{
    if(this.scrollY > section2.offsetTop - 78) {
        section1BottomList.classList.add("fixed");
    } else {
        section1BottomList.classList.remove("fixed");
    }
})


  // Skill 수치 이벤트
const htmlItem = document.querySelector("#html");
const cssItem = document.querySelector("#css");
const javascriptItem = document.querySelector("#javascript");
const reactItem = document.querySelector("#react");
const nodeItem = document.querySelector("#node");
const percent = document.querySelector("#percent");
const explanation = document.querySelector("#explanation");
const arrow = document.querySelectorAll(".xi-angle-right");

htmlItem.addEventListener("mouseover", ()=> {
    percent.innerHTML = "95%";
    explanation.innerHTML = `
    <li>웹페이지를 구성하는 태그 요소들을 숙지하고 있습니다.</li>
    <li>상황에 따른 시맨틱 요소를 사용할 수 있습니다.</li>
    <li>이미지의 표현과 동영상 등 멀티미디어 지원태그 사용가능</li>
    <li>사용자와의 커뮤니케이션을 위한 폼 태그 사용가능</li>
    `
})

cssItem.addEventListener("mouseover", ()=> {
    percent.innerHTML = "95%";
    explanation.innerHTML = `
    <li>HTML로 구성한 요소들을 디자인 할 수 있습니다.</li>
    <li>셀렉터를 상황에 맞게 사용할 수 있습니다.</li>
    <li>display, position 등 적절하게 사용</li>
    <li>각종 애니메이션을 활용하여 구성할 수 있습니다.</li>
    <li>반응형으로 웹페이지를 제작할 수 있습니다.</li>
    `
})

javascriptItem.addEventListener("mouseover", ()=> {
    percent.innerHTML = "85%";
    explanation.innerHTML = `
    <li>자바스크립트의 기본개념과 동작원리를 알고 있습니다.</li>
    <li>상황에 따른 함수를 생성하여 사용할 수 있습니다.</li>
    <li>DOM객체를 활용하여 웹 요소들을 컨트롤 할 수 있습니다.</li>
    <li>스크립트 필수 문법 요소들을 숙지하고 있습니다.</li>
    <li>각종 api를 활용할 수 있습니다.</li>
    <li>동기식 비동기식 처리를 상황에 맞게 할 수 있습니다.</li>`
})

reactItem.addEventListener("mouseover", ()=> {
    percent.innerHTML = "80%";
    explanation.innerHTML = `
    <li>React 라이브러리의 동작원리를 알고 있습니다.</li>
    <li>SPA로 웹페이지를 제작할 수 있습니다.</li>
    <li>Class형, 함수형으로 컴포넌트를 제작할 수 있습니다.</li>
    <li>함수형 컴포넌트의 Hooks를 활용할 수 있습니다.</li>
    <li>다양한 Css방식을 적용할 수 있습니다.</li>
    `
})

nodeItem.addEventListener("mouseover", ()=> {
    percent.innerHTML = "70%";
    explanation.innerHTML = `
    <li>express를 통한 서버를 구축할 수 있습니다.</li>
    <li>Node를 이용하여 다양한 application을 설치 할 수 있습니다.</li>
    <li>서버와 데이터베이스를 연결하여 통신을 할 수 있습니다.</li>
    <li>서버와 클라이언트 간의 proxy설정을 통해 cors문제를 해결 할 수 있습니다.</li>`
})





