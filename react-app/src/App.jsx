// import React, { useState } from "react";

// export default function App() {

//   const [task, setTask] = useState()
//   const [tasks, setTasks] = useState([
//     { taskName: 'Гүл суғару', completed: true },
//     { taskName: 'Күнделікті уй тапсырмасын орындау', completed: false }
//   ])
//   const handleRemove = (id) => {
//     setTasks(tasks.filter((task, index) => index != id))
//   }
//   const [filter, setFilter] = useState('all')

//   const filteredTasks = tasks.filter((task, index) => {
//     if (filter == 'all') {
//       return true
//     } else if (filter == 'complete') {
//       return task.completed
//     } else if (filter == 'incomplete') {
//       return !task.completed
//     }
//   })

//   function handleSumbit(e) {
//     e.preventDefault()
//     setTasks([...tasks, { taskName: task, completed: false }])
//     setTask('')
//   }


//   return (
//     <div>
//       <form onSubmit={(handleSumbit)}>
//         <input value={task} type="text" onChange={(e) => setTask(e.target.value)} />
//         <button type="sumbit">Қосу</button>
//       </form>
//       <div className="filterbox">
//         <button onClick={() => setFilter('all')}>all</button>
//         <button onClick={() => setFilter('complete')}>complete</button>
//         <button onClick={() => setFilter('incomplete')}>incomplete</button>
//       </div>
//       <ul>
//         {filteredTasks.map((tapsyrma, index) => {
//           return <li key={index}>
//             <div>{tapsyrma.taskName}</div>
//             <div className="btn-box">
//               {tapsyrma.completed ? <button style={{ color: 'green' }}>✅</button> : <button>❌</button>}

//               <button onClick={() => handleRemove(index)}>🗑</button>

//             </div>
//           </li>
//         })}
//       </ul>
//     </div>
//   )
// }


// import { useState, useEffe
// ct, use } from "react";
// import React from "react";

// export default function App() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     const savedCount = localStorage.getItem('count');
//     if (savedCount) {
//       setCount(parseInt(savedCount, 10));
//     }
//   }, [])
//   useEffect(() => {
//     localStorage.setItem('count', count);
//   }, [count])
//   if(count == 10) {
//     alert('10-ға жеттің ')
//   } else if(count == -1) {
//     alert('0- ден төмен түсуге болмайды')
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   )
// }

// import { useState, useEffect } from "react";

// export default function ColorPicker() {
//   const [color, setColor] = useState(0); // 🟢 Мұнда localStorage мәнін алу керек

//   useEffect(() => {
//     const savedColor = localStorage.getItem("color");
//     if (savedColor) {
//       setColor(savedColor);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("color", color);
//   }, [color]);

//   return (
//     <div style={{ backgroundColor: color, height: "100vh" }}>
//       <h2>Түс таңда:</h2>
//       <button onClick={() => setColor("red")}>🔴 Қызыл</button>
//       <button onClick={() => setColor("blue")}>🔵 Көк</button>
//       <button onClick={() => setColor("green")}>🟢 Жасыл</button>
//     </div>
//   );
// }

//   import { useState, useEffect } from "react";

//   export default function Login() {
//     const [username, setUsername] = useState(); // 🟡 Мұнда localStorage мәнін алу керек

//     useEffect(() => {
//       const savedUser = localStorage.getItem("username");
//       if (savedUser) {
//         setUsername(savedUser);
//       }
//     }, []);

//     useEffect(() => {
//       if (username) {
//         localStorage.setItem("username", username);
//       } else {
//         localStorage.removeItem("username");
//       }
//     }, [username]);

//     return (
//       <div>
//         <h2>{username ? `Сәлем, ${username}!` : "Жүйеге кіріңіз"}</h2>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)} // 🟡 Input өзгергенде state жаңарту
//           placeholder="Атыңызды енгізіңіз"
//           />
//           <button onClick={() => setUsername("")}>🚪 Шығу</button>
//         </div>
//       );
//     }
  

//   import { useState, useEffect } from "react";

// export default function VolumeControl() {
//   const [volume, setVolume] = useState(); // 🟡 Мұнда localStorage мәнін алу керек

//   useEffect(() => {
//     const savedVolume = localStorage.getItem("volume");
//     if (savedVolume) {
//       setVolume(Number(savedVolume));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("volume", volume);
//   }, [volume]);

//   return (
//     <div>
//       <h2>Дыбыс деңгейі: {volume}</h2>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={volume}
//         onChange={(e) => setVolume(e.target.value)} // 🟡 Input өзгергенде state жаңарту
//       />
//     </div>
//   );
// }

// import { useState, useEffect } from "react";

// export default function Timer() {
//   const [seconds, setSeconds] = useState(30); // 🔴 Мұнда localStorage мәнін алу керек

//   useEffect(() => {
//     const savedTime = localStorage.getItem("seconds");
//     if (savedTime) {
//       setSeconds(Number(savedTime));
//     }
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("seconds", seconds);
//   }, [seconds]);

//   return (
//     <div>
//       <h2>Таймер: {seconds} сек</h2>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";

// export default function CurrencyConverter() {
//   const [currency, setCurrency] = useState(); // 🔴 Мұнда localStorage мәнін алу керек

//   useEffect(() => {
//     const savedCurrency = localStorage.getItem("currency");
//     if (savedCurrency) {
//       setCurrency(savedCurrency);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("currency", currency);
//   }, [currency]);

//   return (
//     <div>
//       <h2>Таңдалған валюта: {currency}</h2>
//       <button onClick={() => setCurrency("USD")}>💵 USD</button>
//       <button onClick={() => setCurrency("EUR")}>💶 EUR</button>
//       <button onClick={() => setCurrency("KZT")}>🇰🇿 KZT</button>
//     </div>
//   );
// }

//  import { useState, useEffect } from "react";

// export default function ColorPicker() {
//   const [color, setColor] = useState(0); 

//   useEffect(() => {
//     const savedColor = localStorage.getItem("mode");
//     if (savedColor) {
//       setColor(savedColor);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("color", color);
//   }, [color]);

//   return (
//     <div style={{ backgroundColor: color, height: "100vh" }}>
//       <h2>Түс таңда:</h2>
//       <button onClick={() => setColor("red")}>Dark Mode</button>
//       <button onClick={() => setColor("blue")}>Light Mode</button>
      
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import './style.css'

export default function App() {

  const [username, setUsername] = useState(0); 
  

      useEffect(() => {
        const savedUser = localStorage.getItem("username");
        if (savedUser) {
          setUsername(savedUser);
        }
      }, []);
  
      useEffect(() => {
        if (username) {
          localStorage.setItem("username", username);
        } else {
          localStorage.removeItem("username");
        }
      }, [username]);
      function Savelogin() {
        const name = localStorage.getItem('name')
        const email = localStorage.getItem('email')
        const password = localStorage.getItem('password')
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem("password", password)
      }
  
  
  return (
    <form>
    <h3>Name:</h3>
    <input type="text"  placeholder="name..." onChange={(e) => setUsername(e.target.value)}/>
    <h3>Email:</h3>
    <input type="text" placeholder="email..."onChange={(e) => setUsername(e.target.value)}/>
    <h3>Passwordhoi:</h3>
    <input type="text" placeholder="password..." onChange={(e) => setUsername(e.target.value)}/>
    <button onClick={(Savelogin) => setUsername("")}>Регистер</button>
    </form>
  )
}