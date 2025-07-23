const textInput = document.querySelector('.input');

let generate = async () => {

    if (textInput.value.trim() === "") {
        alert("Enter Name or Search text")
        return
    }
    
    const url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + textInput.value;
    const response = await fetch(url);
    if (response.status === 200) {
        document.querySelector('img').setAttribute('src', url);
    }
}