import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";
import Button from "../Button/Button";
import Label from "./Label/Label";
import { contactsSelectors, contactsOperations } from "../../redux/todos";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const contactsForm = useSelector(
    contactsSelectors.getAllcontacts({ name, number })
  );

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    console.log(name, value);

    name === "name" ? setName(value) : setNumber(value);
  };

  const handleSubmiteForm = (e) => {
    e.preventDefault();

    reset();

    if (
      contactsForm.find((el) => el.name.toLowerCase() === name.toLowerCase())
    ) {
      return alert(`${name} is already in contacts`);
    }

    if (contactsForm.find((el) => el.number.toLowerCase() === number)) {
      return alert(`${number} is already in contacts`);
    }
    const newContact = { name, number };

    dispatch(contactsOperations.addContacts(newContact));
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <div className={s.block}>
      <form className={s.form} onSubmit={handleSubmiteForm}>
        <Label
          type="text"
          name="name"
          value={name}
          pattern="[A-Za-z]{1,}\s[A-Za-z]{1,}"
          placeholder="Svetlana Khvastova"
          inputChange={handleInputChange}
        />
        <Label
          type="tel"
          name="number"
          value={number}
          pattern="[+][0-9]{2}[0-9]{10}"
          placeholder="+380994183047"
          inputChange={handleInputChange}
        />
        <Button name="Add contact" type="submit" />
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  handleInputChange: PropTypes.func,
};
