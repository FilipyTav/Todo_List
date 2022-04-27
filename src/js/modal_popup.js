import { Helpers } from "./helpers";
import { format, parseISO, isBefore, isToday } from "date-fns";

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
};

const manage_form = function () {
    const form = document.querySelector("#todo_inputs");

    const submit_btn = document.querySelector(".submit_btn button");

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
        console.log(description);
        let due_date = data.get("due_date");
        due_date = parseISO(due_date);

        if (isBefore(due_date, today) && !isToday(due_date)) {
            alert("Due date must not have passed");
        }
    });
};

export { manage_modal, manage_form };
