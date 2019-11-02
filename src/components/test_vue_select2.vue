<template>
  <div id="select2">
    <Select2 v-model="myValue"
             :options="myOptions"
             :settings="{ settingOption: value, settingOption: value }"
             @change="myChangeEvent($event)"
             @select="mySelectEvent($event)" />
    <h4>Value: {{ myValue }}</h4>
  </div>
</template>
<script>
import Select2 from 'v-select2-component';
export default {
  name: 'testVueSelect2',
  components: { Select2 },
  data() {
    return {
      myValue: '',
      myOptions: ['op1', 'op2', 'oppo3', 'oprt1', 'oap2', 'opa33', 'oasdfp21', 'oasfp222', 'op3', 'op1', 'op232', 'opsffgh3'] // or [{id: key, text: value}, {id: key, text: value}]
    }
  },
  methods: {
    myChangeEvent(val) {
      console.log(val);
    },
    mySelectEvent({ id, text }) {
      console.log({ id, text })
    }
  }
}
</script>
<style lang="scss">
.select2 {
  width: 200px !important;
}
</style>