<template>
    <div class="row ">
        <div class="d-flex justify-content-center mb-3">
            <h1>
                Новости
            </h1>
        </div>

        <spin v-if="loading"></spin>
        
        <div class="row" v-else>
            <!-- <post v-for="post in posts" :title="post.title" :body="post.body" :date="post.created_at"></post> -->
            <post 
                v-for="post in posts" 
                :key="post.id" 
                :title="post.title" 
                :body="post.body" 
                :date="post.created_at">
            </post>
        </div>
    </div>
</template>

<script>
    import Spin from "../components/Spin.vue";
    import axios from "axios";
    import Post from "../components/news/Post.vue";

    export default {
        components: {
            Spin,
            Post
        },

        data: () => ({
            loading: true,
            posts: []
        }),

        mounted() {
            this.loadPosts();
        },

        methods: {
            loadPosts() {
                axios.get('/api/news')
                    .then(res => {
                        this.posts = res.data;
                        this.loading = false;
                    })
            }
        }
    }
</script>