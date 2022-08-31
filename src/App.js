// Component Imports
import Sidebar from "./components/sidebar"
import Navbar from "./components/navbar"
import Filters from "./components/filters"
import Contactlist from "./components/contactlist"

const App = () => {
  return (
    <div id="site-wrapper">
      <Sidebar />
      <main>
        <Navbar />
        <Filters />
        <Contactlist />
      </main>
    </div>
  )
}

export default App;
