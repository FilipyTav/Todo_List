import { render_page } from "./render_page";

const Manage_buttons = (function () {
    const projs = function () {
        const buttons = document.querySelectorAll(".project");

        buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
                render_page(e.target.textContent);
            });
        });
    };

    return {
        projs,
    };
})();

export { Manage_buttons };
