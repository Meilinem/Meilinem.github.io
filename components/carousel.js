class Carousel extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        var references = JSON.parse(this.attributes.references.value);

        this.innerHTML = `
            <div id="carouselExampleIndicators" class="carousel slide carousel-style" data-interval="10000">
                <ol class="carousel-indicators cursor-pointer">
                </ol>
                <div class="carousel-inner carousel-inner-prop">
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        `;

        //Creates image elements for each image reference
        let carouselInner = this.getElementsByClassName('carousel-inner-prop')[0];
        let carouselIndicators = this.getElementsByClassName('carousel-indicators')[0];

        for (let i in references) {
            // Creates the carousel item
            let carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            carouselItem.classList.add('carousel-item-prop');
            if (i == 0) {
                carouselItem.classList.add('active');
            }

            let carouselImage = document.createElement('img');
            carouselImage.src = references[i];
            carouselImage.alt = `Slide ${i}`;
    
            carouselItem.appendChild(carouselImage);
            carouselInner.appendChild(carouselItem);

            // Creates the carousel indicator
            let carouselIndicator = document.createElement('li');
            carouselIndicator.setAttribute('data-target', '#carouselExampleIndicators');
            carouselIndicator.setAttribute('data-slide-to', i);
            if (i == 0) {
                carouselIndicator.classList.add('active');
            }
            carouselIndicators.appendChild(carouselIndicator);


            // The caption can also be added here
            // let carouselCaption = document.createElement('div');
            // carouselCaption.classList.add('carousel-caption');
            // carouselCaption.classList.add('d-none');
            // carouselCaption.classList.add('d-md-block');
            // carouselCaption.innerHTML = `<p class="${caption_class_text}"></p>`;
        }

      }
}

customElements.define('j-carousel', Carousel);
