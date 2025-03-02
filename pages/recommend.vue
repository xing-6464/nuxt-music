import useFetch from '../hook/useFetch';
<template>
  <div>
    <h1>Recommend</h1>
  </div>
</template>

<script lang="ts" setup>
import { getRecommend } from '../hook/useFetch'

console.log(getRecommend())
</script>
