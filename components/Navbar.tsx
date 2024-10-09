import ThemeToggle from "./ThemeToggle"




function Navbar() {

    return (
        <>
            <div className="flex justify-between pb-5">
                <h1 className="text-4xl font-extrabold">SPY</h1>
                <div>
                    <ThemeToggle/>
                </div>
            </div>
        </>
    )
}

export default Navbar