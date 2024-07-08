"use client";
import { useRouter } from "next/navigation";
import "reflect-metadata";

const App: React.FC = () => {
  const router = useRouter();
  router.push("login");
  return <div></div>;
};

export default App;
