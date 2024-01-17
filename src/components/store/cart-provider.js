import CartContext from "./cart-context";
import { useReducer } from "react";


const cardReducer = (state, action) => {
  if (action.type === 'Add_item') {

    //logic for the item already exists
    let stateValue = [...state.items];
    let existingItem = stateValue.findIndex(item => item.id === action.item.id);

    if (existingItem !== -1) {
      //item exist
      const updatedItems = [...state.items];

      updatedItems[existingItem].amount += action.item.amount;

      const updatedAmount = state.totalAmount + action.item.price * action.item.amount;

      return {
        items: updatedItems,
        totalAmount: updatedAmount
      };
    }

    //item not exist

    const updatedItems = [...state.items, action.item];
    const updatedAmount = state.totalAmount + action.item.amount * action.item.price;

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };

  }
  else if (action.type === 'Remove_item') {
    const reducedItems = [...state.items];
    const itemToReduce = reducedItems.find((item) => item.id === action.id);

    if (itemToReduce) {
      itemToReduce.amount -= 1;
      if (itemToReduce.amount === 0) {
        reducedItems.splice(reducedItems.indexOf(itemToReduce), 1);
      }
    }

    const updatedAmount = reducedItems.reduce((total, item) => total + item.amount * item.price, 0);


    return {
      items: reducedItems,
      totalAmount: updatedAmount
    };
  }

  return state;
};

const CartProvider = (props) => {
  const [cardState, dispatcardState] = useReducer(cardReducer, { items: [], totalAmount: 0 });

  const addItemHandler = (item) => {
    dispatcardState({ type: 'Add_item', item: item });
  };

  const removeItemHandler = (id, price) => {
    dispatcardState({ type: 'Remove_item', id: id, price: price });
  };


  const cartContext = {
    items: cardState.items,
    totalAmount: cardState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;