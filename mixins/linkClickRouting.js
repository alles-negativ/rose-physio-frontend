/**
 * If children of a component contains relative HTML links
 *  the mixins handles these as routes.
 */
 export default {
    data() {
      return {
        links: []
      };
    },
  
    mounted() {
      // TODO: use hasRouter mixin ???
      if (this.$router) {
        this.addListeners();
      }
    },
  
    beforeUnmount() {
      if (this.$router) {
        this.removeListeners();
      }
    },
  
    updated() {
      if (this.$router) {
        this.removeListeners();
        this.$nextTick(() => {
          this.addListeners();
        });
      }
    },
  
    methods: {
      /**
       * Prevents default browser behavior (page reload) for relative links.
       */
      navigate(event) {
        const href = event.target.getAttribute("href");
        const target = event.target.getAttribute("target");
        // TODO: add if it is the same domain check
        if (href && href[0] === "/" && target !== "_blank") {
          event.preventDefault();
          this.$router && this.$router.push(this.localePath(href));
        }
      },
  
      addListeners() {
        this.links = this.$el.getElementsByTagName("a");
        for (let i = 0; i < this.links.length; i++) {
          this.links[i].addEventListener("click", this.navigate, false);
        }
        const animations = [
          {name: "headline--fall", time: 600, delay: 50},
          {name: "headline--jump", time: 800, delay: 75}
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
        }.bind(this), 2 * (animation.time + num_of_chars * animation.delay))
      },
      removeListeners() {
        for (let i = 0; i < this.links.length; i++) {
          this.links[i].removeEventListener("click", this.navigate, false);
        }
        this.links = [];
      }
    }
  };