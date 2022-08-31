// Component Imports
import Sidebar from "./components/sidebar"
import NavBar from "./components/navbar"
import Filters from "./components/filters"
import Contactlist from "./components/contactlist"

const App = () => {
  return (
    <div id="site-wrapper">
      <Sidebar />
      <main>
        <NavBar />
        <Filters />
        <Contactlist />
      </main>
    </div>
  )
}

export default App;
