<template>
    <div class="Comment-container">
        <cmtbox :id="$route.params.id"></cmtbox>
    </div>
</template>
<script>
import cmtbox from '../subcomponents/comment.vue'
export default {
     components:{
         cmtbox
     }
};
</script>
<style scoped>
.Comment-container{
    padding-top: 30px;
}
</style>