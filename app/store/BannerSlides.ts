import { create } from 'zustand'

interface IBannerSlideStore {
    active :number ,
    slideLength :number ,
    setSlideLength: (length: number) => void,
    nextIndex:()=>void ,
    prevIndex :()=>void
}
const useBannerSlideStoe =create<IBannerSlideStore>((set ,get)=>({
    active:0,
    slideLength:0 ,
    setSlideLength: (length) => set({ slideLength: length }),
    prevIndex: () => {
        const { active, slideLength } = get();
        set({
          active: (active - 1 + slideLength) % slideLength,
        });
      },
    nextIndex: () => {
        const { active, slideLength } = get();
        set({
          active: (active + 1) % slideLength,
        });
      },
}));

export default useBannerSlideStoe
