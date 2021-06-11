import { render, screen } from "@testing-library/react"
import { mocked } from 'ts-jest/utils'
import { useSession } from "next-auth/client"
import { SignInButton } from "."

jest.mock('next-auth/client')

describe('SignInButton component', () => {
  it('should render correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValue([null, false])

    render(
      <SignInButton />
    )

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
  })
})

describe('SignInButton component', () => {
  it('should render correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([
      { user: { name: 'John Doe', email: 'John Doe' }, expires: 'fake-expires' },
      false
    ])

    render(
      <SignInButton />
    )

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})