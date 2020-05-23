import React from 'react'
import {render} from '@testing-library/react'
import { Header } from '.'

describe("Header", () => {
  describe("Layout", () => {
    it('has header of Cotizador de seguros', () => {
      const {container} = render(<Header titulo="Cotizador de seguros"/>)
      const header = container.querySelector('h1')
      expect(header).toHaveTextContent('Cotizador de seguros')
    })
  })
})
