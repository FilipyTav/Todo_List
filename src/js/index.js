import "../css/todo.css";
import { Todo } from "./new_todo";
import { render_page } from "./render_page";
import { manage_form } from "./modal_popup";
import { Helpers } from "./helpers";

// Creates and loads an initial instance of the page
const init = (function () {
    // Default projects
    Helpers.create_project("Today");
    Helpers.create_project("Next week");

    // Default todos
    let a = Todo(
        "Stop procrastinating",
        "Gotta be more productive",
        new Date(),
        "High"
    );
    a.add_to("Today");

    let b = Todo("Continue T.O.P", "", new Date(2022, 5, 1), "Medium");
    b.add_to("Next week");

    let c = Todo("Do the laundry", "", new Date(2022, 11, 2), "Low");
    c.add_to("Next week");

    // Render all the todos by default
    render_page("All");

    manage_form();
})();
