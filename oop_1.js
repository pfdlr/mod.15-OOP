function Phone(brand, price, color, displayType, displaySize, cpu, cores, ram, operator) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.displayType = displayType;
	this.displaySize = displaySize;
	this.cpu = cpu;
	this.cores = cores;
	this.ram = ram;
	this.operator = operator || [];
}
Phone.prototype.printInfo = function () {
	console.log(
		"The phone brand is " +
		this.brand +
		": \n - color: " +
		this.color +
		" \n - price: " +
		this.price +
		" zl" +
		" \n - display: " +
		this.displayType +
		" " +
		this.displaySize +
		" \n - CPU: " +
		this.cpu +
		" with " +
		this.cores +
		" cores" +
		" \n - RAM: " +
		this.ram +
		"GB"
	);

};
Phone.prototype.operatorOffer = function () {
	if (this.operator.length === 4) {
		console.log("Phone available in the offer of all operators.")
	}
	else if (this.operator.length === 0) {
		console.log("Phone not available in the offer of any operator.")
	}
	else {
		console.log("Phone available in the " + this.operator.join(', ') + " operator's offer.");
	}

};

var iPhone6S = new Phone(
	"Apple",
	1300,
	"silver",
	"IPS TFT",
	'4,70"',
	"Apple A9",
	2,
	2,
	["Orange", "T-Mobile", "Plus", "Play"]
);
var Galaxy6S = new Phone(
	"Samsung",
	1900,
	"white",
	"AMOLED",
	'5,10"',
	"Samsung Exynos 7420",
	8,
	3,
	[]
);
var OnePlusOne = new Phone(
	"OnePlus",
	1750,
	"black",
	"IPS TFT",
	'5,50"',
	"Qualcomm Snapdragon 801",
	4,
	3,
	["Orange", "T-Mobile", "Play"]
);

iPhone6S.printInfo();
iPhone6S.operatorOffer();

Galaxy6S.printInfo();
Galaxy6S.operatorOffer();

OnePlusOne.printInfo();
OnePlusOne.operatorOffer();