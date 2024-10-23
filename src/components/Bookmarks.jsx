import Bookmark from "./Bookmark"

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <>
     <div className="lg:w-1/3">
        <h1 className="text-center font-prociono text-3xl font-bold">Bookmarks: {bookmarks.length}</h1>
        <div className="mt-6">
            <h1 className="text-center font-bold font-prociono text-2xl">Total Reading Time: {readingTime} min</h1>
        </div>
        <div className="flex flex-col gap-6 my-9 rounded-lg border border-solid border-slate-500 p-2">
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}/>)
            }
        </div>
     </div>
    </>
  )
}

export default Bookmarks
