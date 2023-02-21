const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
<header>
        <!--Navigation Bar-->
        
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-4" id="main-nav">
            <div class="container">
              <h3 class="d-inline align-middle">Radwa Aboudina</h3>
              <button id="toggleButton" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"  aria-expanded="false" >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div id="navbarContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a href="./index.html"  class="nav-link">Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="./about.html" class="nav-link">About Me</a>
                  </li>
                  <li class="nav-item">
                    <a href="./work.html"  class="nav-link">My Work</a>
                  </li>
                  <li class="nav-item">
                    <a href="./contact.html" class="nav-link">Contact Me</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>            
    </header>`;

document.body.appendChild(navTemplate.content);
