function pintarCuadrado() {
    for (let i = 0; i < 5; i++) {
        str = "";
        for (let j = 0; j < 5; j++) {
            if (i == 0 || i == 4 || j == 0 || j == 4) {
                str += "**";
            }
            else {
                str += "  ";
            }
        }
        console.log(str);
    }
}

pintarCuadrado();