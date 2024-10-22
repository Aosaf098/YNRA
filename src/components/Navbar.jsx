
const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between lg:justify-around items-center p-6 lg:p-4">
            <div className="flex items-center gap-2">
                <img className="lg:w-14" src="https://img.icons8.com/?size=48&id=21735&format=png" alt="Liverpool Logo" />
                <h3 className="text-2xl lg:text-4xl font-prociono font-bold">YNRA</h3>
            </div>
            <div>
                <img className="lg:w-14" src="https://img.icons8.com/?size=48&id=84690&format=png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar
