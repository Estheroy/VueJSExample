<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>{{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                        :name="name"
                        @nameWasReset="name = $event"
                        :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                        :userAge="age"
                        @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Estheroy',
                age: 19
            };
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods:{
            changeName: function () {
                this.name = 'Estherrrrrr';
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
