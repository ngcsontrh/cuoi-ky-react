import Sidebar from "./components/Sidebar"
import Table from "./components/Table"

const App = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <Table />
      </div>
    </div>
  )
}
export default App