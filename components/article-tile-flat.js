class ArticleTileFlat extends HTMLElement {
    constructor() {
        super();

        this.updateOnce = true;
    }

    connectedCallback() {
        var reference = this.attributes.reference ? this.attributes.reference.value : null;
        var titleId = this.attributes.title_id ? this.attributes.title_id.value : null;
        var introId = this.attributes.intro_id ? this.attributes.intro_id.value : null;
        var tags = this.attributes.tags ? JSON.parse(this.attributes.tags.value): null;
        var tools = this.attributes.tools ? JSON.parse(this.attributes.tools.value): null;
        var image = this.attributes.image ? this.attributes.image.value : null;

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

            
            <div class="project-item-inner row">
                <div class="col-12 col-lg-5 col-xl-4 article-tile-flat-image">
                    <div class="tile-image-hover cursor-pointer rounded-2"></div>
                </div>
                <div class="col-12 col-lg-7 col-xl-8">
                    <h3 class="title justify-content-between d-flex">
                        <a href="${reference}" class="${titleId}"></a>
                    </h3>
                    <div class="intro mb-3 ${introId}"></div>

                    <h4 class="subtitle toolbox-text"></h4>
                    <ul class="tech-stack list-inline">
                        
                    </ul>
                    <div class="post-tags my-3">
                        <ul class="list-inline">
                        </ul>
                    </div>

                    <a class="more-link" href="${reference}">
                        <span class="see-article-text"></span>
                        <span class="link-arrow"><i class="bi bi-arrow-right"></i></span>
                    </a>
                </div>
            </div>
        `;

        let imageDiv = this.getElementsByClassName('article-tile-flat-image')[0];
        let projectItemInner = this.getElementsByClassName('project-item-inner')[0];
        projectItemInner.onclick = function() {
            location.href = reference;
        }

        let imageElement = document.createElement('img');
        imageElement.src = image;
        imageElement.classList.add('project-thumb');
        imageElement.classList.add('rounded-2');
        imageElement.classList.add('mb-3');
        imageElement.classList.add('mb-lg-0');
        imageElement.classList.add('rounded');
        imageElement.classList.add('mx-auto');

        imageDiv.classList.add('rounded-2');

        imageDiv.appendChild(imageElement);

        // Set the tags dynamically adding them to the list
        let postTags = this.getElementsByClassName('post-tags')[0].firstElementChild;

        for (let i in tags) {
            let list_child = document.createElement('li');
            list_child.classList.add('list-inline-item');
            list_child.innerHTML = `
                <span class="badge tag-badge ${tags[i]}"></span>
            `;
            postTags.appendChild(list_child);
        }

        // Set the tools dynamically adding them to the list
        let techStack = this.getElementsByClassName('tech-stack')[0];

        for (let i in tools) {
            let list_child = document.createElement('li');
            let tooltip = tools[i].replace(".", "/").split("/").slice(-2)[0];

            list_child.classList.add('list-inline-item');
            list_child.innerHTML = `
                <img class="rounded" src="${tools[i]}" alt="${tools[i]}">
            `;
            list_child.setAttribute('data-toggle', 'tooltip');
            list_child.setAttribute('data-placement', 'bottom');
            list_child.setAttribute('title', tooltip);
            list_child.setAttribute('data-bs-delay', '{"show":0,"hide":0}');

            techStack.appendChild(list_child);
        }

        this.addEventListener('mouseover', function() {
            this.mouseOver();
        });

        this.addEventListener('mouseout', function() {
            imageElement.style.transform = "scale(1)";
        });
    }

    updateImageHoverSize() {
        let imageElement = this.getElementsByClassName('project-thumb')[0];
        let imageHoverElement = this.getElementsByClassName('tile-image-hover')[0];

        imageHoverElement.style.width = `${imageElement.offsetWidth}px`;
        imageHoverElement.style.height = `${imageElement.offsetHeight}px`;

        imageElement.parentElement.style.overflow = "hidden";
        imageElement.parentElement.style.height = `${imageHoverElement.offsetHeight}px`;
        imageElement.parentElement.style.width = `${imageHoverElement.offsetWidth}px`;
        imageElement.parentElement.style.padding = "inherit";
    }

    mouseOver() {
        let imageElement = this.getElementsByClassName('project-thumb')[0];
        let imageHoverElement = this.getElementsByClassName('tile-image-hover')[0];

        imageElement.style.transform = "scale(1.05) translateX(5px)";
        // imageElement.style.transformOrigin = "left";
        imageElement.style.height = `${imageHoverElement.offsetHeight}px`;
        imageElement.style.width = `${imageHoverElement.offsetWidth}px`;
    }
}

customElements.define('j-article-tile-flat', ArticleTileFlat);

// add event listener to the window to update the image hover size
window.addEventListener('load', function() {
    let articleTileFlatElements = document.getElementsByTagName('j-article-tile-flat');

    for (let i in articleTileFlatElements) {
        if (articleTileFlatElements[i] && i !== "length") {
            articleTileFlatElements[i].updateImageHoverSize();
        }
    
    }
});

window.addEventListener('resize', function() {
    let articleTileFlatElements = document.getElementsByTagName('j-article-tile-flat');

    for (let i in articleTileFlatElements) {
        if (articleTileFlatElements[i] && i !== "length") {
            articleTileFlatElements[i].updateImageHoverSize();
        }
    
    }
});