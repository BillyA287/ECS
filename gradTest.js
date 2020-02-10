function createMenuData(data) {
	
	    // create object to push array to   
		const hash = {}
		// loop through array 
		for (let i=0; i<data.length; i++) {
			// create second value to split array by forward slash
		  const val = data[i].split('/');
		//   logic to determine if the array index value is less that 1 it should and has nothing in it data is pushed into the array
		  if (val.length > 1) {
			if (hash[val[0]] !== undefined) {
			  hash[val[0]].data.push(val[1])
			} else {
			  hash[val[0]] = {
				title: val[0],
				data: [val[1]]
			  }
			}
		  }
		}
		return Object.values(hash)
	  }
	
	 
	module.exports.createMenuData = createMenuData;
	
  

	 
	