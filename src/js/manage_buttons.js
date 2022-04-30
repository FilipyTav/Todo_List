import { projects } from "./new_todo";
import { render_page } from "./render_page";

const Manage_buttons = (function () {
    const projs = function () {
        const buttons = document.querySelectorAll(".project");

        buttons.forEach((button, index) => {
            button.setAttribute("data_id", index);
            button.addEventListener("click", (e) => {
                render_page(e.target.textContent);
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

                // const this_todo = this_project.todos.find(
                //     ({ id }) => id === todo_id
                // );

                this_project.todos.splice(todo_id, 1);
                this_project.todos.forEach((td, index) => {
                    in_same_pj[index].setAttribute("id_in_project", index);
                    td.id = index;
                });
            });
        });
    };

    return {
        projs,
        remove_todo,
    };
})();

export { Manage_buttons };
