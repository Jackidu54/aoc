import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {dayFactory} from "../code/DayFactory.ts";

export const useDaySolverStore = defineStore('daySolver', () => {

    const daySolver = ref(dayFactory.create(new Date()))

    const daySolverAvailable = computed(() => daySolver.value !==null)

    const visualization = computed(() => null)

    function changeDay(date: Date) {
        daySolver.value = dayFactory.create(date)
    }

    return { daySolver, changeDay, visualization, daySolverAvailable }
})