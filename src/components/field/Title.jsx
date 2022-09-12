import React from "react";

export default function Title({ children }) {
  return (
    <h1 className="prose md:prose-lg xl:prose-2xl">
      {children}
    </h1>
  )
}
