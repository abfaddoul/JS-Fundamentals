const args = process.argv.slice(2);
const x = parseInt(args[0], 10);

if (isNaN(x) || x < 1) {
	  if (args.length === 0 || isNaN(x)) {
		      console.log("Missing number of occurrences");
		    }
} else {
	  for (let i = 0; i < x; i++) {
		      console.log("C is fun");
		    }
}
