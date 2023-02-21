
const projects = {
    tutorial:"https://raboudina.github.io/Github-Tutorial/",
    wonders:"https://raboudina.github.io/The-Seven-Wonders/",
    balls:"https://raboudina.github.io/Crazy-Balls/",
    eyes:"https://raboudina.github.io/Eyes/",
    pacMen:"https://raboudina.github.io/PacMen/",
    busTracking:"https://raboudina.github.io/Real-Time-Bus-Tracking/",
    bostonCityData:"https://raboudina.github.io/Boston-City-Data/",
    blockies:"https://raboudina.github.io/hashDemoBlockies/"
}

function setMain(content){
         let toggleButton=document.getElementById("toggleButton");
         if(toggleButton.getAttribute('aria-expanded') == "true"){
           toggleButton.click();
         }
        window.scrollTo(0,0);
        //document.getElementById("main").innerHTML = content;
        document.getElementById("main").innerHTML = '<object type="text/html" floot="left" width="100%" height="500px" data="'+content+'" ></object>';
      
   
}