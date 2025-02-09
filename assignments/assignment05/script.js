document.getElementById("hello-button").onclick = () => {
    document.getElementById("say-hello").innerHTML += "hello ";
};

document.getElementById("image-to-change").onclick = () => {
    let img = document.getElementById("image-to-change");

    if (img.src == "https://picsum.photos/id/1/200/200") {
        img.src = "https://picsum.photos/id/30/200/200";
    } else if (img.src == "https://picsum.photos/id/30/200/200") {
        img.src = "https://picsum.photos/id/28/200/200";
    } else if (img.src == "https://picsum.photos/id/28/200/200") {
        img.src = "https://picsum.photos/id/24/200/200";
    } else {
        img.src = "https://picsum.photos/id/1/200/200"; 
    }
    img.src = img.src
};

document.getElementById("color-picker").oninput = () => {
    document.getElementById("star-icon").style.color = document.getElementById("color-picker").value;
};