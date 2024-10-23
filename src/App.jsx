import { useState } from "react"
import Blogs from "./components/Blogs"
import Bookmarks from "./components/Bookmarks"
import Navbar from "./components/Navbar"

const App = () => {

  const [bookmarks, setBookmarks] = useState([])

  const [readingTime, setReadingTime] = useState(0)

  const handleBookMark = blog => {
    console.log(blog.title)
    const newBookMark = [...bookmarks, blog]
    setBookmarks(newBookMark)
  }

  const handleReadingTime = (id, time) => {
    setReadingTime(readingTime + time)

    const removeBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(removeBookmark)
  }
  
  return (
    <div>
      <Navbar />
      <div className="flex lg:flex-row flex-col justify-around mt-20 lg:w-3/4 mx-4 lg:mx-auto gap-10">
        <Blogs handleBookMark={handleBookMark} handleReadingTime={handleReadingTime} />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </div>
  )
}

export default App
