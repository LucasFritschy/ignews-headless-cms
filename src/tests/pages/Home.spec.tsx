import { screen, render } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { stripe } from '../../services/stripe'

import Home, { getStaticProps } from '../../pages'

jest.mock('../../services/stripe')
jest.mock('next-auth/client', () => {
  return {
    useSession: () => [null, false]
  }
})

describe('Home', () => {
  it('renders correctly', () => {
    const product = {
      priceId: "fake-price-id",
      amount: "$9.90"
    }

    render(
      <Home product={product} />
    )
    expect(screen.getByText("for $9.90 month")).toBeInTheDocument()
  })

  it('loads initial data', async () => {
    const retrieveStripePricesMocked = mocked(stripe.prices.retrieve)

    retrieveStripePricesMocked.mockResolvedValueOnce({
      id: 'fake-price-id',
      unit_amount: 990,
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$9.90'
          }
        }
      })
    )
  })
})