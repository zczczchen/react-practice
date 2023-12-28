import React from "react";
import Star from "./components/Star";

function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevcontact) => {
      return {
        ...prevcontact,
        isFavorite: !prevcontact.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className='card'>
        <img src='/user.png' className='card--image' />
        <div className='card--info'>
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className='card--name'>
            {contact.firstName} {contact.lastName}
          </h2>
          <p className='card--contact'>{contact.phone}</p>
          <p className='card--contact'>{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
