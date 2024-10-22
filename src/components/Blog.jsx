
const Blog = ({blog}) => {
    const {title, authorName, coverImage, profilePic, tags, readingTime} = blog
  return (
    <>
     <div className="border-4 border-solid border-blue-500 md:p-4 p-2">
        <img className="lg:max-h-64 md:max-h-64 w-full rounded-md" src={coverImage} alt="" />
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 my-2">
                <img className="w-10 h-10 rounded-[50%] animate-spin" src={profilePic} alt="" />
                <h3 className="font-semibold">{authorName}</h3>
            </div>
            <div className="flex items-center gap-1">
                <span className="font-medium">{readingTime} read</span>
                <img className="w-5 cursor-pointer" src="https://img.icons8.com/?size=24&id=82461&format=png" alt="" />
            </div>
        </div>
        <h1 className="text-xl md:text-xl font-bold">{title}</h1>
        <div className="flex gap-4 my-2">
            <span className="text-purple-600">{tags.hashtags[0]}</span>
            <span className="text-purple-600">{tags.hashtags[1]}</span>
            <span className="text-purple-600">{tags.hashtags[2]}</span>
        </div>
        <a className="text-purple-700 decoration-solid underline" href="">Mark as Read</a>
     </div>
    </>
  )
}

export default Blog
