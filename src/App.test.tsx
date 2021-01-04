/* eslint-disable jest/expect-expect */
import { render } from '@testing-library/react'
import React from 'react'

import { App } from './App'

test('renders app', () => {
    render(<App />)
})
