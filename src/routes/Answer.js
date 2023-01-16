import { useState } from "react";
import { useNavigate } from "react-router-dom";

const names = ["짝꿍", "반장", "소꿉친구", "배구부", "미술부", "연습생"];
const places = ["체육관","도서관","교실","미술실","복도","음악실"];
const reasons = ["스며듦","첫사랑","독점욕","이상형","귀여움","호기심","동경","편안함","운명"];

export default function Answer(){

    const movePage = useNavigate();
    function move(){
        movePage('/ending', {state : {name:name, place:place, reason:reason}});
    }

    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [reason, setReason] = useState("");
    const onSelectName = (event) => {
        setName(names[event.target.value]);
    };
    
    const onSelectPlace = (event) => {
        setPlace(places[event.target.value]);
    };
    
    const onSelectReason = (event) => {
        setReason(reasons[event.target.value]);
    };

    return(
        <div>
            <h1>정답 입력</h1>
            <h3>편지를 보낸 사람은 누구입니까? {name}</h3>
            <select onChange={onSelectName}>
                <option value="0">짝꿍</option>
                <option value="1">반장</option>
                <option value="2">소꿉친구</option>
                <option value="3">배구부</option>
                <option value="4">미술부</option>
                <option value="5">연습생</option>
            </select>
            <h3>이 사람이 좋아하는 장소는 어디입니까? {place}</h3>
            <select onChange={onSelectPlace}>
                <option value="0">체육관</option>
                <option value="1">도서관</option>
                <option value="2">교실</option>
                <option value="3">미술실</option>
                <option value="4">복도</option>
                <option value="5">음악실</option>
            </select>
            <h3>이 사람이 좋아하는 사람을 좋아하는 이유는 무엇입니까? {reason}</h3>
            <select onChange={onSelectReason}>
                <option value="0">스며듦</option>
                <option value="1">첫사랑</option>
                <option value="2">독점욕</option>
                <option value="3">이상형</option>
                <option value="4">귀여움</option>
                <option value="5">호기심</option>
                <option value="6">동경</option>
                <option value="7">편안함</option>
                <option value="8">운명</option>
            </select>
            <p/>
            <button onClick={move}>정답 확인</button>
        </div>
    )
}