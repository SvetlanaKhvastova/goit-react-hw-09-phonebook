import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { contactsSelectors, contactsOperations } from "../../redux/todos";

import s from "./Contacts.module.css";

export default function Contacts() {
  const contactsSearch = useSelector(contactsSelectors.getVisibleContacts);
  // const isLoading = useSelector(contactsSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const deleteContacts = dispatch(contactsOperations.deleteContacts());

  return (
    <ul className={s.contactsBlock}>
      {contactsSearch.map(({ name, number, id }) => {
        return (
          <li key={id} className={s.flex}>
            <p>
              <span>{name}: </span>
              <span className={s.number}>{number}</span>
            </p>

            <Button
              name="Delete"
              type="button"
              onClick={() => deleteContacts(id)}
            />
          </li>
        );
      })}
    </ul>
  );
}
Contacts.protoTypes = {
  onClick: PropTypes.func.isRequired,
};
