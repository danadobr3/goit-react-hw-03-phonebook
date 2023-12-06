import csslist from '../ContactList/ContactList.module.css';

export const ContactList = ({ contacts, children, deleteContact }) => {
  return (
    <div className={csslist.contacts}>
      <h2>Contacts</h2>
      {children}
      <ul className={csslist.contacts__list}>
        {contacts.map(({ id, name, number }) => (
          <li className={csslist.contacts__item} key={id}>
            <p className={csslist.contacts__name}>{name}</p>
            <p className={csslist.contacts__number}> {number}</p>
            <button
              onClick={() => {
                deleteContact(id);
              }}
              className={csslist.contacts__btn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};