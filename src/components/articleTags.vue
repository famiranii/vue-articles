<template>
    <div>
        <input type="checkbox" :checked="tag.isChecked ? true : null" class="form-check-input tags-checkbox" @click="tag.isChecked = !tag.isChecked">
        <label for="checkTags">{{ tag.title }}</label>
    </div>
</template>

<script>
export default {
    props: {
        tag: Object
    },
    
}
</script>