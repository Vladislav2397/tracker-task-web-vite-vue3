import { render } from '@testing-library/vue'
import Action from './Action.vue'

describe('shared/ui/Action component', () => {
    it.each(['success', 'critical'])('Snapshot for view %s', (view) => {
        const { html } = render(Action, {
            props: {
                view,
            },
        })

        expect(html()).toMatchSnapshot()
    })
})
