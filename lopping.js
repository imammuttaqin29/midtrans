const a = []
const b = []

for (var angka = 1; angka <= 100; angka++) {
    while (a.length > 0) {
        a.pop();
    }
    while (b.length > 0) {
        b.pop();
    }
    if ((angka % 2) == 1) {
        a.push( "ganjil" )
        if ((angka % 3) === 0) {
            b.push( "K3" )
        }
        else if ((angka % 4) === 0) {
            b.push( "K4" )
        }
        else if ((angka % 5) === 0) {
            b.push( "K5" )
        }
        else {
            b.push( "K0" )
        }
    }
    else if ((angka % 2) === 0) {
        a.push( "genap" )
        if ((angka % 3) === 0) {
            b.push( "K3" )
        }
        else if ((angka % 4) === 0) {
            b.push( "K4" )
        }
        else if ((angka % 5) === 0) {
            b.push( "K5" )
        }
        else {
            b.push( "K0" )
        }
    }
    console.log(a+" "+b);
}
