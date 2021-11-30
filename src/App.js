import { Header } from './components/Header';
import { ProductTileListSlideshow } from './components/ProductTileListSlideshow';

import '../src/styles/styles.scss';

export default function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <ProductTileListSlideshow/>
      </main>
    </>
  );
}
