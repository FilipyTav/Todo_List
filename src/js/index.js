import "../css/todo.css";
import { Todo, projects, create_todo } from "./new_todo";
import { render_page } from "./render_page";
import { manage_modal } from "./modal_popup";
import { Helpers } from "./helpers";

const init = (function () {
    manage_modal();

    for (let i = 0; i < 5; i++) {
        Helpers.create_todo("Finally");
    }
})();

let a = Todo("a", "proj1");
a.add_todo();
console.log(a);

let b = Todo("b", "proj2");
b.add_todo();
console.log(b);

console.log(projects);
render_page();
