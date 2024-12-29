import React from "react";
import { InputSearch } from "./input-search.component";

const AccountBar = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-6">
      <InputSearch />
      <img src="/bell.png" alt="bell" className="size-12 hover:cursor-pointer" />
      <img src="/account.png" alt="bell" className="size-12 rounded-full shadow-md border hover:cursor-pointer" />
    </div>
  );
};

export default AccountBar;
