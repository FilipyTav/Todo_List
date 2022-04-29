import "../css/todo.css";
import { Todo } from "./new_todo";
import { render_page } from "./render_page";
import { manage_form } from "./modal_popup";
import { Helpers } from "./helpers";

const init = (function () {
    Helpers.create_project("Today");
    Helpers.create_project("Next week");

    let a = Todo("a", "cool", new Date(2014, 6, 2), "medium");
    a.add_to("Today");

    let b = Todo("b", "dunno", new Date(2000, 1, 1), "Low");
    b.add_to("Next week");

    let c = Todo("c", "Very cool", new Date(2014, 11, 2), "High");
    c.add_to("Next week");

    render_page("All");

    manage_form();
})();
