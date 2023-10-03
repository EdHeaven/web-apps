import React from 'react';

//Ответ на задание №1
export default function Profile() {
    return (
      <img
        src="https://i.imgur.com/lICfvbD.jpg"
        alt="Aklilu Lemma"
      />
    );
  }

//Ответ на задание №2
export default function Profile() {
    return(
      <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
    );
  }

//Ответ на задание №3
function Profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  
    export default function Gallery() {
        return (
            <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
            </section>
        );
    }

//Ответ на задание №4
function Congratulations() {
  return (
  <h1>Good job!</h1>
  );
}
export { Congratulations };

//Ответ на задание №5
const person1 = {
  name: 'Брендан Эйх',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person1.theme}>
      <h1>{person1.name} – создатель языка программирования JS</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

//Ответ на задание №6
const person2 = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    },
    image: "https://i.imgur.com/7vQD0fPs.jpg"
  };
  
  export default function TodoList() {
    return (
      <div style={person2.theme}>
        <h1>{person2.name}'s Todos</h1>
        <img
          className="avatar"
          src={person2.image}
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }