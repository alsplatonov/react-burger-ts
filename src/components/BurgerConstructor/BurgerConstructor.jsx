import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from 'react';
import styles from "./BurgerConstructor.module.css";
import OrderDetails from '../OrderDetails/OrderDetails';
import Modal from '../Modal/Modal';
import SortableConstructor from "../SortableConstructor/SortableConstructor";
import { useDispatch, useSelector } from 'react-redux';
import { orderActions } from '../../services/actions/order-slice';
import { modalActions } from '../../services/actions/modal-slice';
import { burgerConstructorActions } from "../../services/actions/burgerConstructor-slice";
import { useDrag, useDrop } from "react-dnd";


const BurgerConstructor = () => {
  const dispatchAction = useDispatch();
  const defaultBun = useSelector((state) => state.ingredients.items);
  const ingredients = useSelector((state) => state.burgerCart.items);
  const isCartContentChanged = useSelector((state) => state.burgerCart.isCartContentChanged);
  const buns = useSelector((state) => state.burgerCart.bun);
  const isOpenModal = useSelector((state) => state.modal.IsOpenModal);
  const orderNumber = useSelector((state) => state.order.orderNumber);
  const orderPrice = useSelector((state) => state.order.orderPrice);
  const Buns = defaultBun.filter(item => {
    return item.type === "bun";
  });

  const totalBurgerIngredients = (ingredients.concat(buns).concat(buns)); //добавим обе булки к общему массиву ингредиентов 

  useEffect(() => {  //булки по-умолчанию
    dispatchAction(burgerConstructorActions.addItem(Buns[0]));
  }, []);

  const [{ isHover }, dropTarget] = useDrop({ //перремещение ингредиентов из списка ингредиентов
    accept: "ingredient",
    drop(item) {
      onDropHandler(item);
    },
  });

  const onDropHandler = (item) => {
    dispatchAction(burgerConstructorActions.addItem({
      _id: item._id,
      name: item.name,
      type: item.type,
      price: item.price,
      image: item.image,
    }));
    console.log(totalBurgerIngredients);
  };


  // const filteredIngredientsWithoutBuns = ingredients.filter(item => {
  //   return item.type !== "bun";
  // });

  const getIngredientsIds = () => { //получим id ингредиентов
    let ingredIds = [];
    totalBurgerIngredients.forEach(item => {
      ingredIds.unshift(item._id);
    })
    return ingredIds;
  }

  useEffect(() => {
    let price = 0;
    totalBurgerIngredients.forEach(item => {
      price += item.price;
    })
    dispatchAction(orderActions.setOrderPrice(price));
    console.log(totalBurgerIngredients);
  },
    [totalBurgerIngredients]
  );

  const OnOpenModal = () => {  //при открытии
    dispatchAction(modalActions.toggleModal()); //указываем состояние isOpenModal = true
    dispatchAction(orderActions.fetchOrderNumber(getIngredientsIds())); //сохранить номе заказа в хранилище
  }

  const onCloseModal = () => {
    dispatchAction(modalActions.toggleModal()); //указываем состояние isOpenModal = false
  };

  const removeIngredient = (cartId, key) => {
    dispatchAction(burgerConstructorActions.removeItem(cartId, key));
  };


  return (
    <section className={`${styles['burger-constructor']}`} >
      {isOpenModal && orderNumber !== 0 &&
        <Modal onCloseModal={onCloseModal}>
          <OrderDetails />
        </Modal>
      }

      <div ref={dropTarget} style={isHover ? { opacity: 0.5 } : {}}>
        {isCartContentChanged && (
          <>
            <div className={`${styles['burger-constructor__item']} pl-8 mb-4`} >
              <ConstructorElement
                type="top"
                isLocked={true}
                text={buns.name + '\n(верх)'}
                price={buns.price}
                thumbnail={buns.image}
              />
            </div>

            <ul className={`${styles["burger-constructor__list"]}`}>
              <SortableConstructor />
            </ul>

            <div className={`${styles['burger-constructor__item']} pl-8 mt-4`}  >
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={buns.name + '\n(низ)'}
                price={buns.price}
                thumbnail={buns.image}
              />
            </div>
          </>
        )}
      </div>

      < div className={`${styles['burger-constructor__order']} mt-10`}>
        <div className={`${styles['burger-constructor__order-price']}`}>
          <p className="text text_type_digits-medium">{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={OnOpenModal}>
          Оформить заказ
        </Button>
      </div>
    </section >
  )
}


export default BurgerConstructor;