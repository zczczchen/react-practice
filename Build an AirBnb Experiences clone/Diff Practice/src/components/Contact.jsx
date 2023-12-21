// Challenge: fix the bug, now that we've destructured the props object

export default function Contact({ img, name, phone, email }) {
  return (
    <div className='contact-card'>
      <img src={img} />
      <h3>{name}</h3>
      <div className='info-group'>
        <img src='/phone-icon.png' />
        <p>{phone}</p>
      </div>
      <div className='info-group'>
        <img src='/mail-icon.png' />
        <p>{email}</p>
      </div>
    </div>
  );
}

// const person = {
//   img: "./images/mr-whiskerson.png",
//   name: "Mr. Whiskerson",
//   phone: "(800) 555-1234",
//   email: "mr.whiskaz@catnap.meow",
// };

// const { img, name } = person;
// console.log(name);
