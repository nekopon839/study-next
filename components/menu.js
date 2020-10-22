import Link from 'next/link';
const linkStyle = {
  margin: 15,
};
const Menu = () => (
  <>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </>
);
export default Menu;
