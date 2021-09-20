hljs.highlightAll();

document.getElementById("trigger").addEventListener('click', () => {
    document.getElementById("menu").classList.toggle("show");
});

window.onresize = function () {
    if (document.getElementById("menu").classList.contains('show')) {
        document.getElementById("menu").classList.toggle("show");

    }
};
document.querySelectorAll('.item-menu').forEach((el) => {
    el.addEventListener('click', (event) => {
        if (document.getElementById("menu").classList.contains('show')) {
            document.getElementById("menu").classList.toggle("show");
        }
    })
})




