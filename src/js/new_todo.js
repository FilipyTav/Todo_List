let projects = [
    {
        name: "proj1",
        todos: [],
    },
    {
        name: "proj2",
        todos: [],
    },
];

const Todo = function (title, project, description, due_date, priority) {
    const prototype = (function () {
        const add_todo = function () {
            projects.forEach((proj) => {
                if (proj.name === project) {
                    proj.todos.push(this);
                }
            });
        };

        return {
            add_todo,
        };
    })();

    ////

    return Object.assign(Object.create(prototype), { title });
};

export { Todo, projects };
