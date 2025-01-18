import { create } from "zustand";

interface GameState {
  gameName: string;
  numTeams: number;
  teamNames: string[];
  numRounds: number;
  goalScore: number;
  scores: number[]; // scores per team
  roundScores: number[];
  roundHistory: {
    round: number;
    scores: number[];
    submittedScores: number[];
  }[];
}

const useGameStore = create<GameState>((set, get) => ({
  gameName: "NewGame",
  numTeams: 4,
  teamNames: [],
  numRounds: 0,
  goalScore: 0,
  scores: [],
  roundScores: [],
  roundHistory: [],

  addRoundHistory: (roundData) => {
    set((state) => ({ roundHistory: [...state.roundHistory, roundData] }));
  },
  setGameData: (data) => {
    set({ ...data });
  },
  setScores: (newScores) => {
    set({ scores: newScores });
  },
  setRoundScores: (newRoundScores) => {
    set({ roundScores: newRoundScores });
  },
  setRoundHistory: (newRoundHistory) => {
    set({ roundHistory: newRoundHistory });
  },
}));

export default useGameStore;
