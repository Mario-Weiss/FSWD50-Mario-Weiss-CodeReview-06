class Locations {
    constructor(name, city, zip, adress, img, vdate = new Date()) {
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.adress = adress;
        this.img = img;
        this.vdate = vdate;
    }
    render() {
        return `<div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 d-block d-md-flex">
					<div class="card text-center">
						<img class="card-img-top d-none d-sm-block" src="img/${this.img}" alt="${this.name}">
						<div class="card-body">
							<h5 class="card-title">${this.name}</h5>
						<p class="card-text">${this.adress}, <span class="text-nowrap">${this.zip} ${this.city} <a href="https://www.google.com/maps/place/${this.zip} ${this.city}, ${this.adress}" title="show location on google maps"><i class="fas fa-map-marker-alt"></i></a></span></p>
					</div>
					<div class="card-footer text-muted">
						<small>Created: ${days[this.vdate.getDay()]}, ${String(this.vdate.getDate()).padStart(2, '0')}.${String(this.vdate.getMonth() + 1).padStart(2, '0')}.${this.vdate.getFullYear()} - ${this.vdate.getHours()}:${String(this.vdate.getMinutes()).padStart(2, '0')}</small>
					</div>
				</div>`;
    }
}
class Restaurants extends Locations {
    constructor(name, city, zip, adress, img, tel, type, web) {
        super(name, city, zip, adress, img);
        this.tel = tel;
        this.type = type;
        this.web = web;
    }
    render() {
        return `<div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 d-block d-md-flex">
					<div class="card text-center">
  						<img class="card-img-top d-none d-sm-block" src="img/${this.img}" alt="${this.name}">
  						<div class="card-body">
    						<h5 class="card-title">${this.name}</h5>
    						<p class="lead">${this.type}</p>
    						<p class="card-text">${this.adress}, <span class="text-nowrap">${this.zip} ${this.city} <a href="https://www.google.com/maps/place/${this.zip} ${this.city}, ${this.adress}" title="show location on google maps"><i class="fas fa-map-marker-alt"></i></a></span></p>
    						<a href="${this.web}"><i class="fas fa-globe"></i> ${this.web.slice(7)}</a>
    						<p><i class="fas fa-phone"></i> ${this.tel}
    					</div>
					</div>
				</div>`;
    }
}
class Events extends Locations {
    constructor(name, city, zip, adress, img, web, date, time, price) {
        super(name, city, zip, adress, img);
        this.web = web;
        this.date = date;
        this.time = time;
        this.price = price;
    }
    render() {
        return `<div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 d-block d-md-flex">
					<div class="card text-center">
  						<img class="card-img-top d-none d-sm-block" src="img/${this.img}" alt="${this.name}">
  						<div class="card-body">
    						<h5 class="card-title">${this.name}</h5>
    						<p class="card-text">${this.adress}, <span class="text-nowrap">${this.zip} ${this.city} <a href="https://www.google.com/maps/place/${this.zip} ${this.city}, ${this.adress}" title="show location on google maps"><i class="fas fa-map-marker-alt"></i></a></span></p>
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
travel.push(new Locations("Marineland", "Antibes", "06600", "306 Avenue Mozart", "marineland.jpg", new Date(2015, 7, 15, 16)));
travel.push(new Locations("Familypark", "St. Margarethen", "7062", "Märchenparkweg 1", "familypark.jpg", new Date(2014, 8, 20, 10, 30)));
travel.push(new Locations("Gardaland", "Castelnuovo del Garda", "37014", "Via Derna 4", "gardaland.jpg", new Date(2015, 7, 8, 8, 15)));
travel.push(new Locations("Pyramidenkogel", "Linden", "9074", "Linden 62", "pyramidenkogel.jpg", new Date(2016, 6, 27, 14)));
travel.push(new Locations("Schneeberg", "Puchberg", "2734", "Bahnhofpl. 1", "schneeberg.jpg", new Date(2018, 4, 20, 11)));
travel.push(new Locations("Aqualandia", "Lido di Jesolo", "30016", "Via Michelangelo Buonarroti 15", "aqualandia.jpg", new Date(2013, 6, 22, 9)));
travel.push(new Locations("Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b", "zooVienna.jpg", new Date(2013, 3, 6, 10, 45)));
travel.push(new Locations("Amethyst Welt", "Maissau", "3712", "Horner Straße 36", "amethystwelt.jpg", new Date(2015, 9, 10, 13)));
travel.push(new Restaurants("Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "LemonLeaf.png", "+43(1)5812308", "thai food", "http://www.lemonleaf.at"));
travel.push(new Restaurants("SIXTA", "Vienna", "1050", "Schönbrunner Straße 21", "SIXTA.png", "+43 1 58 528 56 l +43 1 58 528 56", "traditional fine food", "http://www.sixta-restaurant.at"));
travel.push(new Events("Kris Kristofferson", "Vienna", "1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "KrisKristofferson.jpg", "http://kriskristofferson.com", new Date(2018, 10, 15), new Date(0, 0, 0, 20, 0), 58.50));
travel.push(new Events("Lenny Kravitz", "Vienna", "1150", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "LennyKravitz.jpg", "http://www.lennykravitz.com", new Date(2019, 11, 09), new Date(0, 0, 0, 19, 30), 47.80));
//-----display the objects in the browser-----//
for (let i in travel) {
    document.getElementById(travel[i].constructor.name).insertAdjacentHTML('beforeend', travel[i].render());
}
//-----add Eventhandler to hide menu on click-----//
$(".nav-link").click(function () { $(".collapse").collapse("hide"); });
function fadeImage() {
    var x = 10; //number of images
    for (var i = 1; i <= x; ++i) {
        new Image().src = "img/bg" + i + ".jpg";
    }
    // caches images, avoiding white flash between background replacements
    var i = Math.ceil(Math.random() * x);
    document.getElementById("header").style.background = "url(img/bg" + i + ".jpg) no-repeat center center";
    document.getElementById("header").style.backgroundSize = "cover";
    setTimeout(function () { fadeImage(); }, 5000);
}
fadeImage();
