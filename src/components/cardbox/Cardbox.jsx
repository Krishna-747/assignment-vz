import {
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  TextField,
} from "@material-ui/core";
import styles from "./Cardboxstyles.module.scss";

const Cardbox = ({
  card_data,
  card_value,
  onchange_value,
  onclick_value,
  index,
  item_details,
  error
}) => {
  const handleChange = (e) => {
    onchange_value(e.currentTarget.name, e.currentTarget.value);
  };

  const handleClick = (e, cost, item, index, action) => { 
    onclick_value(e, cost, item, index, action);
  };

  return (
    <>
      <Card className={styles.cardcontainer}>
        <CardContent className={styles.cardcontent}>
          <Box className={styles.card_headbox}>
            <span className={styles.card_headtxt}>{card_data.item_name}</span>
          </Box>
          <Box className={styles.card_bodybox}>
            <span className={styles.card_bodytxt}>300 X 200</span>
          </Box>
          <Box className={styles.card_footerbox}>
            <span className={styles.card_footertxt}>
              ${card_data.item_cost}
            </span>
          </Box>
        </CardContent>
        <CardActions>
          <Box className={styles.btn_style_box}>
            {item_details ? (
              <Box className={styles.addtocart}>
                <input
                  type="text"
                  value={card_value[card_data.name]}
                  name={card_data.name}
                  className={styles.inputtxt}
                  onChange={handleChange}
                />
                { card_value[card_data.name] <= 0 ? (
                  <Button
                    disabled
                    size="large"
                    style={{
                      background: "#60acfc",
                      textTransform: "capitalize",
                      color: "#fff",
                    }}
                    onClick={() =>
                      handleClick(
                        card_value[card_data.name],
                        card_data.item_cost,
                        card_data.name,
                        index,
                        "add"
                      )
                    }
                  >
                    Add To Cart
                  </Button>
                ) : (
                  <Button
                    size="large"
                    style={{
                      background: "#097ffa",
                      textTransform: "capitalize",
                      color: "#fff",
                    }}
                    onClick={() =>
                      handleClick(
                        card_value[card_data.name],
                        card_data.item_cost,
                        card_data.name,
                        index,
                        "add"
                      )
                    }
                  >
                    Add To Cart
                  </Button>
                )}
              </Box>
            ) : (
              <Button
                size="large"
                style={{
                  background: "#097ffa",
                  textTransform: "capitalize",
                  color: "#fff",
                  width: "100%",
                }}
                onClick={() =>
                  handleClick(
                    card_value[card_data.name],
                    card_data.item_cost,
                    card_data.name,
                    index,
                    "remove"
                  )
                }
              >
                Remove From Cart
              </Button>
            )}
          </Box>
        </CardActions>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </Card>
    </>
  );
};

export default Cardbox;
