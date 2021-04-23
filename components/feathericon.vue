<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" class="feather"
        v-html="svgToHtml.replace(/<svg([^>]+)>/,'<svg >')">
    </svg>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue'
import feather from "feather-icons";

export default {
    props:{
        name:{required:true},
    },
    setup(props){
        const svgToHtml = ref('')
        onMounted(()=>{
            svgToHtml.value = feather.icons[props.name].toSvg()
        })
        onUpdated(()=>{
            svgToHtml.value = feather.icons[props.name].toSvg()
        })
        return{
            svgToHtml
        }
    }
}
</script>

<style>

</style>
