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
            });
        });
    };

    return {
        projs,
        remove_todo,
    };
})();

export { Manage_buttons };
