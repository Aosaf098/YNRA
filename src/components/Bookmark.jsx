
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
  return (
    <div className="border border-solid border-slate-500 rounded-lg p-2">
      <h1 className="font-prociono font-bold text-xl">{title}</h1>
    </div>
  )
}

export default Bookmark
