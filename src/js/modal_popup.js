import { Helpers } from "./helpers";
import { Todo, projects } from "./new_todo";
import { parseISO, isBefore, isToday } from "date-fns";
import { render_page } from "./render_page";
import { Manage_buttons } from "./manage_buttons";

const manage_modal = function () {
    const open_modal_button = document.querySelector("[data_open_modal]");

    const overlay = document.querySelector("#overlay");

    overlay.addEventListener("click", () => {
        const modal = document.querySelector("#modal_add_book.active");

        close_modal(modal);
    });

    open_modal_button.addEventListener("click", () => {
        const modal = document.querySelector("#modal_add_book");

        open_modal(modal);
    });

    function open_modal(modal) {
        if (!modal) return;

        modal.classList.add("active");
        overlay.classList.add("active");
    }

    function close_modal(modal) {
        if (!modal) return;

        modal.classList.remove("active");
        overlay.classList.remove("active");
    }

    const submit_btn = document.querySelector(".submit_btn button");

    submit_btn.addEventListener("click", () => {
        setTimeout(() => {
            if (!!submit_btn.getAttribute("data_status")) {
                const modal = document.querySelector("#modal_add_book");
                close_modal(modal);
                submit_btn.setAttribute("data_status", "");
            }
        }, 50);
    });
};

const manage_form = function () {
    const form = document.querySelector("#todo_inputs");

    const submit_btn = document.querySelector(".submit_btn button");

    const priority_btn = document.querySelector("#priority_btn");

    priority_btn.textContent = Manage_buttons.Pr.priorities[0].level;
    priority_btn.setAttribute(
        "style",
        `background: ${Manage_buttons.Pr.priorities[0].color}`
    );

    priority_btn.addEventListener("click", () => {
        Manage_buttons.Pr.activate_pr_btns(priority_btn);
    });

    submit_btn.addEventListener("click", (e) => {
        e.preventDefault();

        const data = new FormData(form);

        const today = Helpers.Current_date.full_date();

        const title = data.get("title").trim();

        if (!title) {
            alert("Invalid todo title");
            return;
        }

        const description = data.get("description").trim();

        let due_date = data.get("due_date");
        if (!due_date) {
            alert("Must have a due date");
            return;
        }

        due_date = parseISO(due_date);

        if (isBefore(due_date, today) && !isToday(due_date)) {
            alert("Due date must not have passed");
            return;
        }

        const priority = priority_btn.textContent;

        if (!priority) {
            alert("Invalid priority");
            return;
        }

        const new_todo = Todo(title, description, due_date, priority);
        new_todo.add_to("Today");

        submit_btn.setAttribute("data_status", "true");

        form.reset();

        render_page("All");
    });
};

export { manage_modal, manage_form };
