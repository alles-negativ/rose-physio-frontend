export default {
    data() {
        return {
            animations: [
                {name: "headline--fall", time: 600, delay: 50},
                {name: "headline--jump", time: 800, delay: 75},
                {name: "headline--flip", time: 4000, delay: 75},
                {name: "headline--float", time: 2200, delay: 50},
                {name: "headline--jog", time: 2000, delay: 25}
            ]
        };
    },
    mounted() {
        this.animate();
    },
    updated() {
        this.animate();
    },
    methods: {
        animate() {
            const splitting_links = this.$el.querySelectorAll(".splitting__header a")
            for (let i = 0; i < splitting_links.length; i++) {
                splitting_links[i].classList.add("headline");
                const animation = this.animations[Math.floor(Math.random() * this.animations.length)]
                splitting_links[i].onmouseenter = function(){
                    this.classList.add(animation.name);
                    this.classList.add('isAnimation');
                }
                splitting_links[i].onmouseleave = function(){
                    setTimeout(function(){
                        this.classList.remove(animation.name);
                        this.classList.remove('isAnimation');
                    }.bind(this),1000)
                }
                splitting_links[i].setAttribute("data-splitting","")
            }
            this.$Splitting()
            if (splitting_links.constructor === NodeList && splitting_links.length > 0) {
                setTimeout(function(){
                    this.startLoop(splitting_links)
                }.bind(this), 1000)
            }
        },
        startLoop(links) {
            const link = links[Math.floor(Math.random() * links.length)]
            const animation = this.animations[Math.floor(Math.random() * this.animations.length)]
            link.classList.add(animation.name);
            
            const num_of_chars = getComputedStyle(link).getPropertyValue('--char-total')

            setTimeout(function(){
                link.classList.remove(animation.name)
                setTimeout(function(){
                    this.startLoop(links)
                }.bind(this), 1000)
            }.bind(this), 2 * (animation.time + num_of_chars * animation.delay))
        },
    },
};