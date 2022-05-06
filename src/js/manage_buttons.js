import { Helpers } from "./helpers";
import { projects } from "./new_todo";
import { render_page } from "./render_page";

// Controls the functionality of the buttons on the page
const Manage_buttons = (function () {
    // The projects buttons
    const projs = function () {
        const buttons = document.querySelectorAll(".project");

        // For each button
        buttons.forEach((button, index) => {
            // Give it an identifier
            button.setAttribute("data_id", index);

            // If clicked, render the page matching the button
            button.addEventListener("click", (e) => {
                if (button.querySelector(".rmv_pj")) {
                    render_page(button.querySelector("div").textContent);
                    return;
                }

                render_page(button.textContent);
            });

            // Add the active class if hovered and remove it if not
            // That is used to make the button to remove the project appear

            button.addEventListener("mouseover", (e) => {
                if (button.querySelector(".rmv_pj")) {
                    const rmv_pj_btns = button.querySelector(".rmv_pj");
                    rmv_pj_btns.classList.add("active");
                }
                e.stopPropagation();
            });

            button.addEventListener("mouseout", (e) => {
                if (button.querySelector(".rmv_pj")) {
                    const rmv_pj_btns = button.querySelector(".rmv_pj");
                    rmv_pj_btns.classList.remove("active");
                }
            });
        });
    };

    // The buttons to remove a todo
    const remove_todo = function () {
        // All the remove todo buttons on the page
        const rmv_btns = document.querySelectorAll(".remove_todo");

        // For each of the remove buttons
        rmv_btns.forEach((button) => {
            // If clicked
            button.addEventListener("click", (e) => {
                // Get the todo in which the button is in
                const todo = e.target.closest(".todo");

                // And get this todo identifiers
                const todo_project = todo.getAttribute("data_project");
                const todo_id = parseInt(todo.getAttribute("id_in_project"));

                // Match the project identifier with the actual project in the arrat
                const this_project = projects.find(
                    ({ name }) => name === todo_project
                );

                // Remove the todo from the DOM
                todo.remove();

                // Get all the todos in the page
                const todos = document.querySelector(".todos");
                const todo_items = todos.querySelectorAll(".todo");

                // And look for other todos in the same project
                const in_same_pj = [];
                todo_items.forEach((td) => {
                    td.getAttribute("data_project") === todo_project
                        ? in_same_pj.push(td)
                        : (td = td);
                });

                // Remove the todo from the project
                this_project.todos.splice(todo_id, 1);

                // Reassign identifiers for todos in the project
                this_project.todos.forEach((td, index) => {
                    in_same_pj[index].setAttribute("id_in_project", index);
                    td.id = index;
                });
            });
        });
    };

    // The buttons to remove a project
    const remove_project = function () {
        // All the remove project buttons on the page
        const rmv_pj_btns = document.querySelectorAll(".rmv_pj");

        // For each button
        rmv_pj_btns.forEach((button) => {
            // When clicked
            button.addEventListener("click", (e) => {
                // Get its identifiers for id and project
                const this_project = button.closest(".project");
                const pj_id =
                    parseInt(this_project.getAttribute("data_id")) - 1;

                // Remove the project from the array
                projects.splice(pj_id, 1);
                setTimeout(() => {
                    render_page("All");
                }, 50);
            });
        });
    };

    // Buttons to create a new project
    const new_pj = function () {
        // Button to add a project
        const new_pj_btn = document.querySelector(".add_pj_btn");

        // Input for the name of the new project and the confirmation button
        const input = document.querySelector(".new_pj_name");
        const confirm = document.querySelector(".confirm_pj");

        // Adds the class .active to the input and confirmation when clicked
        new_pj_btn.addEventListener("click", () => {
            input.classList.toggle("active");
            confirm.classList.toggle("active");
        });

        // When the confirmation button is clicked
        confirm.addEventListener("click", () => {
            // Get the value of the name input
            const new_name = input.value.trim();

            // Confirm validity of the name
            if (!new_name) {
                alert("Invalid name");
                return;
            }

            // For now, the page(css) breaks if there are more then 9 todos in it at the same time
            // TODO: Fix this problem
            if (projects.length >= 9) return;

            // Adds the project to the array
            Helpers.create_project(new_name);
            render_page("All");
        });
    };

    // Manage the priorities in the todos
    // Probably should move it to another file
    const Pr = (function () {
        // The characteristics a priority should have
        const create_priority = function (level, color) {
            return {
                level,
                color,
            };
        };

        // Array of all the priorities currently available
        const priorities = [
            create_priority("Low", "#34ff34;"),
            create_priority("Medium", "#ffff41"),
            create_priority("High", "#ff3737"),
        ];

        // Functionality for the buttons for changing priority
        const activate_pr_btns = function (button) {
            // Iterates over all priorities
            for (let i = 0; i < priorities.length; i++) {
                // If the priority being displayed is the current in the iteration
                if (button.textContent === priorities[i].level) {
                    // If it is the last priority in the array
                    if (i === priorities.length - 1) {
                        // The first item will be considered the next, then change its priorities to it
                        // That ensures that it will loop
                        button.textContent = priorities[0].level;
                        button.setAttribute(
                            "style",
                            `background: ${priorities[0].color}`
                        );
                        break;
                    }

                    // Change the button priority to the next element in the array
                    button.textContent = priorities[i + 1].level;
                    button.setAttribute(
                        "style",
                        `background: ${priorities[i + 1].color}`
                    );
                    break;
                }
            }
        };

        return {
            activate_pr_btns,
            priorities,
        };
    })();

    // The buttons to change priority that is present in every todo item
    const priority_editable = function () {
        // All of such buttons
        const prs = document.querySelectorAll(".priority_ed");

        // For each of them
        prs.forEach((button) => {
            // Gets its representative todo in the page
            const todo = button.closest(".todo");

            // Along with its identifiers
            const project = todo.getAttribute("data_project");
            const pr_opt = todo.querySelector(".priority");
            const id_pj = parseInt(todo.getAttribute("id_in_project"));

            // When the button to change priority is clicked
            button.addEventListener("click", () => {
                // Adds it functionality on the page
                Pr.activate_pr_btns(button);

                // The current priority, project and todo in the array
                const this_priority = Pr.priorities.find(
                    ({ level }) => level === button.textContent
                );

                const this_project = projects.find(
                    ({ name }) => name === project
                );

                const this_todo = this_project.todos.find(
                    ({ id }) => id === id_pj
                );

                // Change the value of the todo in the array
                this_todo.priority = button.textContent;

                // Change the color of the rightmost circle in each todo
                pr_opt.setAttribute(
                    "style",
                    `background: ${this_priority.color}`
                );
            });
        });
    };

    return {
        projs,
        remove_todo,
        remove_project,
        new_pj,
        Pr,
        priority_editable,
    };
})();

export { Manage_buttons };
