import "../css/todo.css";
import { Todo } from "./new_todo";
import { render_page } from "./render_page";
import { manage_form } from "./modal_popup";
import { Helpers } from "./helpers";

const init = (function () {
    Helpers.create_project("Project1", 1);
    Helpers.create_project("Project2", 2);

    let a = Todo("a", "cool", "now", "medium");
    a.add_to("Project1");

    let b = Todo("b");
    b.add_to("Project2");

    let c = Todo("c", "Very cool", "not now");
    c.add_to("Project2");

    render_page("Home");

    manage_form();
})();
