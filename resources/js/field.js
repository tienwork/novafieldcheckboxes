import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
    app.component('index-novafieldcheckboxes', IndexField)
    app.component('detail-novafieldcheckboxes', DetailField)
    app.component('form-novafieldcheckboxes', FormField)
})