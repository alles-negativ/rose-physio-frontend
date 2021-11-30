export default {
    mounted() {
        this.animate();
    },
    updated() {
        this.animate();
    },
    methods: {
        animate() {
            const animations = [
                {name: "headline--fall", time: 600, delay: 50},
                {name: "headline--jump", time: 800, delay: 75},
                {name: "headline--flip", time: 4000, delay: 75},
                {name: "headline--float", time: 2200, delay: 50},
                {name: "headline--jog", time: 2000, delay: 25}
            ]
            const splitting_links = this.$el.querySelectorAll(".splitting__header a")
            for (let i = 0; i < splitting_links.length; i++) {
                splitting_links[i].classList.add("headline");
                const animation = animations[Math.floor(Math.random() * animations.length)]
                splitting_links[i].onmouseenter = function(){
                    this.classList.add(animation.name);
                }
                splitting_links[i].onmouseleave = function(){
                    setTimeout(function(){
                        this.classList.remove(animation.name);
                    }.bind(this),1000)
                }
                // splitting_links[i].classList.add(animations[Math.floor(Math.random() * animations.length)]);
                splitting_links[i].setAttribute("data-splitting","")
            }
            this.$Splitting()
            if (splitting_links.constructor === NodeList && splitting_links.length > 0) {
                setTimeout(function(){
                    this.startLoop(splitting_links, animations)
                }.bind(this), 1000)
            }
        },
        startLoop(links, animations) {
            const link = links[Math.floor(Math.random() * links.length)]
            const animation = animations[Math.floor(Math.random() * animations.length)]
            link.classList.add(animation.name);

            const text = link.getAttribute('style')
            const matches = text.matchAll(/--char-total:(\d+);/g)
            const num_of_chars = matches.next().value[1]

            setTimeout(function(){
                link.classList.remove(animation.name)
                setTimeout(function(){
                    this.startLoop(links, animations)
                }.bind(this), 1000)
            }.bind(this), 1 * (animation.time + num_of_chars * animation.delay))
        },
    },
};