import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import { useSession, signIn, signOut } from 'next-auth/client'

import styles from './styles.module.scss'
import { sign } from 'node:crypto';

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button className={styles.signInButton} onClick={() => signOut()} type="button">
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button onClick={() => signIn('github')} className={styles.signInButton} type="button">
      <FaGithub color="#eba417" />
      Sign in with Github
      <FiX className={styles.closeIcon} />
    </button>
  )
}