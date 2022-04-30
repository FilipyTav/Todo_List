import { projects } from "./new_todo";
import { render_page } from "./render_page";

const Manage_buttons = (function () {
    const projs = function () {
        const buttons = document.querySelectorAll(".project");

        buttons.forEach((button, index) => {
            button.setAttribute("data_id", index);
            button.addEventListener("click", (e) => {
                if (button.querySelector(".rmv_pj")) {
                    render_page(button.querySelector("div").textContent);
                    return;
                }

                render_page(button.textContent);
            });

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
                e.stopPropagation();
            });
        });
    };

    const remove_todo = function () {
        const rmv_btns = document.querySelectorAll(".remove_todo");

        rmv_btns.forEach((button) => {
            button.addEventListener("click", (e) => {
                const todo = e.target.closest(".todo");
                const todo_project = todo.getAttribute("data_project");
                const todo_id = parseInt(todo.getAttribute("id_in_project"));

                const this_project = projects.find(
                    ({ name }) => name === todo_project
                );

                todo.remove();

                const todos = document.querySelector(".todos");
                const todo_items = todos.querySelectorAll(".todo");
                const in_same_pj = [];
                todo_items.forEach((td) => {
                    td.getAttribute("data_project") === todo_project
                        ? in_same_pj.push(td)
                        : (td = td);
                });

                this_project.todos.splice(todo_id, 1);
                this_project.todos.forEach((td, index) => {
                    in_same_pj[index].setAttribute("id_in_project", index);
                    td.id = index;
                });
            });
        });
    };

    const remove_project = function () {
        const rmv_pj_btns = document.querySelectorAll(".rmv_pj");

        rmv_pj_btns.forEach((button) => {
            button.addEventListener("click", (e) => {
                const this_project = button.closest(".project");
                const pj_id =
                    parseInt(this_project.getAttribute("data_id")) - 1;

                projects.splice(pj_id, 1);
                setTimeout(() => {
                    render_page("All");
                }, 50);
            });
        });
    };

    return {
        projs,
        remove_todo,
        remove_project,
    };
})();

export { Manage_buttons };
