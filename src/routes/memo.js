import React, {createRef, useEffect} from "react";

function Draw(props){
    let canvas;
    let canvasRef = createRef();

    let pos = {
        drawable:false,
        x:-1,
        y:-1,
    };

    let ctx;
}

useEffect(()=>{
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    canvas
})