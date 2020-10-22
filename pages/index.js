import Layout from '../components/Layout';
import GreetLink from '../components/GreetLink';

export default function Index() {
  return (
    <>
      <Layout>
      <h1>挨拶一覧</h1>
      <ul>
        <GreetLink title="おはようございます！" />
        <GreetLink title="こんにちは！" />
        <GreetLink title="こんばんは！" />
      </ul>
      </Layout>
    </>
  );
}
