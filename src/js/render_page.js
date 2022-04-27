import { Helpers } from "./helpers";
import { Manage_buttons } from "./manage_buttons";
import { manage_modal } from "./modal_popup";
import { projects } from "./new_todo";

const render_page = function (pj) {
    if (!pj) return;

    const todos = document.querySelector(".todos");
    Helpers.purge_all_children(todos);

    const projs = document.querySelector(".projects");
    Helpers.purge_all_children(projs);

    const home = Helpers.create_DOM("button", "project");
    home.textContent = "Home";
    Helpers.add_to_DOM(projs, home, "first");

    const render_projects = function (p) {
        const proj = Helpers.create_DOM("button", "project");
        proj.textContent = `${p.name}`;
        Helpers.add_to_DOM(projs, proj, "last");
    };

    if (pj === "Home") {
        projects.forEach((project) => {
            render_projects(project);
            project.todos.forEach((todo) => {
                Helpers.create_todo(todo.title);
            });
        });
    } else {
        projects.forEach((project) => {
            render_projects(project);
            if (!(pj === project.name)) return;

            project.todos.forEach((todo) => {
                Helpers.create_todo(todo.title);
            });
        });
    }

    const new_todo_btn = Helpers.create_DOM("div", "new_todo_btn");
    Helpers.add_to_DOM(todos, new_todo_btn, "last");

    const actual_btn = Helpers.create_DOM("button");
    actual_btn.setAttribute("data_open_modal", "");
    actual_btn.textContent = "New todo";
    Helpers.add_to_DOM(new_todo_btn, actual_btn, "first");

    console.log(projects);

    Manage_buttons.projs();

    manage_modal();
};

export { render_page };
