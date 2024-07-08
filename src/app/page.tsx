"use client";
import "reflect-metadata";
import { useRouter } from "next/navigation";

const App: React.FC = () => {
  const router = useRouter();
  router.push("login");
  return <div></div>;
};

export default App;
