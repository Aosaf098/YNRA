import Blogs from "./components/Blogs"
import Bookmarks from "./components/Bookmarks"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="border-4 border-solid border-blue-500 flex lg:flex-row flex-col justify-around mt-20 w-3/4 mx-auto gap-10">
        <Blogs />
        <Bookmarks />
      </div>
    </div>
  )
}

export default App
