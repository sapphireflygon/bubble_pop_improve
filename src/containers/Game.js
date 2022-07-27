import React, { useState, useMemo } from "react";
import BubbleStage from '../components/BubbleStage';
import Bubble from '../components/Bubble'

const Game = ({ready, toggleReady, setScore}) => {

    const [bubbleCount, setBubbleCount] = useState(200);

    const getRandomPosition = () => {
        const x = 100;
        const y = 150;
        const randomX = Math.floor(Math.random() * x);
        const randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }
    
    const getBubbleStyle = (index) => {
        const xy = getRandomPosition();
        const styles = {
            left: xy[1] + 2 + "vh",
            top: xy[0] + "vw",
            zIndex: index,
            animation: "float 20s linear infinite both",
            animationDuration: Math.floor(Math.random() * 15 + 7.5) + "s"
        }
        return styles;
    }
    
    const popBubble = (event) => {
        setScore(prevScore => prevScore+1)
        event.preventDefault();
        const bubble = event.target;
        const audio = document.getElementById("pop");
        bubble.style.setProperty("animation", "popped .3s ease-out both");
        audio.play();
        setTimeout(function() {
            bubble.style.display = "none";
        }, 500);
    }


    const renderBubbles = useMemo(() => {
        const arr = [...Array(bubbleCount)].map((bubble, index) => (
            bubble = <Bubble key={index} pop={popBubble} style={getBubbleStyle(index)}/>
        ));
        return [...arr];
    }, [bubbleCount, ready])
    

    return (
        <>
            <div className="stage">

                {ready ? (
                        <BubbleStage renderBubbles={renderBubbles} />
                ) : (
                    <button className="bubble-btn" onClick={toggleReady}>Ready</button>
                )}
            </div>
        </>
    )
}

export default Game;