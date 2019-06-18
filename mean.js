let arr = [1,3,4,5,4,2,4,5,6,1,4,7,5,3,4,5,6,7,2,2,9,5,7,7,3,2]

function mean(input) {
    let total = 0
    input.forEach(data => {
        total += data
    });
    let mean = total / input.length
    return mean
}

function modus (input) {
    let value = [...new Set(input)]
    let cage = []
    for (let i = 0; i<value.length; i++) {
        let temp = []
        for (let j = 0; j<input.length; j++) {
            if (value[i] === input[j]) {
                temp.push(input[j])
            }
        }
        cage.push(temp)
    }

    let len = []
    cage.forEach(data => {
        len.push(data.length)
    })
    let mods = Math.max(...len)

    let finalModus = []
    cage.forEach(data => {
        if (data.length === mods) {
            finalModus.push(data[0])
        }
    })
    
    if (finalModus.length > 1) {
        return -1
    } else {
        return finalModus[0]
    }
}

function median (input) {
    // urutkan dulu lalu cari mediannya
    input = input.sort(function(a,b) {return a-b})

    if (input.length%2 == 0) {
        let lowerIndex = input.length/2 - 1
        let upperIndex = input.length/2
        let med = (input[lowerIndex] + input[upperIndex] / 2)
        return med
    } else {
        let indexMed = Math.floor(input.length/2)
        let med = input[indexMed]
        return med
    }
}
// median(arr)
console.log('mean', mean(arr))
console.log('median', median(arr))
console.log('modus', modus(arr))
