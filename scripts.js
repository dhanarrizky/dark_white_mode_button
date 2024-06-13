const btn = document.querySelector("#wd-btn");

btn.addEventListener("click", (e) => {
    if (btn.classList.contains('white-btn')) {
        btn.classList.remove('white-btn');
        btn.classList.add('dark-btn');
    } else {
        btn.classList.remove('dark-btn');
        btn.classList.add('white-btn');
    }
    console.log("test click");
});
