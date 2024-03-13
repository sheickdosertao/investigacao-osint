
import styles from "./style.module.css"
export const Header = () => {
    return (
        <header className={styles.headerPan}>
        <form className={styles.hedstyle}>
          <h1 className={styles.title}>Ivestigador Osint</h1>
       
        <a className={styles.whats} href="https://api.whatsapp.com/send?phone=5571997135969&text=Quero%20contratar%20seus%20servi%C3%A7os%20de%20investiga%C3%A7%C3%A3o!">Whatssapp</a>
          </form>
       
      </header>
    )
}