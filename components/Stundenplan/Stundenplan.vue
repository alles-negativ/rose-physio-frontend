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
            for (var i=0; i<this.courses.length; i++) {
                if(output[this.courses[i]["day"]] == undefined) {
                    output[this.courses[i]["day"]] = []
                }
                output[this.courses[i]["day"]].push(this.courses[i])
            }
            return output
        }
    },
}
</script>

<style lang="scss" scoped>
    @use "Stundenplan";
</style>