function Phone(brand, price, color, screen, system) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.screen = screen;
  this.system = system;
}

  Phone.prototype.printInfo = function() {
    $("#printinfo").html("<h1>The phone brand is " + this.brand + ", color is " + this.color + ", with " + this.screen + " screen and " + this.system + " system for " + this.price + ".</h1>");
  };

  var data = {
    "SamsungGalaxy": {
      el: new Phone("Samsung", "1399 zł", "black", "Super AMOLED", "Android"),
      src: "<img src='https://cdn4.tgdd.vn/Products/Images/42/71081/Slider/samsung-galaxy-s6-edge-4.jpg'>"
    },
    "iPhone": {
      el: new Phone("iPhone", "2040 zł", "white", "IPS TFT", "Apple A9"),
      src: "<img src='https://allegro.stati.pl/AllegroIMG/PRODUCENCI/APPLE/MKY12ZMA/b.jpg'>"
    },
    "OnePlus": {
      el: new Phone ("OnePluse One", "1299 zł", "black", "IPS TFT", "Android"),
      src: "<img src='https://dyw7ncnq1en5l.cloudfront.net/optim/news/64/64047/1_oneplus-5-all.jpg'>"
    }
  };

  $('.phone').click(function(){
    var id = $(this).attr('data-id');
    $("#phoneImg").html($(data[id].src));
    data[id].el.printInfo();

    $('#info div').removeClass('active');
    $(this).addClass('active');
  });
