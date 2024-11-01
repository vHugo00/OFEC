import styles from './Header.module.css';

import ofecLogo from '../assets/logo.png.webp';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ofecLogo} alt="Logotipo do OFEC" />
    </header>
  );
}