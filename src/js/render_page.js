import { projects } from "./new_todo";

const render_page = function () {
    projects.forEach((project) => {
        console.log(project.todos);
        project.todos.forEach((todo) => {
            console.log(todo);
        });
    });
};

export { render_page };
