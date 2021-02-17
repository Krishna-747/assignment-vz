import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box } from "@material-ui/core";
import Cardbox from "../cardbox/Cardbox";
import Cart from "../cart/Cart";
import styles from "./Sectionstyles.module.scss";
import { TramRounded } from "@material-ui/icons";

const Section = () => {
  const [state, setState] = useState({
    json_data: [],
    total_item: 0,
  });
  const [name, setName] = useState({
    names: {
      tv_set: 0,
      game_console: 0,
      sofa: 0,
      ice_cream: 0,
      beer: 0,
      phone: 0,
      watch: 0,
    },
  });
  const [cart, setCart] = useState({
    arr: [],
    total: 0,
    items: [],
    addtocart: [true, true, true, true, true, true, true],
  });

  useEffect(async () => {
    let { data: response } = await axios.get("./data.json");
    setState({
      json_data: response,
    });
  }, []);

  const input_change = (getName, getValue) => {
    const names = { ...name.names };
    names[getName] = getValue;
    setName({
      names,
    });
  };

  const button_click = (e, cost, item, index, action) => {
    if (action === "add") {
      let arr_add = cart.arr;
      let add_obj = cart.items;
      let index_add = cart.addtocart;
      let total;
      let obj;

      if (e !== 0) {
        arr_add.push(e * cost);
        index_add[index] = false;
        total = arr_add.reduce((ac, cv) => ac + cv);
        obj = { item_name: item, qty: e };
        add_obj.push(obj);
        setCart({
          ...cart,
          total: total,
          addtocart: index_add,
          arr: arr_add
        });
      }

    } else if (action === "remove") {
      let arr_add = cart.arr;
      let remove_obj = cart.items;
      let index_add = cart.addtocart;
      index_add[index] = true;
      let total
      remove_obj.forEach((elm, key) => { 
        if(elm.item_name !== item){
          console.log(key, '1')
        }
        else{
          remove_obj.splice(key, 1)
        }
      })

      arr_add = arr_add.filter((elm, key) => { return elm !== (e * cost) } )
      if(arr_add.length !== 0)
      total = arr_add.reduce((ac, cv) => ac + cv);
      else total = 0
      setCart({
        ...cart,
        total: total,
        addtocart: index_add,
        arr: arr_add,
        items: remove_obj
      });
    }
  };

  return (
    <Grid container style={{ padding: "1.2rem 1.4rem 1.4rem 1.4rem" }}>
      <Grid item md={9} sm={8} xs={12}>
        <Grid container>
          {state.json_data.map((elm, key) => (
            <Grid item md={4} sm={6} xs={12} key={key}>
              <Box className={styles.cardbox_container}>
                <Cardbox
                  card_data={elm}
                  card_value={name.names}
                  onchange_value={input_change}
                  onclick_value={button_click}
                  index={key}
                  item_details={cart.addtocart[key]}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={3} sm={4} xs={12}>
        <Cart item_details={cart.items} total_amount={cart.total} />
      </Grid>
    </Grid>
  );
};

export default Section;
