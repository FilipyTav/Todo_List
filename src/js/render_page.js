import { Helpers } from "./helpers";
import { projects } from "./new_todo";

const render_page = function () {
    const todos = document.querySelector(".todos");

    Helpers.purge_all_children(todos);

    projects.forEach((project) => {
        project.todos.forEach((todo) => {
            Helpers.create_todo(todo.title);
        });
    });
};

export { render_page };
