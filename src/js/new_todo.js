import { Helpers } from "./helpers";

let projects = [];

const Todo = function (title, description, due_date, priority, project) {
    const prototype = (function () {
        const add_to = function (pj = project) {
            projects.forEach((proj, index) => {
                proj.id = index;
                if (proj.name === pj) {
                    if (!proj.todos.includes(this)) {
                        proj.todos.push(this);
                    }
                }
            });
        };

        return {
            add_to,
        };
    })();

    ////

    return Object.assign(Object.create(prototype), {
        title,
        description,
        due_date,
        priority,
    });
};

export { Todo, projects };
