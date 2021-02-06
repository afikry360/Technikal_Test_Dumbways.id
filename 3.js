function cetakPola(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = panjang; j > 0; j--){
            if (j > i) {
                hasil += ' ';
            }else{
            hasil += '* ';
        }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(cetakPola(6));