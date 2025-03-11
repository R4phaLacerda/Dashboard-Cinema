import styles from "./header.module.css";

const Header = () => {
    return (
        <header class= {styles.mainHeader}>
      <div class={styles.logo}>
        <h1>Cinema Estrela</h1>
      </div>
      <nav class={styles.mainNav}>
        <ul>
          <li><a href="#" class="active">Dashboard</a></li>
          <li><a href="#">Filmes</a></li>
          <li><a href="#">Sessões</a></li>
          <li><a href="#">Relatórios</a></li>
        </ul>
      </nav>
      <div class={styles.userInfo}>
        <span class={styles.userName}>Admin</span>
        <div class={styles.userAvatar}></div>
      </div>
    </header>  
    );
};

export default Header;