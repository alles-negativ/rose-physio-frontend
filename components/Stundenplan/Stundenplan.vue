<template>
    <div class="wrapper"> 
        <p>{{ days }}</p>
    </div>
</template>

<script>
export default {
    name: 'Courses',

    data() {
        return {
            courses: [],
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('stundenplan').children",
            "select": {
                "title": true,
                "starttime": true,
                "endtime": true,
                "instructor": true,
                "day": true,
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.courses = data
    },

    computed: {
        days(){
            var output = {}
            console.log(this.courses[0]["day"])
            for (var i=0; i<this.courses; i++) {
                output[this.courses[i]["day"]].push(this.courses[i])
                // for (var j=i; j<input.length; j=j+this.numberOfColumns) {
                //     output[i].push(input[j]) 
                // }
            }
            return output
        }
    },
}
</script>

<style lang="scss" scoped>
    @use "Stundenplan";
</style>