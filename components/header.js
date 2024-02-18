class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <head>
                <!-- Google Fonts -->	
                <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
                

                <!-- Bootstrap -->
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                
                <!-- FontAwesome JS -->
                <script defer src="/assets/fontawesome/js/all.js"></script>
                
                <!-- Plugin CSS -->
                <link rel="stylesheet" href="/assets/plugins/tiny-slider/src/tiny-slider.scss">
            
                <!-- Theme CSS -->  
                <link id="theme-style" rel="stylesheet" href="/assets/css/theme-1.css">
            </head>

            <div class="top-bar">
                <div class="top-bar-inner">
                    <ul class="social-list list-inline mx-auto">
                        <!-- <li class="list-inline-item me-0 me-md-1 me-lg-2"><a href="#"><i class="fa-brands fa-twitter fa-fw"></i></a></li>
                        <li class="list-inline-item me-0 me-md-1 me-lg-2"><a href="#"><i class="fa-brands fa-github fa-fw"></i></a></li> -->

                        <li class="list-inline-item me-0 me-md-1 me-lg-2">
                            <a target="_blank" href="http://bit.ly/jschapink" data-toggle="tooltip" data-placement="bottom" title="Linkedin" data-delay="{ "show": 0, "hide": 0 }"><i class="fa-brands fa-linkedin-in fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item me-0 me-md-1 me-lg-2">
                            <a href="mailto: julian.schapink@gmail.com" data-toggle="tooltip" data-placement="bottom" title="Envoyer un email" data-delay="{ "show": 0, "hide": 0 }">
                                <i class="bi bi-envelope-plus"></i>
                            </a>
                        </li>
                        <li class="list-inline-item me-0 me-md-1 me-lg-2">
                            <a href="./assets/CV Julian 2024.pdf" download="Julian Schapink CV.pdf" data-toggle="tooltip" data-placement="bottom" title="Télécharger le CV" data-delay="{ "show": 0, "hide": 0 }"><i class="bi bi-download"></i></a>
                        </li>
                    </ul><!--//social-list-->

                    <div class="mode-toggle">
                        
                        <input class="toggle" id="language-select" type="checkbox">
                        <label class="toggle-btn mx-auto mb-0" for="language-select">
                            <span class="light-icon toggle-icon france-icon"></span>
                            <span class="night-icon toggle-icon uk-icon"></span>
                        </label>
                        
                    </div><!-- //lang-toggle -->
                </div><!--//top-bar-inner-->
            </div><!--//top-bar-->
        `;
      }
}

customElements.define('j-header', Header);
