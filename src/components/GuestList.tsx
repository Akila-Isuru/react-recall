import React, { useState } from "react";

// type Guest = {
//   id: number;
//   name: string;
// };

// function GuestList() {
//   const [gusets, setGuests] = useState<Guest[]>([
//     { id: 1, name: "Kasun Kalhara" },
//     { id: 2, name: "Nimal Perera" },
//   ]);

//   const [nameInput, setNameInput] = useState<string>("");

//   const handleAddGuset = () => {
//     if (nameInput.trim() === "") return;

//     const newGuest: Guest = {
//       id: Date.now(),
//       name: nameInput,
//     };

//     setGuests([...gusets, newGuest]);

//     setNameInput("");
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="nameInput"
//         value={nameInput}
//         onChange={(e) => setNameInput(e.target.value)}
//         placeholder="Add Guset"
//       />
//       <button onClick={handleAddGuset}>ADD Guset</button>
//       <ul>
//         {gusets.map((guest) => (
//           <li key={guest.id}>
//             <p>
//               {" "}
//               {guest.id} - {guest.name}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default GuestList;

type Guest = {
  id: number;
  name: string;
};
export default function GuestList() {
  const [gusets, setGuests] = useState<Guest[]>([
    { id: 1, name: "Kasun Kalhara" },
    { id: 2, name: "Nimal Perera" },
  ]);

  const [nameInput, setNameInput] = useState<string>("");

  const handleAddGuset = () => {
    if (nameInput.trim() === "") return;

    const newGuset: Guest = {
      id: Date.now(),
      name: nameInput,
    };
    setGuests([...gusets, newGuset]);
    setNameInput("");
  };
  return (
    <div>
      <input
        type="text"
        name="nameInput"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="enter the name"
      />
      <button onClick={handleAddGuset}>Add</button>
      <ul>
        {gusets.map((guest) => (
          <li key={guest.id}>
            <p>
              {guest.id}- {guest.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
