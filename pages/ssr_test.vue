<template>
  <main>
    <!-- <h3>{{ page.content.contenttitle }}</h3> -->
    <h3>Hello</h3>
  </main>
</template>

<script>
export default {
    layout: "empty",

    async asyncData({ app, params, $kirby, store }) {
        try {
            // const data_f = await fetch(`https://aammon.ch/api/query`, {
            const data_f = await fetch(`http://[::1]:8000/api/query`, {
            headers: {
                // Authorization: 'Basic ' + Buffer.from('aurelianammon@gmail.com' + ':' + 'password').toString('base64'),
                Authorization: 'Basic ' + Buffer.from('hello@alles-negativ.ch' + ':' + 'letmein123').toString('base64'),
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: {
                query: "page('kontakt')"
            },
            mode: 'no-cors'
            })
            console.log(await data_f.json())
        } catch (error) {
            return console.log(error)
        }
    }
}
</script>