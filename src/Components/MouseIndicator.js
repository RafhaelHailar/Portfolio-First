import { useEffect } from "react";

const targets = [];

/* const projects = document.querySelectorAll("#projects .project");   
for (let i = 0;i < projects.length;i++) {
    let target = projects[i];
    const image = target.querySelector("img");
    console.log(target)
    let action = function(x,y) {
        image.style.left = x + "px";
        image.style.top = y + "px";
        image.classList.remove("hide");
    }
    let unTarget = function() {
        image.classList.add("hide");
    }

    targets.push([target,action,unTarget]);
} */

const MouseIndicator = () => {
    useEffect(
        function() {
            console.log(1)
            const mouse_indicator = document.querySelector(".mouse_indicator .inner_circle");
            const mouse_follower = document.querySelector(".mouse_indicator .outer_circle");
            const mouse_follower_box = mouse_follower.getBoundingClientRect();
            
            window.addEventListener("mousemove",function(event) {
                const mouse_indicator_box = mouse_indicator.getBoundingClientRect();
                mouse_indicator.style.transform = `translate(${event.pageX - mouse_indicator_box.width / 2}px,${event.pageY - mouse_indicator_box.height / 2}px)`;
                let text = `translate(${event.pageX - mouse_follower_box.width / 2}px,${event.pageY - mouse_follower_box.height / 2}px)`;

                let resume_button = document.querySelector(".resume-btn-con button");
                let resume_button_box = resume_button.getBoundingClientRect();

                let x = mouse_indicator_box.x;
                let y = mouse_indicator_box.y;

                if (x > resume_button_box.x && x < resume_button_box.x + resume_button_box.width && y > resume_button_box.y && y < resume_button_box.y + resume_button_box.height) {
                    text += `scale(2)`;
                }
                mouse_follower.style.transform = text;

                for (let i = 0;i < targets.length;i++) {
                    let [target,action,unTarget] = targets[i];
                    if (x > target.x && x < target.x + target.width && y > target.y && y < target.y + target.height) {
                        action(x,y);
                    } else unTarget();
                }
            });
        },[]
    )
    return (
        <>
            <div className="mouse_indicator">
                <div className="inner_circle">

                </div>
                <div className="outer_circle">

                </div>
            </div>
        </>
    );
}

export default MouseIndicator;