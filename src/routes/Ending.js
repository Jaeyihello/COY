import { useNavigate, useLocation } from "react-router-dom";


function isCorrect(name, place, reason){

    const lovers = JSON.parse(window.localStorage.getItem('lovers'));
    const lover_num = Number(window.localStorage.getItem('lover_num'));
    
    console.log(lovers[lover_num].name, name);
    console.log(lovers[lover_num].place, place);
    console.log(lovers[lover_num].reason, reason);

    if(name === lovers[lover_num].name && place === lovers[lover_num].place && reason === lovers[lover_num].reason){
        return true;
    }
    return false;
}

export default function Ending(){

    const movePage = useNavigate();
    function move(){
        window.localStorage.removeItem('turn');
        window.localStorage.removeItem('lovers');
        window.localStorage.removeItem('lover_num');
        window.localStorage.removeItem('fake_num');
        movePage('/');
    }

    const location = useLocation();
    const name = location.state.name;
    const place = location.state.place;
    const reason = location.state.reason;

    let result = isCorrect(name, place, reason);
    console.log(result);

    if(result === true){
        return(
            <div>
                <h1>끝!</h1>
                <h3>정답입니다</h3>
                <button onClick={move}>처음으로</button>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>끝!!</h1>
                <h3>틀렸습니다</h3>
                <button onClick={move}>처음으로</button>
            </div>
        )
    }
    

}