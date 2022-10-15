import type { NextPage } from 'next';
import Button from '../components/Button';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center">GraphGuessr</h1>
      <Button href="/play" color="green">Play</Button>
      <Button href="/howTo" color="orange">How to Play</Button>
    </div>
  );
}

export default Home
