import { Helpers } from "./helpers";
import { Manage_buttons } from "./manage_buttons";
import { manage_modal } from "./modal_popup";
import { format } from "date-fns";
import { projects } from "./new_todo";

// Render all the todos of a project into the page
const render_page = function (pj = "All") {
    // The container for all todos in the page
    const todos = document.querySelector(".todos");
    // Remove its children
    Helpers.purge_all_children(todos);

    // Container for all the projects
    const projs = document.querySelector(".projects");
    // Remove its children
    Helpers.purge_all_children(projs);

    const all = Helpers.create_DOM("button", "project");
    all.textContent = "All";
    Helpers.add_to_DOM(projs, all, "first");

    // Function to render the projects buttons in the sidebar
    const render_projects = function (p) {
        // The project button and its name
        const proj = Helpers.create_DOM("button", "project");
        const actual_proj = Helpers.create_DOM("div");
        actual_proj.textContent = `${p.name}`;
        Helpers.add_to_DOM(proj, actual_proj, "first");
        Helpers.add_to_DOM(projs, proj, "last");

        // The remove project button
        const rmv_pj_btn = Helpers.create_DOM("button", "rmv_pj");
        rmv_pj_btn.innerHTML = `&times;`;
        Helpers.add_to_DOM(proj, rmv_pj_btn, "last");
    };

    // Adds the new pj btn to the page
    const render_new_pj_btn = function () {
        // Said button
        const add_pj_btn = Helpers.create_DOM("button", "add_pj_btn");
        add_pj_btn.textContent = "New project";
        Helpers.add_to_DOM(projs, add_pj_btn, "last");

        // What shall be the name of the new project
        const input = Helpers.create_DOM("input", "new_pj_name");
        input.setAttribute("type", "text");
        Helpers.add_to_DOM(projs, input, "last");

        // Button to confirm the name
        const confirm = Helpers.create_DOM("button", "confirm_pj");
        confirm.textContent = "OK";
        Helpers.add_to_DOM(projs, confirm, "last");
    };

    // What project should be rendered in the container
    if (pj === "All") {
        // If it is all
        projects.forEach((project, i) => {
            // Give an id to the todo
            project.id = i;

            //Render the buttons
            render_projects(project);

            // For each todo in each project
            project.todos.forEach((todo, index) => {
                // Create and add them to the page
                Helpers.create_todo(todo.title, project.name, index);
            });
        });
        render_new_pj_btn();
    } else {
        // If it's a specific one
        projects.forEach((project) => {
            // Render the buttons
            render_projects(project);

            // If the project is not the desired one, skip it
            if (!(pj === project.name)) return;

            // Render all todos of the project in the page
            project.todos.forEach((todo, index) => {
                Helpers.create_todo(todo.title, project.name, index);
            });
        });
        render_new_pj_btn();
    }

    // Render the new todo button
    const new_todo_btn = Helpers.create_DOM("div", "new_todo_btn");
    Helpers.add_to_DOM(todos, new_todo_btn, "last");

    const actual_btn = Helpers.create_DOM("button");
    actual_btn.setAttribute("data_open_modal", "");
    actual_btn.textContent = "New todo";
    Helpers.add_to_DOM(new_todo_btn, actual_btn, "first");

    manage_modal();

    // All the todos on the page
    const todo_item = document.querySelectorAll(".todo");

    // Expands the todo content when it is clicked
    const add_expaded_content = function (
        todo,
        tl,
        description,
        due_date,
        priority,
        this_priority
    ) {
        todo.setAttribute("style", `flex-flow: column nowrap;`);

        // Get the todo identifiers
        const pj = todo.getAttribute("data_project");
        const id_in_pj = parseInt(todo.getAttribute("id_in_project"));

        // Connect those identifiers to the projects array
        const project = projects.find(({ name }) => name === pj);

        // The todo obj in the array
        const this_todo = project.todos.find(({ id }) => id === id_in_pj);

        if (!this_todo) return;

        // Popuplate the previously empty spaces with info about the todo
        description.textContent = this_todo.description;

        due_date.textContent = format(this_todo.due_date, "yyyy/MM/dd");

        priority.textContent = this_todo.priority;
        priority.setAttribute("style", `background: ${this_priority.color}`);
    };

    // Removes all the extra content added by the function above
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

    // For each todo in the page
    todo_item.forEach((button) => {
        // Detail sections in the todo
        const title = button.querySelector(".title");
        const description = button.querySelector(".description");
        const due_date = button.querySelector(".due_date");
        const priority = button.querySelector(".priority");
        const priority_ed = button.querySelector(".priority_ed");

        // The checkbox to mark a todo as done
        const checkbox = button.querySelector(".progress");
        const label = button.querySelector(".progress_lbl");

        // Identifiers
        const pj = button.getAttribute("data_project");
        const id_in_pj = parseInt(button.getAttribute("id_in_project"));

        // The project and todos objects in the array
        const project = projects.find(({ name }) => name === pj);
        const this_todo = project.todos.find(({ id }) => id === id_in_pj);

        // The priority currently assigned to the todo
        const this_priority = Manage_buttons.Pr.priorities.find(
            ({ level }) => level === this_todo.priority
        );

        // Set the priority color
        priority.setAttribute("style", `background: ${this_priority.color}`);

        // When the todo is clicked
        button.addEventListener("click", (e) => {
            // Sets the priority color again when it changes
            const this_priority = Manage_buttons.Pr.priorities.find(
                ({ level }) => level === this_todo.priority
            );

            priority.setAttribute(
                "style",
                `background: ${this_priority.color}`
            );

            // Guarantees that the function only works when the todo is clicked, not its children
            if (e.target !== button) return;

            // If the todo is collapsed
            if (!button.classList.contains("expanded")) {
                // Expand it and add the extra content
                button.classList.add("expanded");

                setTimeout(() => {
                    add_expaded_content(
                        button,
                        title,
                        description,
                        due_date,
                        priority_ed,
                        this_priority
                    );
                }, 125);
                return;
            }

            // If it is already expanded
            // Collapse it and remove the extra content
            button.classList.remove("expanded");
            setTimeout(() => {
                remove_expaded_content(
                    button,
                    title,
                    description,
                    due_date,
                    priority_ed
                );
            }, 125);
        });

        // When the label is clicked
        checkbox.addEventListener("change", () => {
            // If the todo is not done yet
            if (checkbox.checked && this_todo.status !== "Done") {
                // Mark it as done, both in the page and in the array
                label.classList.add("done");
                button.classList.add("done");
                label.textContent = "X";
                this_todo.status = "Done";
            } else {
                // If it is already done
                // Mark it as undone, both in the page and in the array
                button.classList.remove("done");
                label.classList.remove("done");
                label.textContent = "";
                this_todo.status = "Yet to do";
            }
        });

        // Render the todo on the page as either done or undone, based on it status in the array
        if (this_todo.status === "Done") {
            label.classList.add("done");
            button.classList.add("done");
            label.textContent = "X";
        }
    });

    // Adds the functionality to a variety of buttons on the page
    Manage_buttons.projs();
    Manage_buttons.remove_todo();
    Manage_buttons.remove_project();
    Manage_buttons.new_pj();
    Manage_buttons.priority_editable();
};

export { render_page };
