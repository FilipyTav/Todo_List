import { Helpers } from "./helpers";
import { Manage_buttons } from "./manage_buttons";
import { manage_modal } from "./modal_popup";
import { projects, current_project } from "./new_todo";

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
                Helpers.create_todo(todo.title, project.name);
            });
        });
    } else {
        projects.forEach((project) => {
            render_projects(project);
            if (!(pj === project.name)) return;

            project.todos.forEach((todo) => {
                Helpers.create_todo(todo.title, project.name);
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

    const todo_item = document.querySelectorAll(".todo");

    const add_expaded_content = function (
        todo,
        tl,
        description,
        due_date,
        priority
    ) {
        todo.setAttribute("style", `flex-flow: column nowrap;`);

        const pj = todo.getAttribute("data_project");

        const project = projects.find(({ name }) => name === pj);
        const this_todo = project.todos.find(
            ({ title }) => title === tl.textContent
        );

        description.textContent = this_todo.description;

        due_date.textContent = this_todo.due_date;

        priority.textContent = this_todo.priority;
    };

    const remove_expaded_content = function (
        todo,
        tl,
        description,
        due_date,
        priority
    ) {
        todo.removeAttribute("style");

        description.textContent = "";

        due_date.textContent = "";

        priority.textContent = "";
    };

    todo_item.forEach((button) => {
        const title = button.querySelector(".title");
        const description = button.querySelector(".description");
        const due_date = button.querySelector(".due_date");
        const priority = button.querySelector(".priority");

        button.addEventListener("click", () => {
            if (!button.classList.contains("expanded")) {
                button.classList.add("expanded");

                setTimeout(() => {
                    add_expaded_content(
                        button,
                        title,
                        description,
                        due_date,
                        priority
                    );
                }, 125);
                return;
            }

            button.classList.remove("expanded");
            setTimeout(() => {
                remove_expaded_content(
                    button,
                    title,
                    description,
                    due_date,
                    priority
                );
            }, 125);
        });
    });
};

export { render_page };
