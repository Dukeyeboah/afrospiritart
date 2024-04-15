import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      blocksCount: 22,
      /**
       * Phases
       * */
      phase: "playing",

      start: () => {
        set((state) => {
          if (state.phase === "ready") return { phase: "playing" };
          return {};
        });
      },
      restart: () => {
        set((state) => {
          if (state.phase === "playing") return { phase: "ready" };
          return {};
        });
      },
    };
  })
);
