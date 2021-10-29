<script>
export default {
  name: 'HtmlContent',
  props: {
    html: {
      type: String
    }
  },
  computed: {
    dynamicComponent() {
      return {
        //template: `<section>${this.html}</section>`,
        template: `${this.html}`,
        props: [
          /* define props as needed */
        ]
      };
    }
  },
  render(createElement, context) {
    // console.log(this.dynamicComponent);
    return createElement("div", [
      createElement(this.dynamicComponent, {
        props: {
          /* pass prop values as needed */
        }
      })
    ]);
  }
};
</script>
