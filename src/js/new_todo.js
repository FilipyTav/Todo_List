import { Helpers } from "./helpers";

let projects = [
    // {
    //     name: "proj1",
    //     todos: [],
    // },
    // {
    //     name: "proj2",
    //     todos: [],
    // },
];

const Todo = function (title, description, due_date, priority) {
    const prototype = (function () {
        const add_to = function (pj) {
            projects.forEach((proj) => {
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
