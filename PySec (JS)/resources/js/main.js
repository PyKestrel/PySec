function overlayOn(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlaytwo").style.display = "block";
}

function overlayOff(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlaytwo").style.display = "none";
}

function change(){
    var algorithm = document.getElementById("algorithm").value;
    var password = document.getElementById("password");
    var passlabel = document.getElementById("passlabel");
    var decrypt = document.getElementById("decrypt");


    switch(algorithm){
        case "MD5":
            password.style.display = "none";
            passlabel.style.display = "none";
            decrypt.style.display = "none";
            break;
        case "SHA1":
            password.style.display = "none";
            passlabel.style.display = "none";
            decrypt.style.display = "none";
            break;
        case "SHA256":
            password.style.display = "none";
            passlabel.style.display = "none";
            decrypt.style.display = "none";
            break;
        case "SHA512":
            password.style.display = "none";
            passlabel.style.display = "none";
            decrypt.style.display = "none";
            break;
        case "SHA3":
            password.style.display = "none";
            passlabel.style.display = "none";
            decrypt.style.display = "none";
            break;
        case "RIPEMD160":
            password.style.display = "none";
            passlabel.style.display = "none";
            decrypt.style.display = "none";
            break;
        case "AES":
            password.style.display = "initial";
            passlabel.style.display = "initial";
            decrypt.style.display = "initial";
            break;
        case "DES":
            password.style.display = "initial";
            passlabel.style.display = "initial";
            decrypt.style.display = "initial";
            break;
        case "TripleDES":
            password.style.display = "initial";
            passlabel.style.display = "initial";
            decrypt.style.display = "initial";
            break;
        case "Rabbit":
            password.style.display = "initial";
            passlabel.style.display = "initial";
            decrypt.style.display = "initial";
            break;
        case "RC4":
            password.style.display = "initial";
            passlabel.style.display = "initial";
            decrypt.style.display = "initial";
            break;
        case "RC4Drop":
            password.style.display = "initial";
            passlabel.style.display = "initial";
            decrypt.style.display = "initial";
            break;
    }
}