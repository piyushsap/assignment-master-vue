<template>
    <div class="card">
        <div class="card-header" v-if="heading">
            <Content :as="'h2'">{{heading}}</Content>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
        <div class="card-footer" v-if="btn">
            <Button
                @click="btn.click"
                :btnClass="btn.btnClass" 
                :disabled="btn.disabled">
                {{btn.text}}</Button>
        </div>
    </div>
</template>
<script src="./card.js"></script>

<style scoped>
    .card-header h2{font-size: 20px; text-transform: uppercase; margin: 0;}
</style>