// This is a function that takes a page path as an argument
// You need to make the function load the content of that page into the "content" div on the index file
async function loadPage(page) {
    // fetch the page, use await
     const res = await fetch(page);
    // get text from res, use await
    const content = await res.text();
    // get the element with id 'content'
    const element = document.getElementById('content');
    // set innerHTML of the element
    // your code goes here
    element.innerHTML = content;
  }
  var routes = {
          '':          './home.html',     
          '/':         './home.html',   
          '#home': './home.html',            
          '#about':  './about.html',
          '#contact':  './contact.html',
          '#work':  './work.html',
          '#tutorial': "https://raboudina.github.io/Github-Tutorial/",
          '#wonders' :"https://raboudina.github.io/The-Seven-Wonders/",
          '#balls' :"https://raboudina.github.io/Crazy-Balls/",
          '#eyes':"https://raboudina.github.io/Eyes/",
          '#pacMen':"https://raboudina.github.io/PacMen/",
          '#busTracking':"https://raboudina.github.io/Real-Time-Bus-Tracking/",
          '#bostonCityData':"https://raboudina.github.io/Boston-City-Data/",
          '#blockies':"https://raboudina.github.io/hashDemoBlockies/"   
        };
  
    async function router(){
      console.log(location.hash);
  
      // get requested page
      var link = window.location.hash;
  
      // get path (route) for page
      var route = routes[link];
  
      // if route exists, load page
      if (route) loadPage(route);
  };
  router();
  window.addEventListener('hashchange', router); 
  