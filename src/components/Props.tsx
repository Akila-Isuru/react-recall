import React from "react";

type UserCardProps = {
  name: string;
  age: number;
  role: string;
};

function UserCard({ name, age, role }: UserCardProps) {
  return (
    <div className="border border-gray-400 m-3 p-4 rounded-xl w-60  ">
      <h3>name: {name}</h3>
      <h3>age : {age}</h3>
      <h3>role : {role}</h3>
    </div>
  );
}

function Props() {
  return (
    <div>
      <UserCard name="akila" age={23} role="Admin" />
      <UserCard name="Nissanka" age={25} role="Project Manager" />
    </div>
  );
}

export default Props;
