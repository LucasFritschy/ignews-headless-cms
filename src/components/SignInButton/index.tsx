import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggeIn = false;

  return isUserLoggeIn ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d361" />
      Lucas Fritschy
      <FiX />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#eba417" />
      Sign in with Github
      <FiX className={styles.closeIcon} />
    </button>
  )
}