const contents = document.querySelectorAll(".content");

const select = document.querySelector("form select");

select.addEventListener("change", () => {
    const idx = select.selectedIndex;
    hideAllContent();
    hideAllOptions();

    select.options[idx].classList.add("active");
    contents[idx].classList.add("show");
});

function hideAllContent() {
    contents.forEach(content => content.classList.remove("show"));
}

function hideAllOptions() {
    Array.from(select.options).forEach(option => option.classList.remove("active"));
}