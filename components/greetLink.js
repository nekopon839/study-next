import Link from 'next/link';
const GreetLink = props => (
  <li>
    <Link href={`/greet?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default GreetLink
