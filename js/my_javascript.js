function myMap()
{
  myCenter=new google.maps.LatLng(41.82455114, -87.629798);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: true, draggable: true,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
function myFunction() {

    var x = document.getElementById("myNav");
    if (x.className == "top-nav") {
        x.className += " responsive1";
    } else { 
        x.className = "top-nav";
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
   var i;
   var slides = document.getElementsByClassName("image");

   for(i=0;i<slides.length;i++){
	slides[i].style.display = "none";
   }
   slideIndex++;
   if(slideIndex>slides.length){slideIndex=1}
   
   slides[slideIndex-1].style.display="block";
   setTimeout(showSlides,4000);
}
// Used to t