import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import FloatingGhostButton from "./components/Button/FloatingGhostButton";



function App() {
  return (
    <div className="grid min-h-screen bg-zinc-50 dark:bg-zinc-900 grid-cols-1 md:grid-cols-2 lg:grid-cols-app">
      <Sidebar />
      <Header />
      <Outlet />
      <FloatingGhostButton />
    </div>
  )
}

export default App;