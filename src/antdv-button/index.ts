import type { App } from 'vue'
import AntdvButton from './antdvButton.vue'

AntdvButton.install = function (app: App) {
  app.component(Button.name, Button)
}

export const _AntdvButtonComponent = AntdvButton

export default AntdvButton
