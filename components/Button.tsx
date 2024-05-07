"use client";

import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  varaint: string;
  full?: boolean;
};

const Button = ({ type, title, icon, varaint, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-3 rounded-full border border-b-4 hover:border-b-0 border-green-500 ${varaint} ${
        full && "w-full"
      }`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
