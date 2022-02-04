<template>
    <div class="error__wrapper">
        <h1>{{ $t('errormessage') }}</h1>
        <nuxt-link class="linkhome" :to="localePath('/')">
              <h1>{{ $t('link') }} </h1>    
        </nuxt-link>
    </div>
</template>

<style>
.error__wrapper {
    display: flex;
    position: absolute;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-flow: column wrap;
    width: 100%;
    height: 100%;
    z-index: 998;
    top: 0;
}

.linkhome:hover {
    color: #D2232A;
}
</style>

<script>

export default {
    name: 'error',
    layout: 'errorlayout'
}
</script>