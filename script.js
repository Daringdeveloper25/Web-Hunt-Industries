var buttons = document.querySelectorAll(".tab-button");

var contents = document.querySelectorAll(".tab-content");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        var tab = button.dataset.tab;

        contents.forEach(function (content) {
            content.classList.remove("active");
        });

        buttons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        document.getElementById(tab).classList.add("active");

        button.classList.add("active");
    });

});

if (tab-button.active === true) {
    
}