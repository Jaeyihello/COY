import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Place({title, backImg, where, count}) {
    const navigate = useNavigate();
    
    let ppNum;
    let turn = window.localStorage.getItem('turn');

    const onClickPlaceItem = () => {
        window.localStorage.setItem('turn', ++turn);
        navigate(`/${title}`, {state : {where : where, ppNum : ppNum}})
    }
    
    switch(title){
        case 'classroom' : ppNum = count[2]; break;
        case 'hallway' : ppNum = count[4]; break;
        case 'library' : ppNum = count[1]; break;
        case 'music' : ppNum = count[5]; break;
        case 'art' : ppNum = count[3]; break;
        case 'gym' : ppNum = count[0]; break;
    }
    
    return (
        <div className='place-container'>
            <img src={backImg} alt="배경" />
            <div className='place-info' onClick={onClickPlaceItem} >
                <h4>{title}</h4>
                <h4>{ppNum}명</h4>
            </div>
        </div>
    )
}