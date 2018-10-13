class Location {
    constructor(name, city, zip, adress, img) {
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.adress = adress;
        this.img = img;
    }
    render() {
        return `<div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3">
					<div class="card text-center">
						<img class="card-img-top d-none d-sm-block" src="img/${this.img}" alt="${this.name}">
						<div class="card-body">
							<h5 class="card-title">${this.name}</h5>
						<p class="card-text">${this.adress}, ${this.zip}&nbsp;${this.city}&nbsp;<a href="https://www.google.com/maps/place/${this.zip} ${this.city}, ${this.adress}"><i class="fas fa-map-marker-alt"></i></a></p>
						</div>
					</div>
				</div>`;
    }
}
class Restaurants extends Location {
    constructor(name, city, zip, adress, img, tel, type, web) {
        super(name, city, zip, adress, img);
        this.tel = tel;
        this.type = type;
        this.web = web;
    }
    render() {
        return `<div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3">
					<div class="card text-center">
  						<img class="card-img-top d-none d-sm-block" src="img/${this.img}" alt="${this.name}">
  						<div class="card-body">
    						<h5 class="card-title">${this.name}</h5>
    						<p class="lead">${this.type}</p>
    						<p class="card-text">${this.adress}, ${this.zip}&nbsp;${this.city}&nbsp;<a href="https://www.google.com/maps/place/${this.zip} ${this.city}, ${this.adress}"><i class="fas fa-map-marker-alt"></i></a></p>
    						<a href="${this.web}"><i class="fas fa-globe"></i> ${this.web.slice(7)}</a>
    						<p><i class="fas fa-phone"></i> ${this.tel}
    					</div>
					</div>
				</div>`;
    }
}
class Events extends Location {
    constructor(name, city, zip, adress, img, web, date, time, price) {
        super(name, city, zip, adress, img);
        this.web = web;
        this.date = date;
        this.time = time;
        this.price = price;
    }
    render() {
        return `<div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3">
					<div class="card text-center">
  						<img class="card-img-top d-none d-sm-block" src="img/${this.img}" alt="${this.name}">
  						<div class="card-body">
    						<h5 class="card-title">${this.name}</h5>
    						<p class="card-text">${this.adress}, ${this.zip}&nbsp;${this.city}&nbsp;<a href="https://www.google.com/maps/place/${this.zip} ${this.city}, ${this.adress}"><i class="fas fa-map-marker-alt"></i></a></p>
    						<a href="${this.web}"><i class="fas fa-globe"></i> ${this.web.slice(7)}</a>
    						<p><i class="far fa-calendar-alt"></i> ${days[this.date.getDay()]}, ${String(this.date.getDate()).padStart(2, '0')}.${String(this.date.getMonth() + 1).padStart(2, '0')}.${this.date.getFullYear()} - ${this.time.getHours()}:${String(this.time.getMinutes()).padStart(2, '0')}<br>
    						<i class="far fa-money-bill-alt"></i> &euro; ${(this.price).toFixed(2)}</p>
    					</div>
					</div>
				</div>`;
    }
}
var travel = [];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fr.", "Sat."];
travel.push(new Location("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "stCharlesChurch.jpg"));
travel.push(new Location("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "zooVienna.jpg"));
travel.push(new Restaurants("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "LemonLeaf.png", "+43(1)5812308", "thai food", "http://www.lemonleaf.at"));
travel.push(new Restaurants("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "SIXTA.png", "+43 1 58 528 56 l +43 1 58 528 56", "traditional fine food", "http://www.sixta-restaurant.at"));
travel.push(new Events("Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "KrisKristofferson.jpg", "http://kriskristofferson.com", new Date(2018, 10, 15), new Date(0, 0, 0, 20, 0), 58.50));
travel.push(new Events("Lenny Kravitz", "Vienna", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "LennyKravitz.jpg", "http://www.lennykravitz.com", new Date(2019, 11, 09), new Date(0, 0, 0, 19, 30), 47.80));
//-----display the objects in the browser-----//
for (let i in travel) {
    document.getElementById(travel[i].constructor.name).insertAdjacentHTML('beforeend', travel[i].render());
}
//-----add Eventhandler to hide menu on click-----//
$(".nav-link").click(function () { $(".collapse").collapse("hide"); });
var bgImageArray = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
function changeBG(id) {
    var i = Math.floor(Math.random() * bgImg.length);
    console.log(i);
    document.getElementById(id).style.background = "url(img/" + bgImg[i] + ") no-repeat center center";
    document.getElementById(id).style.backgroundSize = "cover";
    setTimeout(function () { changeBG(id); }, 5000);
}
console.log(travel);
