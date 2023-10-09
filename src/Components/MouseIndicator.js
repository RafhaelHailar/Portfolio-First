import { useEffect } from "react";

const targets = [];

function addTarget(target,action,unTarget) {
    if (targets.some(tg => tg.target == target)) 
        return;

    targets.push([target,action,unTarget]);
}

const MouseIndicator = () => {
    useEffect(
        function() {
            const wall = document.querySelector("#projects .wall .wallshow");
            const projects_container = document.querySelector("#projects .projects-container");
            const projects = document.querySelectorAll("#projects .project");   

            (function() {
                let buttons = document.querySelectorAll("button");
                let as = document.querySelectorAll("a");
                let input_buttons = document.querySelectorAll("input[type='button']");

                let call_actions = [...buttons,...as,...input_buttons,...projects];
                console.log(call_actions)
                for (let i = 0;i < call_actions.length;i++) {
                    let target = call_actions[i];

                    let unTarget = () => {};
                    let action = () => {};

                    if (target.parentElement == projects_container) {
                        const image = target.querySelector("img");
                         action = function(x,y) {
                            const image_box = target.getBoundingClientRect();
                            image.style.top =  y - image_box.y + 20 + "px";
                            image.style.left =  x - image_box.x - image_box.width / 2 + "px";
                            image.classList.remove("hide");
                            target.style.zIndex = 99;
                        }
                         unTarget = function() {
                            image.classList.add("hide");
                            target.style.zIndex = 1;
                        }
                    }

                    if (target.parentElement == document.querySelector(".actions")) console.log("YAPIPI")
            
                    addTarget(target,action,unTarget);
                }
            })();

            const mouse_indicator = document.querySelector(".mouse_indicator .inner_circle");
            const mouse_follower = document.querySelector(".mouse_indicator .outer_circle");
            const mouse_follower_box = mouse_follower.getBoundingClientRect();
            
            /* Cursor */
            window.addEventListener("mousemove",function(event) {
                const mouse_indicator_box = mouse_indicator.getBoundingClientRect();
                mouse_indicator.style.transform = `translate(${event.pageX - mouse_indicator_box.width / 2}px,${event.pageY - mouse_indicator_box.height / 2}px)`;
                let text = `translate(${event.pageX - mouse_follower_box.width / 2}px,${event.pageY - mouse_follower_box.height / 2}px)`;

                let x = mouse_indicator_box.x;
                let y = mouse_indicator_box.y;
                
                for (let i = 0;i < targets.length;i++) {
                    let [target,action,unTarget] = targets[i];
                    const target_box = target.getBoundingClientRect();
                    if (x > target_box.x && x < target_box.x + target_box.width && y > target_box.y && y < target_box.y + target_box.height && !(projects_container.style.zIndex == -1 && !target.classList.contains("prevProjLink"))) {
                        action && action(mouse_indicator_box.left,mouse_indicator_box.top,mouse_follower);
                        text += `scale(1.5)`;
                    } else unTarget && unTarget();
                }
                
                mouse_follower.style.transform = text;
            });

            window.onclick = function(event) {
                for (let i = 0;i < projects.length;i++) {
                    if (event.target == projects[i]) {
                        const target_box = event.target.getBoundingClientRect();
                        wall.style.left = target_box.x + (target_box.width / 2) + "px";
                        wall.style.top = target_box.y + (target_box.height / 2) + "px";
                        wall.parentElement.style.zIndex = 0;  
                        projects_container.style.zIndex = -1;
                        document.body.style.overflow = "hidden";
                        document.querySelector("#about").style.zIndex = -1;
                        document.querySelector("#contact").style.zIndex = -1;
                        wall.style.transform = "scale(200)";
                        setTimeout(() => {
                            wall.classList.add("hide");
                            document.querySelector("#projects .project-preview").classList.remove("hide");
                            document.querySelector("#projects .project-preview .project-target").style.transition = "opacity 1s";
                            setTimeout(() => {
                                document.querySelector("#projects .project-preview .project-target").style.opacity = 1;
                            },1);
                        },1000);
                    }
                }
            }

            document.querySelector(".gotoProjectsBtn").onclick = function() {
                const projects_container = document.querySelector("#projects .projects-container");
                        document.querySelector("#projects .project-preview .project-target").style.transition = "0 opacity";
                        document.querySelector("#projects .project-preview .project-target").style.opacity = 0;
                        document.querySelector("#projects .project-preview").classList.add("hide");
                        wall.classList.remove("hide");
                        setTimeout(() => {
                             wall.style.transform = "scale(0)";
                        })
                        setTimeout(() => {
                            wall.parentElement.style.zIndex = -1;  
                            projects_container.style.zIndex = 0;
                            document.body.style.overflowY = "scroll";
                            document.querySelector("#about").style.zIndex = 0;
                            document.querySelector("#contact").style.zIndex = 0;
                        },1000);
            }
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