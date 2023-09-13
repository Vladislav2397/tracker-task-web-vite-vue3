import { render } from '@testing-library/vue'
import List from './List.vue'

describe('shared/ui/List component', () => {
    it('Snapshot', () => {
        const { html } = render(List)

        expect(html()).toMatchSnapshot()
    })
})
