import { useRouter } from 'next/router';
import Layout from '../components/Layout';
const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>時間帯に応じた挨拶について...</p>
    </>
  );
};
const Greet = () => (
  <Layout>
    <Content />
  </Layout>
);
export default Greet;
