const Navbar = () => {
  return (
    <div className="sticky top-10 w-full bg-transparent h-20">
      <div className="flex justify-between items-center">
        <div className="flex">
          <a href="/">
            <div
              className="border-2 border-black flex justify-center items-center rounded-full w-11 h-11"
              style={{ border: "3px solid black" }}
            >
              <div className="text-center font-extrabold text-2xl">A</div>
            </div>
          </a>
          <div className="ml-3">
            <div className="font-extrabold text-xl">Mohamed Ameer</div>
            <div className="" style={{ letterSpacing: "5px", fontSize: 10 }}>
              WEB & UI DESIGNER
            </div>
          </div>
        </div>
        <div className="flex">
          <div style={{ letterSpacing: 5, fontSize: 13, fontWeight: 900 }}>
            MENU
          </div>
          <div className="flex flex-col ml-2">
            <div className="w-6 bg-black" style={{ height: 3 }}></div>
            <div className="w-6 bg-black my-1" style={{ height: 3 }}></div>
            <div className="w-6 bg-black" style={{ height: 3 }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
