document.addEventListener('DOMContentLoaded',function(){const imgs=document.querySelectorAll('img[loading="lazy"]');if('IntersectionObserver'in window){const o=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){const i=t.target;i.dataset.src&&(i.src=i.dataset.src);o.unobserve(i);}})});imgs.forEach(img=>{img.dataset.src=img.src;img.src='';o.observe(img);});}
const btn=document.getElementById('mostrarMapa');if(btn){btn.addEventListener('click',function(){const c=document.getElementById('mapContainer');c.hidden=false;if(!window._mapLoaded){const s=document.createElement('script');s.src='https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';s.async=true;s.defer=true;window.initMap=function(){const mLatLng={lat:19.63883445624231,lng:-99.22621578737095};const map=new google.maps.Map(c,{center:mLatLng,zoom:15});new google.maps.Marker({position:mLatLng,map,title:'La Ruta del Sabor'});};document.body.appendChild(s);window._mapLoaded=true;}});}});
	});

});

