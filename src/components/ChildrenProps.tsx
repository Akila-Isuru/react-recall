import React, { type ReactNode } from "react";

// 1. ReactNode කියන්නේ ඕනෑම JSX Element එකකට දාන්න පුළුවන් TypeScript Type එක

type CardProps = {
  title: string;
  children: ReactNode;
};

// 2. Child Component එක (Wrapper)
function Card({ title, children }: CardProps) {
  return (
    <div>
      <h2>title :{title}</h2>
      {/* ඊළඟට උඩින් එන ඕනෑම Content එකක් මෙතනින් Render වෙනවා */}
      <div>{children}</div>
    </div>
  );
}

// 3. Parent Component එක
function ChildrenProps() {
  return (
    <div>
      <Card title="User Status">
        <p>Status : Active</p>
        <button>Deactivate</button>
      </Card>
    </div>
  );
}

export default ChildrenProps;
