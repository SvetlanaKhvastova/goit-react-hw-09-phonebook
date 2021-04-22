import { createSelector } from "reselect";

const getLoading = (state) => state.contacts.loading;
const getAllcontacts = (state) => {
  return state.contacts.items;
};
const getFilterContacts = (state) => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getAllcontacts, getFilterContacts],
  (contacts, filterSearch) => {
    const normalizedFilter = filterSearch.toLowerCase();

    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  }
);

export { getLoading, getAllcontacts, getFilterContacts, getVisibleContacts };
