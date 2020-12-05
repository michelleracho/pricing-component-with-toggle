import Footer from './components/Footer';
import PricingContainer from './components/PricingContainer';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <PricingContainer />
      <Footer />
    </div>
  );
}

export default App;

/*

App
  PricingContainer - stateful - annually/monthly prices
    Toggler
    CardList
      Card
        Button

*/
