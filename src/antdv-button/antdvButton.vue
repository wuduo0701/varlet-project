<template>
  <a-button :type="type">{{ text }}</a-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export default defineComponent({
  name: 'AntdvButton',
  components: {
    AButton: Button,
  },
  props: {
    type: String,
    text: {
      type: String,
      default: '组件库从我开始',
    },
  },
})
</script>
