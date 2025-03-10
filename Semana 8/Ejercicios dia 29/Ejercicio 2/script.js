function pintarCuadrado() {
    for (let i = 0; i < 5; i++) {
        str="";
        for (let j = 0; j < 5; j++) {
            str+="*";
        }
        console.log(str);
    }
}

pintarCuadrado();