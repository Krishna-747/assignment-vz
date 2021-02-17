import { Card, CardContent, CardActions, Box, Button } from "@material-ui/core";
import styles from "./Cartstyles.module.scss";

const Cart = ({item_details, total_amount}) => {

  return (
    <>
      <Card style={{ background: "#da3748" }} className={styles.cartcontainer}>
        <CardContent className={styles.cartcontent}>
          <Box className={styles.cart}>Shopping Cart</Box>
          <Box className={styles.cart_total}>Total: ${total_amount}</Box>
          <Box className={styles.cart_items}>
            <ul>
              {
                item_details.map((elm, key) =>
                  elm.qty === 0 ? null : <li key={key}>{elm.item_name}: {elm.qty}</li>
                )
              }
            </ul>
          </Box>
        </CardContent>
        <CardActions style={{ width: "100%" }}>
          <Button
            size="large"
            style={{
              background: "#fff",
              textTransform: "capitalize",
              color: "black",
              width: "100%",
            }}
          >
            Checkout
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Cart;
