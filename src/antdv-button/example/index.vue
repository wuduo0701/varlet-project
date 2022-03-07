<template>
  <antdv-button :type="type">组件库从我开始</antdv-button>
  <antdv-button :type="type" danger style="margin-left: 20px">组件库从我开始</antdv-button>
</template>

<script>
import { ref } from 'vue'
import Button from '../antdvButton'

export default {
  name: 'BasicUse',
  components: {
    [Button.name]: Button,
  },
  setup() {
    const type = ref('primary')
    const text = ref('ddd')

    return {
      type,
      text,
    }
  },
}
</script>
