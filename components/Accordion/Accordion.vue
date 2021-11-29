<template>
    <div class="accordion">
        <div onmouseover="hoverarrowE()" onmouseleave="hoverarrowL()" class="accordion__title" v-on:click="toggle">
          <slot name="title">Default Title</slot>
          <p v-bind:class="{ rotate: show }" class="plus">+</p>
        </div>
        <transition name="accordion"
          v-on:before-enter="beforeEnter" v-on:enter="enter"
          v-on:before-leave="beforeLeave" v-on:leave="leave">
          <div class="accordion__body" v-show="show">
              <div class="content">
                  <slot name="body">
                  </slot>
              </div>
          </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Accordion',

    data() {
        return {
            show: false
        }
    },
    methods: {
        toggle: function() {
        this.show = !this.show;
        },
        beforeEnter: function(el) {
        el.style.height = '0';
        },
        enter: function(el) {
        el.style.height = el.scrollHeight + 'px';
        },
        beforeLeave: function(el) {
        el.style.height = el.scrollHeight + 'px';
        },
        leave: function(el) {
        el.style.height = '0';
    }
  }
}
</script>

<style lang="scss">
    @use "Accordion";
</style>