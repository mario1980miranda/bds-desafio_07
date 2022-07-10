import ProductCard from 'components/ProductCard';
import './styles.css';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <div className="base-card search-card">
        <input type="text" placeholder="Digite sua busca" />
        <h2>Buscar</h2>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-4">
            <ProductCard />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-4">
            <ProductCard />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-4">
            <ProductCard />
        </div>
        <div className="col-md-6 col-lg-4 col-xl-4">
            <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
