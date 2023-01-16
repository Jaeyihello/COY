import { Navigate, useNavigate } from "react-router-dom";
import { whereToGo, ppCount } from "../GiveRandom";
import { setGame } from "../setting.js";

function Title() {

    const maxTurn = 14; //최대 턴 수
    let turn = Number(window.localStorage.getItem('turn')); //현재 턴 가져옴

    if(turn === null){
        turn = 0;
    }//가져올 턴이 없으면 새로 시작하는거라는 뜻
    
    if(window.localStorage.getItem('lovers')===null){
        setGame();
    }//게임 시작할 때 맨 처음에만 setGame 실행

    const navigate = useNavigate();
    let where = whereToGo();
    let count = ppCount(where);
    const go2Home = () => {
        navigate("/home", {
            state:  {
                where: where,
                count: count,
            }
        });
        console.log(where);
        console.log(count);

    }

    if(turn<maxTurn){//현재 턴수가 최대 턴수보다 작으면 홈 화면 렌더링{
        
        if(turn === 5 || turn === 6 || turn === 12 || turn === 13){
            return(
                <Navigate to="/weekend" />
            )
        }
        else{
            return (
                <div>
                    <h3>졸업식까지 D-{14-turn}</h3>
                    <button onClick={go2Home}>start</button>
                </div>
        
            )
        }
    }
    else{//최대 턴수만큼 이동했으면 앤서 화면으로 이동
        return(
            <Navigate to="/answer" />
        )
    }

        
        
    
}
export default Title;

