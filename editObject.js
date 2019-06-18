// sepertinya spread operator ini gunanya untuk memecah satu per satu element dari suatu array atau string sehingga terbaca sebagai elemen yang berdiri sendiri 
let obj = [
	{
		name: "Tatas",
		company: "Arkademy",
		job: "Trainer",
		status: "single",
		city: "Jogja"
	},
	{
		name: "Pratama",
		company: "Emago",
		job: "Trainer",
		status: "single",
		city: "Jakarta"
	}
]

let objTata = {}, objTama = {}
obj.map(data => {
    if (data.name === "Tatas") {
        objTata = {...data, city: "Jakarta"}
    } else if (data.name === "Pratama") {
        objTama = {...data, company: "Arkademy", city: "Jogja", }
    }
})

obj[0] = objTata
obj[1] = objTama
console.log(obj)
