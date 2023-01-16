import { useNavigate } from "react-router-dom";

export default function Weekend(){

    const movePage = useNavigate();
    let turn = Number(window.localStorage.getItem('turn'));

    function move(){
        window.localStorage.setItem('turn', ++turn);
        movePage('/');
    }

    return(
        <div>
            <h1>~~주말~~</h1>
            <h3>졸업식까지 D-{14-turn}</h3>   
            <button onClick={move}>돌아가기</button>
        </div>
    )
}