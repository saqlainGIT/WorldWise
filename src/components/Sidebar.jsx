import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Worldwise, Inc. All
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
