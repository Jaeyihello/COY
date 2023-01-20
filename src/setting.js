
const lovers_len = 6;

const places = ["체육관","도서관","교실","미술실","복도","음악실"];
const reasons = ["스며듦","첫사랑","독점욕","이상형","귀여움","호기심","동경","편안함","운명"];

const lovers = [ //캐릭터별 장소, 이유, lover인지 아닌지, fakelover인지 아닌지, 대화를 해봤는지 아닌지
    {name:"배구부 선배", place:null, reason:null, lover:false, fake_lover:false, isMet:false},
    {name:"도서부 선배", place:null, reason:null, lover:false, fake_lover:false, isMet:false},
    {name:"반장", place:null, reason:null, lover:false, fake_lover:false, isMet:false},
    {name:"미술부장", place:null, reason:null, lover:false, fake_lover:false, isMet:false},
    {name:"절친", place:null, reason:null, lover:false, fake_lover:false, isMet:false},
    {name:"연습생", place:null, reason:null, lover:false, fake_lover:false, isMet:false},
]//isMet은 캐릭터와 처음 대화했을 때 true로 바꿔주면 됨

function shuffle(array) { //배열 셔플하는 함수(https://7942yongdae.tistory.com/96 복붙함)
    for (let index = array.length - 1; index > 0; index--) {
      const randomPosition = Math.floor(Math.random() * (index + 1));
      const temporary = array[index];
      array[index] = array[randomPosition];
      array[randomPosition] = temporary;
    }
  }

export const setGame = () => { 
//게임 처음 시작할 때 캐릭터별 장소, 이유 등 정답 세팅해서 로컬스토리지에 저장

    shuffle(places);
    shuffle(reasons);

    for(let i=0; i<lovers_len; i++){
        lovers[i].place = places[i];
        lovers[i].reason = reasons[i];
    }//캐릭터별로 장소, 이유 할당

    let lover_num = null;
    let fake_num = null;

    while(true){
        lover_num = Math.floor(Math.random()*lovers_len+1);
        fake_num = Math.floor(Math.random()*lovers_len+1);
        if(lover_num !== fake_num) break;  
    }//랜덤으로 두 수 선택

    lovers[lover_num].lover = true;
    lovers[fake_num].fake_lover = true;
    //lover, fakelover 할당

    console.log(lovers);//잘 되는지 확인용. 나중에 지워야함
    window.localStorage.setItem("lovers", JSON.stringify(lovers));//저장->End 화면에서 삭제
    window.localStorage.setItem("lover_num", lover_num);
    window.localStorage.setItem("fake_num", fake_num);
}
