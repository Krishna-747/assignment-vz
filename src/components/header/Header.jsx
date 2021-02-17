import { Grid } from '@material-ui/core';
import styles from "./Headerstyles.module.scss";

const Header = () => {
  return (
    <>
      <Grid container className={styles.header_container}>
        <header className={styles.header_background}>
          <span>Ecommerce</span>
          <span>Home</span>
        </header>
      </Grid>
    </>
  );
};

export default Header;
