
import styles from "./FeedInProgressOrders.module.css"
import PropTypes from "prop-types";

export const FeedInProgressOrders = () => {


  const ordersDone = [
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "111",
      status: "done",
      number: 111,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    },
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "222",
      status: "done",
      number: 222,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    },
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "333",
      status: "done",
      number: 333,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    },
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "444",
      status: "done",
      number: 444,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    },
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "555",
      status: "done",
      number: 555,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    },
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "666",
      status: "done",
      number: 666,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    },
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "777",
      status: "done",
      number: 777,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    }
  ];


  const ordersPending = [
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "111",
      status: "pending",
      number: 111,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    },
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "222",
      status: "pending",
      number: 222,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    },
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "333",
      status: "pending",
      number: 333,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    },
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "444",
      status: "pending",
      number: 444,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    },
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "555",
      status: "pending",
      number: 555,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    },
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "666",
      status: "pending",
      number: 666,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    },
    {
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093e",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa0947",
        "643d69a5c3f7b9001cfa094a"
      ],
      _id: "777",
      status: "pending",
      number: 777,
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    }
  ];



  return (
    <div className={styles.orders}>
      <p className={`${styles['orders-header__text']} text_type_main-medium mb-6`}>В работе:</p>
      <ul className={`${styles['order__list']}`}>
        {ordersPending.map((order) => {
          return (
            <li
              key={order.number}
              className={`text text_type_digits-default ${styles['order__list_inProgress']}`}
            >
              {order.number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};


// FeedStatistics.propTypes = {
//   orders: PropTypes.array.isRequired,
//   total: PropTypes.number.isRequired,
//   totalToday: PropTypes.number.isRequired,
// };

export default FeedInProgressOrders;
