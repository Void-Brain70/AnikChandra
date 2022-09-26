<template>
    <div>
        <h2>ToDo</h2>
        <div>
            <form ref="form" @submit.prevent="addToDo()">
                <input v-model="formData.name" type="text" placeholder="Add todos">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToDo',
    data() {
        return {
            formData: {
                name: '',
                status: 'active',
            }
        }
    },
    methods: {
        addToDo() {
            this.$store.commit('ADD_ITEMS', this.formData);
            this.formData = {
                status: 'active'
            };
        }
    },
}
</script>