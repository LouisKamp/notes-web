import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'

import { store } from '../../../state/store'
import { Counter } from '../Counter'

test('Counter can count', () => {
    const { getByText, getByRole } = render(
        <Provider store={store}>
            <Counter />
        </Provider>
    )

    const button = getByText('Click me to increment')

    fireEvent.click(button)

    const text = getByText(/The count is/)

    expect(text).toHaveTextContent(/1/g)

})
