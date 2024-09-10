import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWallet } from '../redux/wallets/walletActions';

export default function WalletForm() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addWallet({ name }));
      setName('');
    }
  };

  return (
    <>
      <div className="wallet-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="New Wallet"
          />
          <button type="submit">Add Wallet</button>
        </form>
      </div>
      
    </>
  );
}
