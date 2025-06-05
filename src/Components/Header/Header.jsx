import  "./Header.css"
export default function Header() {
  return (
    <div className="header-wrapper">
      <h1 className="header-txt">Shopping List</h1>
      <div className="header-image-wrapper">
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_uGkxas996xADvM9zs8iU2LG4FISXGPyzQ&s"
        alt="Shopping Banner"
        className="header-image"
      />
      </div>
      
    </div>
  );
}
