
const mongoose = require("mongoose");

module.exports = () => {
	// const connectionParams = {
	// 	useNewUrlParser: true,
	// 	useUnifiedTopology: true,
	// };
	
	try {
		mongoose.connect(process.env.DB);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};


// lP1zXj2pLNP0vHH2

// mongodb+srv://mswani258:lP1zXj2pLNP0vHH2@certificatesystem.nf42pjn.mongodb.net/?retryWrites=true&w=majority&appName=certificateSystem

