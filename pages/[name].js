import { useRouter } from "next/router";
import React from "react";

const Cheatsheet = () => {
  const router = useRouter();

  return <div>Cheatsheet name: {router.query.name}</div>;
};

export default Cheatsheet;
