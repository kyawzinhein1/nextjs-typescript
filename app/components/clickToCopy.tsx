"use client";

function Click2Copy(e: React.MouseEvent) {
  alert("Copied!");
}

export default function ClickToCopy() {
  return <button onClick={Click2Copy}>click to copy</button>;
}
