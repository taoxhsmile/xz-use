<template>
  <div>
    <input v-model="state" :style="{ width: 300 }" />
    <button type="button" @click="state = ''" :style="{ margin: '0 4px' }">
      Clear
    </button>
  </div>
</template>
<script>
import { useControllableValue } from 'xz-use';
export default {
  setup(props) {
    const state = useControllableValue(props, {
      defaultValue: '',
    });

    return {
      state,
    };
  },
};
</script>
