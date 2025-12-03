<script setup lang="ts">
import {DatePicker} from "v-calendar";
import {ref} from "vue";
import {useDaySolverStore} from "../stores/daySolverStore.ts";

let result1 = ref("")
let result2 = ref("")
let dayInput = ref("")
const daySolverStore = useDaySolverStore()

function submit() {
  result1.value = daySolverStore.daySolver?.compute1(dayInput.value)
  result2.value = daySolverStore.daySolver?.compute2(dayInput.value)
}


function fetchInput() {
  daySolverStore.daySolver?.fetch().then(txt => dayInput.value = txt).then(submit)
}
</script>

<template>
  <div class="vertical">
    <DatePicker @update:modelValue="daySolverStore.changeDay"></DatePicker>
    <button @click="fetchInput" :disabled="!daySolverStore.daySolverAvailable">Fetch</button>
    <textarea v-model="dayInput" @change="submit" class="textarea" :disabled="!daySolverStore.daySolverAvailable"></textarea>
    <div>{{ daySolverStore.daySolverAvailable ? result1 : "Aucun solveur pour cette date" }}</div>
    <div>{{ daySolverStore.daySolverAvailable ? result2 : "" }}</div>
  </div>

</template>

<style scoped>
.textarea {
  min-height: 100px;
  min-width: 300px;
}

.vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>