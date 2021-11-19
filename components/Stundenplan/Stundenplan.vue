<template>
    <div>
        <div class="container">
            <div class="content__container"  v-for="(day,weekday) in days" :key="weekday">
                <p class="text__big">{{ weekday }}</p>
                    <div class="content" v-for="course in day" :key="course.id">
                        <div class="content__text">
                            <p class="text__big">{{ course.title }}</p>
                            <div class="text__time">
                                <p>{{ course.starttime.substring(0,5) }} - {{ course.endtime.substring(0,5) }}</p>
                            </div>
                        </div>    
                        <p>{{ course.instructor }}</p>
                    </div>
            </div>
        </div>
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
            var output = {
                Montag:[],
                Dienstag:[],
                Mittwoch:[],
                Donnerstag:[],
                Freitag:[],
            }
            for (var i=0; i<this.courses.length; i++) {
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