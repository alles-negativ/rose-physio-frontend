export default {
    data() {
        return {
            animations: [
                {name: "headline--fall", time: 600, delay: 50, repeat: 2},
                {name: "headline--jump", time: 800, delay: 75, repeat: 2},
                {name: "headline--flip", time: 4000, delay: 75, repeat: 1},
                {name: "headline--float", time: 2200, delay: 50, repeat: 2},
                {name: "headline--jog", time: 2000, delay: 25, repeat: 2}
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
                splitting_links[i].onmouseenter = function() {
                    this.classList.add(animation.name);
                    $nuxt.isAnimation = true
                    this.classList.add('isAnimation');
                }
                splitting_links[i].onmouseleave = function(){
                    $nuxt.isAnimation = false
                    setTimeout(function(){
                        this.classList.remove(animation.name);
                        this.classList.remove('isAnimation');
                    }.bind(this), 500)
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
            while ($nuxt.isAnimation == true) {
                setTimeout(function(){
                    this.startLoop(links)
                }.bind(this), 500)
                return
            }
            const link = links[Math.floor(Math.random() * links.length)]
            const animation = this.animations[Math.floor(Math.random() * this.animations.length)]
            link.classList.add(animation.name);
            
            const num_of_chars = getComputedStyle(link).getPropertyValue('--char-total')

            setTimeout(function(){
                link.classList.remove(animation.name)
                setTimeout(function(){
                    this.startLoop(links)
                }.bind(this), Math.floor(Math.random() * (1500 - 200 + 1) ) + 500)
                // Math.floor(Math.random() * (max - min + 1) ) + min
            }.bind(this), animation.repeat * (animation.time + num_of_chars * animation.delay))
        },
    },
};