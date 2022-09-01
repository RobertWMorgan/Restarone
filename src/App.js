// Component Imports
import Sidebar from "./components/sidebar/index"
import NavBar from "./components/navbar"
import Filters from "./components/filters/index"
import Contactlist from "./components/contacts/index"

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
