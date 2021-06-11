import { render, screen } from "@testing-library/react"
import { Header } from "."

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    },
  }
})

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

describe('Header component', () => {
  it('should render header correctly', () => {
    render(
      <Header />
    )

    expect(screen.getByRole('link', {
      name: /home/i
    })).toBeInTheDocument()
    expect(screen.getByRole('link', {
      name: /posts/i
    })).toBeInTheDocument()

  })
})