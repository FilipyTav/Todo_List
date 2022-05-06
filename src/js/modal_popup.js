import { Helpers } from "./helpers";
import { Todo } from "./new_todo";
import { parseISO, isBefore, isToday } from "date-fns";
import { render_page } from "./render_page";
import { Manage_buttons } from "./manage_buttons";

// Functionality for the modal(new todo input)
const manage_modal = function () {
    // Overlay and the button for opening the modal
    const open_modal_button = document.querySelector("[data_open_modal]");
    const overlay = document.querySelector("#overlay");

    // The modal is closed if the overlay is clicked
    overlay.addEventListener("click", () => {
        const modal = document.querySelector("#modal_add_book.active");

        close_modal(modal);
    });

    // The button opens the modal
    open_modal_button.addEventListener("click", () => {
        const modal = document.querySelector("#modal_add_book");

        open_modal(modal);
    });

    // Functions for opening and closing the modal
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

    // Button for confirming the input for the new todo
    const submit_btn = document.querySelector(".submit_btn button");

    // When clicked closes the modal
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

// Functionality for everything related to the form
const manage_form = function () {
    const form = document.querySelector("#todo_inputs");
    const submit_btn = document.querySelector(".submit_btn button");
    const priority_btn = document.querySelector("#priority_btn");

    // Set the characteristics of the buttons to the first priority when the page renders
    priority_btn.textContent = Manage_buttons.Pr.priorities[0].level;
    priority_btn.setAttribute(
        "style",
        `background: ${Manage_buttons.Pr.priorities[0].color}`
    );

    // Changes the color and value when clicked
    priority_btn.addEventListener("click", () => {
        Manage_buttons.Pr.activate_pr_btns(priority_btn);
    });

    // When trying to submit
    submit_btn.addEventListener("click", (e) => {
        // Stop the default behavior of the submit button
        e.preventDefault();

        // Get the input values of the form
        const data = new FormData(form);

        const today = Helpers.Current_date.full_date();

        // The title of the new todo
        const title = data.get("title").trim();

        // Validation
        if (!title) {
            alert("Invalid todo title");
            return;
        }

        // Description of the new todo
        // Note: optional
        const description = data.get("description").trim();

        let due_date = data.get("due_date");

        // Validation
        // Cannot be empty nor a day in the past
        if (!due_date) {
            alert("Must have a due date");
            return;
        }

        due_date = parseISO(due_date);

        // Date-fns considers today as before today (?)
        if (isBefore(due_date, today) && !isToday(due_date)) {
            alert("Due date must not have passed");
            return;
        }

        const priority = priority_btn.textContent;

        // Validation
        if (!priority) {
            alert("Invalid priority");
            return;
        }

        // The project the todo should go to
        const pj = data.get("pj");

        // Creates a new todo obj based on the input values
        const new_todo = Todo(title, description, due_date, priority);

        // Add to the project
        new_todo.add_to(pj);

        submit_btn.setAttribute("data_status", "true");

        form.reset();

        render_page(pj);
    });
};

export { manage_modal, manage_form };
