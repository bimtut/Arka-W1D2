let cmmnd = [true, false, true, false,true, false,true, false,true, false,true, false,true, false,true, false,true, false,true, false,true, false,true, false,true, false,]
let str = "abcdefghijklmnopqrstuvwxyz"

function cetak(command) {
    let alpha = []
    for (let i = 0; i<str.length; i++) {
        alpha.push(str[i])
    }
    console.log(alpha)

    for (let j = 0; j<alpha.length; j++) {
        if (command[j] == true) {
            console.log(alpha[j])
        }
    }
}

cetak(cmmnd)