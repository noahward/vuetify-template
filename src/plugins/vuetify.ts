import { VDataTable } from 'vuetify/labs/VDataTable'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components: {
    components,
    VDataTable
  },
  directives,
  defaults: {
    VCard: {
      rounded: 'md'
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary'
    },
    VSelect: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary'
    }
  }
})
