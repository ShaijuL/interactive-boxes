function selectBox(element) {
    document.querySelectorAll(".box").forEach(box => {
        box.classList.remove("active");
        box.querySelector(".details").style.display = "none";
    });

    element.classList.add("active");
    element.querySelector(".details").style.display = "block";
}
