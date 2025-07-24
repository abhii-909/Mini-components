const panels = document.querySelectorAll(".panel");

function removeActiveClass() {
    panels.forEach(panel=> {
        panel.classList.remove("active");
    })
}

panels.forEach(panel=> {
    panel.addEventListener("click", (event)=> {
        removeActiveClass();
        event.target.classList.add("active");
    })
});

panels.forEach(panel => {
    panel.addEventListener("mouseleave", () => {
        panel.classList.remove("active");
    });
});