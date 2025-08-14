import { data } from '@/data';
import { ProductList } from '../product-list';

export const MostSoldProducts = async () => {
  //TODO: Fazer a requisição dos produtos
  return (
    <div className="mt-10 text-center md:text-left">
      <h2 className="text-2xl ">Produtos mais vendidos</h2>
      <p className="text-gray-500 ">Campeões de vendas da nossa loja</p>

      <div className="mt-9">
        <ProductList list={data.products} />
      </div>
    </div>
  );
};
