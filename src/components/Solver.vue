<script setup lang="ts">
import {DatePicker} from "v-calendar";
import {dayFactory} from "../code/DayFactory.ts";
import {ref} from "vue";

let result1 = ref("")
let result2 = ref("")
let dayInput = ref("")
let daySolver = ref(dayFactory.create(new Date()))

function submit() {
  result1.value = daySolver.value.compute1(dayInput.value)
  result2.value = daySolver.value.compute2(dayInput.value)
}

function onDayChange(date: Date) {
  daySolver.value = dayFactory.create(date)
}

function fetchInput(){
  daySolver.value.fetch().then(txt => dayInput.value=txt).then(submit)
}
</script>

<template>
  <div class="vertical">
    <DatePicker @update:modelValue="onDayChange"></DatePicker>
    <button @click="fetchInput" :disabled="!daySolver.available">Fetch</button>
    <textarea v-model="dayInput" @change="submit" class="textarea" :disabled="!daySolver.available"></textarea>
    <div>{{ daySolver.available ? result1 : "Aucun solveur pour cette date" }}</div>
    <div>{{ daySolver.available ? result2 : "" }}</div>
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