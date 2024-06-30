type NavBarProps = {
  id: string;
  title: string;
  className?: string;
};

function NavBar({ itemData }: { itemData: NavBarProps[] }) {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        {itemData.map((item, i) => (
          <li key={i} className={`navbar__li ${item.className}`}>
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavBar;
