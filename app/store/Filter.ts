import { create } from "zustand";
export interface IFilter {
  destination: string;
  type: string;
  duration: string;
}
interface IFilterStore extends IFilter {
  setFilter: (filters: IFilter) => void;
}
const useFilterStore = create<IFilterStore>((set, ) => ({
  destination: "",
  duration: "",
  type: "",
  setFilter: (filters)=>{
    set(filters)
  }
}));
export default useFilterStore