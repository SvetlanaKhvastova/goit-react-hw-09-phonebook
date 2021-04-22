import React from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./Filter.module.css";
import ProtoTypes from "prop-types";
import { contactsActions, contactsSelectors } from "../../redux/todos";

export default function Filter() {
  const filterSearch = useSelector(contactsSelectors.getFilterContacts);
  const dispatch = useDispatch();

  const handlerFilterSearch = (e) => {
    const { value } = e.currentTarget;

    dispatch(contactsActions.filterContacts(value));
  };

  return (
    <div className={s.filterBox}>
      <h3 className={s.filterTitle}>Find contact by name</h3>
      <input
        className={s.filterInput}
        type="text"
        name="filter"
        value={filterSearch}
        onChange={handlerFilterSearch}
      />
    </div>
  );
}

Filter.protoTypes = {
  filterSearch: ProtoTypes.string.isRequired,
  handlerFilterSearch: ProtoTypes.func.isRequired,
};
