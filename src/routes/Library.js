import Artman from "../components/Artman";
import BFF from "../components/BFF";
import ClassPre from "../components/ClassPre";
import Libman from "../components/Libman";
import Trainee from "../components/Trainee";
import Volley from "../components/Volley";
import { useNavigate, useLocation } from "react-router-dom";

function Library() {
    const people = [<Volley/>, <Libman/>, <ClassPre/>, <Artman/>, <BFF/>, <Trainee/>];
    let newPeople = [];
    const location = useLocation();
    const movePage = useNavigate();
    function move(){
        movePage('/');
    }

    console.log(location.state.ppNum);

    if(location.state.ppNum === 0)
        return (
            <div>
                <h1>0</h1>
            <button onClick={move}>돌아가기</button>
            </div>
        )
    
    else if(location.state.ppNum === 1){
        for(let i=0; i<location.state.where.length; i++) {
            if(location.state.where[i] === 1) {
                return (
                    <div>
                        {people[i]}
                        <button onClick={move}>돌아가기</button>
                    </div>
                )
            }
        }
    }


    for(let i=0; i<location.state.where.length; i++) {
        if(location.state.where[i] === 1) {
            newPeople = [...newPeople, people[i]];
            
        }
    }
    return (
        <div>
            {newPeople.map(person => (person))}
            <button onClick={move}>돌아가기</button>
        </div>
    )
}

export default Library;