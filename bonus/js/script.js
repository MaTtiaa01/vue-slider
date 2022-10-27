// al click su una thumb, visualizzare in grande l'immagine corrispondente
// applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
const {createApp} = Vue;

createApp({
    data(){
        return{
            imgActive : 0,
            intevalId : null,
            slides : [
                {
                    image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ],
            thumbs : [
                'img/01.webp',
                'img/02.webp',
                'img/03.webp',
                'img/04.webp',
                'img/05.webp',
            ]
        }
    },
    methods : {
        nextSlide(){
            if (this.imgActive === this.slides.length -1) {
                this.imgActive = 0
            }else{
                this.imgActive++
            }
        },
        prevSlide(){
            if (this.imgActive === 0) {
                this.imgActive = this.slides.length -1
            }else{
                this.imgActive--
            }
        },
        changeSlide(index){
            this.imgActive = index
        },
        startPlay(){
            
            this.intervalId = setInterval(() => {
                this.nextSlide()

            },3000)
        },
        stopPlay(){
            
            clearInterval(this.intervalId)
        }
   

    },
    mounted(){
        this.startPlay()
    }
}).mount("#app")