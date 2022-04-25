const Helpers = (function () {
    const add_to_DOM = function (parent, child, placement) {
        if (!(placement === "first" || placement === "last")) return;

        if (placement === "first") {
            parent.prepend(child);
        } else {
            parent.append(child);
        }
    };

    const purge_all_children = function (parent) {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    };

    const create_DOM = function (type, ...classes) {
        const element = document.createElement(type);

        if (classes) {
            // TIL you cant use the word class for a variable
            classes.forEach((clas) => {
                element.classList.add(clas);
            });
        }

        return element;
    };

    const create_todo = function (text) {
        const all_todos = document.querySelector(".todos");

        const todo = Helpers.create_DOM("div", "todo");
        Helpers.add_to_DOM(all_todos, todo, "last");

        const title = Helpers.create_DOM("div", "title");
        title.textContent = `${text}`;
        Helpers.add_to_DOM(todo, title, "first");

        const options = Helpers.create_DOM("div", "options");
        Helpers.add_to_DOM(todo, options, "last");

        const rmv_btn = Helpers.create_DOM("button", "remove_todo");
        rmv_btn.innerHTML = "&times;";
        Helpers.add_to_DOM(options, rmv_btn, "last");
    };

    return {
        add_to_DOM,
        purge_all_children,
        create_DOM,
        create_todo,
    };
})();

export { Helpers };
