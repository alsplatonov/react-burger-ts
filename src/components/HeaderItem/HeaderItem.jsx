import styles from './HeaderItem.module.css';
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// const HeaderItem = (props) => {
//   return (
//     <li className={`text text_type_main-default`}
//     >
//       <a href="#" className={`${styles['header-item__item']} `} >
//         {props.children}
//         <p className={`${styles['header-item__text']} ${!props.isActive ? 'text_color_inactive' : ''}`}>{props.text}</p>
//       </a>
//     </li >
//   );
// }


const HeaderItem = (props) => {
  const getUrlByHeaderProp = () => {
    switch (props.text) {
      case "Конструктор":
        return '/';
      case "Лента заказов":
        return '/register';
      case "orange":
      case "Личный кабинет":
        return '/profile';
      default:
        return '/';
    }
  }
  console.log(props.text);
  return (
    <li className={`text text_type_main-default`}
    >
      {/* <NavLink className={(navData) => navData.isActive ? `${styles['header-item__item']} ${styles['header-item__text']}` :
        `${styles['header-item__item']} ${styles['header-item__text']} text_color_inactive`} */}
      <NavLink className={(navData) => navData.isActive ? `${styles['header-item__item']} ` : ''}

        to={getUrlByHeaderProp()}
      >
        <p className={`${styles['header-item__text']} text_color_active`}>{props.text}</p>
        {/* {props.text} */}
      </NavLink>
    </li >
  );
}

HeaderItem.propTypes = {
  isActive: PropTypes.bool,
  text: PropTypes.string,
}

export default HeaderItem;
