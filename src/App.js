import styles from './App.module.css';
import Footer from './components/Footer';
import PricingContainer from './components/PricingContainer';

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
