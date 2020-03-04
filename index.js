var array = [1,2,4,5,7,8]

function numbArray(arg) {
	var empty = []
	for(var i = 0;i<arg.length; i++) {
		if(arg[i] % 3 === 0) {
			empty.push(arg[i])
		}

	}
	if(empty.length === 0) {
		console.log("there are no numbers divisible by three")
	} else {
		console.log(empty)
	}
}

numbArray(array)