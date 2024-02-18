class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <head>
                <!-- Google Fonts -->	
                <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
                
                <!-- Bootstrpa Icons -->
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
                
                <!-- FontAwesome JS -->
                <script defer src="/assets/fontawesome/js/all.js"></script>
                
                <!-- Plugin CSS -->
                <link rel="stylesheet" href="/assets/plugins/tiny-slider/src/tiny-slider.scss">
            
                <!-- Theme CSS -->  
                <link id="theme-style" rel="stylesheet" href="/assets/css/theme-1.css">
            </head>

            <footer class="footer text-center py-4">
                <small class="copyright">Made by J. Schapink with ❤︎ &copy;</small>
            </footer>
        `;
      }
}

customElements.define('j-footer', Footer);
