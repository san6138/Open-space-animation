let pass_button = document.getElementById("pass-button")
const password = document.getElementById("password")
let launch = document.getElementById("launch")
let levers = document.querySelectorAll(".lever")
let check_boxes= document.querySelectorAll(".check-box")
const check_password = function() {
    if (password.value == "1") {
        for (let element of check_boxes) {
            element.disabled = false;
        }
        for (let element of levers) {
            element.disabled = false;
        }
        pass_button.disabled = true;
        password.disabled = true;
    }
}

function launch_rocket() {
    rocket_element = document.querySelector(".rocket")
    rocket_element.classList.add("rocket-slide")
    setTimeout(() => rocket_element.remove(), 2000)

}
function check_settings() {
    let check = true

    for (let i = 0; i < levers.length; i++) {
        if (!check_boxes[i].checked || levers[i].value != 100) {
            check = false
            break
        }
    }
    if (!check_boxes[check_boxes.length - 1].checked) { check = false;}

    if (check) {
        document.getElementById("launch").disabled = false
    }
    else {
        document.getElementById("launch").disabled = true
    }
}

// register onchange property for all check_boxes and levers
for (let box of check_boxes) {
    box.onchange = check_settings;
}
for (let lever of levers) {
    lever.onchange = check_settings;
}

pass_button.addEventListener("click", check_password)
launch.addEventListener("click", launch_rocket)