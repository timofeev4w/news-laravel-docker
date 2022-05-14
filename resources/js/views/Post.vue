<template>
    <div class="row">
        <div class="col-12">
            <spin v-if="loading"></spin>

            <div v-else-if="!loading && !not_found">
                <h1>
                    {{ post.message.title }}
                </h1>

                <small class="text-secondary">
                    {{ post.message.created_at }}
                </small>

                <div class="text-wrap">
                    {{ post.message.body }}
                </div>
            </div>

            <div v-if="not_found" class="alert alert-danger" role="alert">
                Такой новости нет!
            </div>
        </div>
    </div>
</template>

<script>
    import Spin from "../components/Spin.vue";
    import axios from "axios";

    export default {
        components: {
            Spin
        },

        data: () => ({
            loading: true,
            post: [],
            not_found: false
        }),

        mounted() {
            // console.log(this.$route.params.id);
            this.loadPost(this.$route.params.id);
        },

        methods: {
            loadPost(id) {
                axios.get('/api/news/' + id)
                    .then(res => {
                        this.post = res.data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.not_found = true;
                    })
            }
        }
    }

</script>