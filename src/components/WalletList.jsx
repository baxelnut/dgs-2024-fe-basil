import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchWallets,
  deleteWallet,
  fetchWalletsById,
  updateWallet,
} from '../redux/wallets/walletActions';
import WalletForm from './WalletForm';

export default function WalletList() {
  const [name, setName] = useState('');
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();
  const { items, loading, error, itemsDetail, loadingDetail, errorDetail } =
    useSelector((state) => state.wallets);

  useEffect(() => {
    console.log('test');
    dispatch(fetchWallets());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleUpdate = (walletName, id) => {
    if (walletName.trim()) {
      const payload = {
        name: walletName,
      };
      dispatch(updateWallet(payload, id));
    }
  };
  return (
    <div className="wallet-list">
      <div className="wallet-list-head">
        <WalletForm />
        <div className="head-child">
          <h6>Detail wallet yang dipilih</h6>
          {loadingDetail ? (
            <p>Loading...</p>
          ) : errorDetail ? (
            <p>Error: {errorDetail}</p>
          ) : (
            <>
              <p>id: {itemsDetail._id}</p>
              <p>name: {itemsDetail.name}</p>
              <p>test {itemsDetail.toString()}</p>
              <button onClick={() => setShowInput(true)}>Edit</button>
              {showInput && (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Update Wallet Name"
                  />
                  <button onClick={() => handleUpdate(name, itemsDetail._id)}>
                    Update
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div className="list-view">
        <div className="title">
          Restaurant & Cafe
          <p>20 August 2019</p>
        </div>
        <div className="trailing">
          -$99,00
          <button>📌</button>
          <button>❌</button>
        </div>
      </div>
      {items.map((wallet) => (
        <div
          key={wallet._id}
          className="list-view"
          onClick={() => dispatch(fetchWalletsById(wallet._id))}
        >
          <div className="title">
            {wallet.name}
            <p>20 August 2019</p>
          </div>
          <div className="trailing">
            -$99,00
            <button onClick={() => console.log('pinned fun')}>📌</button>
            <button onClick={() => dispatch(deleteWallet(wallet._id))}>
              ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
