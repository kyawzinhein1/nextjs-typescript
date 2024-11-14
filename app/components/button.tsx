import React from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ChildrenProps) {
  return (
    <>
      <button className="border bg-gray-900 text-white p-3 rounded-xl">
        {children}
      </button>
    </>
  );
}
