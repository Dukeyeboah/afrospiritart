import {create} from 'zustand';

const useAddressStore = create((set) => ({
  address: '',
  setAddress: (newAddress) => set({ address: newAddress }),
}));

export default useAddressStore;