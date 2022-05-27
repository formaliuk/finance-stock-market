import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/actions';

export function useDeleteStock(ticker) {
  const dispatch = useDispatch();
  return function deleteStockHandler() {
    dispatch(deleteItem(ticker));
  };
}
