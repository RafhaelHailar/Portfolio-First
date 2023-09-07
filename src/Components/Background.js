import {useState , useEffect} from "react";

const Background = () => {
    useEffect(
        () => {
            const container = document.getElementById("animatedBackground");
            const containerBox = container.getBoundingClientRect();
            const BallsAmount = 5;
            for (let i  = 0;i < BallsAmount;i++) {
                let ball = document.createElement("div");
                let size = containerBox.width * 0.3;
                let x = -size + Math.random() * (containerBox.width + size);
                let y = -size + Math.random() * (containerBox.height + size);
                let color = ["#6AD6CB","#ff0000"][i % 2];
                let scale = Math.random() * 0.8 + 0.2;
                ball.style.cssText = `
                    width : ${size}px;
                    height : ${size}px;
                    background : ${color};
                    transition : .01s linear;
                `;
                ball.className = "ball";
                setTimeout(() => ball.style.transform = `translate(${x}px,${y}px) scale(${scale})`,500);
                ball.addEventListener("transitionend",function() {
                    const ball = this;
                    const size = ball.getBoundingClientRect().width;
                    let x = -size + Math.random() * (containerBox.width + size);
                    let y = -size + Math.random() * (containerBox.height + size);
                    let scaleTo = Math.random() * 0.8 + 0.2;
                    ball.style.transition = `${10 + (1 - scaleTo) * 5 }s linear`;
                    ball.style.transform = `translate(${x}px,${y}px) scale(${scaleTo})`;
                });
                container.appendChild(ball);
            }
        },[]
    );
    return (
        <>
            <div id="animatedBackground">
                
            </div>
        </>
    );
}

export default Background;