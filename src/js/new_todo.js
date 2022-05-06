// Array of all the projects
let projects = [];

// Creates a new todo
const Todo = function (title, description, due_date, priority, project) {
    // Prototype for each todo
    const prototype = (function () {
        // Adds to the specified project
        const add_to = function (pj = project) {
            // Iterates over all the projects
            projects.forEach((proj, index) => {
                // If the name matches the specified
                if (proj.name === pj) {
                    if (!proj.todos.includes(this)) {
                        // Add the todo into the project
                        proj.todos.push(this);

                        // And give it some initial values
                        this.id = proj.todos.length - 1;
                        this.status = "Yet to do";
                    }
                }
            });
        };

        return {
            add_to,
        };
    })();

    ////

    // Creates an obj with the given prototype
    return Object.assign(Object.create(prototype), {
        title,
        description,
        due_date,
        priority,
    });
};

export { Todo, projects };
