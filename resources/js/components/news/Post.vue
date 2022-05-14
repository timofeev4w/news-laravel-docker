<template>
    <div class="col-12 mb-3">
        <div class="card">
            <h5 class="card-header">{{ title }}</h5>
            <div class="card-body">
                <!-- <h5 class="card-title">Special title treatment</h5> -->
                <p class="card-text text-truncate">{{ body }}</p>
                
                <a href="#" class="btn btn-primary">Читать полностью</a>
            </div>
            <div class="card-footer text-muted">
                {{ date }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: "NULL"
            },
            body: {
                type: String,
                default: "NULL"
            },
            date: {
                type: String,
                default: "NULL"
            },
        }
    }
</script>

