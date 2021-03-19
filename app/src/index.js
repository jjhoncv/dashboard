document.body.style.backgroundColor = "green";

const message = () => {
    return {
        text: 4
    }
}

document.getElementById("root").innerHTML = message().text;
