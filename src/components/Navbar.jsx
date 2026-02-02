import GooeyNav from "./GooeyNav";

const items = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Skills", link: "/skills" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
    
];

export default function Navbar() {
  return (
    <header className="relative  ">
      <div className="flex justify-evenly center   "> 
    

        <GooeyNav items={items}  /></div>
     
    </header>
  );
}
