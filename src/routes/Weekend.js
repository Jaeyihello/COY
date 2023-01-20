import { useState } from "react";
import { useNavigate } from "react-router-dom";
//첫번째 만났을 때 isMet 바꾸는거 추가해야함

export default function Weekend(){

    const lovers = JSON.parse(window.localStorage.getItem('lovers'));
    
    const movePage = useNavigate();
    let turn = Number(window.localStorage.getItem('turn'));

    function move(){
        window.localStorage.setItem('turn', ++turn);
        movePage('/');
    }

    const [who, setWho] = useState(true); //질문할 사람 띄우는 변수
    const [Q, setQ] = useState(false); //질문 띄우는 변수
    const [hint, setHint] = useState(false) //힌트 띄우는 변수
    
    const [people, setPeople] = useState(null); //질문할 사람 저장
    const [answer, setAnswer] = useState(''); //대답 저장
    
    function calling(index){
        setPeople(index);
        setWho(false);
        setQ(true);
    }
    console.log(people);

    function question(index){

        switch(index){
            case 0 : lovers[people].lover ? setAnswer("그래 널 좋아해") : setAnswer("널 좋아하지 않아")
                    break;
            case 1 : setAnswer(`나는 ${lovers[people].place}을(를) 좋아해`);
                    break;
            case 2 : setAnswer(`나는 ${lovers[people].reason} 때문에 그 사람을 좋아해`);
                    break;  
        }
        setQ(false);
        setHint(true);
    }

    return(
        <div>
            <h1>~~주말~~</h1>
            <h3>졸업식까지 D-{14-turn}</h3>
            { who ?
                <div>
                    <h3>전화할 사람?</h3>
                    <h4 onClick={() => calling(0, )}>배구부 선배</h4>
                    <h4 onClick={() => calling(1)}>도서부 선배</h4>
                    <h4 onClick={() => calling(2)}>반장</h4>
                    <h4 onClick={() => calling(3)}>미술부장</h4>
                    <h4 onClick={() => calling(4)}>절친</h4>
                    <h4 onClick={() => calling(5)}>연습생</h4>
                </div>
                : null
            }
            {
                Q ? 
                <div>
                    <h3>어떤 질문을 하시겠습니까?</h3>
                    <h4 onClick={() => question(0)}>나한테 편지를 보냈는가?</h4>
                    <h4 onClick={() => question(1)}>좋아하는 장소가 어디인가?</h4>
                    <h4 onClick={() => question(2)}>좋아하는 사람을 좋아하는 이유가 무엇인가?</h4>
                </div> 
                : null
            }
            {
                hint ?
                <div>
                    <h4>{answer}</h4>
                    <button onClick={move}>돌아가기</button>
                </div>
                : null
            }
        </div>
    )
}