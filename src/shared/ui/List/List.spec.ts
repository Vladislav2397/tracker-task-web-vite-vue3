import { render } from '@testing-library/vue'
import List from './List.vue'

describe('shared/ui/List component', () => {
    it('Snapshot', () => {
        const { html } = render(List, {
            props: {
                list: [],
                keyExtractor: (item) => item
            },
        })

        expect(html()).toMatchSnapshot()
    })
})
