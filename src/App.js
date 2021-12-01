import { Header } from './components/Header';
import { ProductSlideshow } from './components/ProductSlideshow';

import '../src/styles/styles.scss';

export default function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <ProductSlideshow/>
      </main>
    </>
  );
}
