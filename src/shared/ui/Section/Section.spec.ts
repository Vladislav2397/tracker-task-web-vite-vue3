import { render } from '@testing-library/vue'
import Section from './Section.vue'

describe('shared/ui/Section component', () => {
    it('Snapshot', () => {
        const { html } = render(Section)

        expect(html()).toMatchSnapshot()
    })
})
