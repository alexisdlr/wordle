import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { validateAnswer, validateKeyboard } from '../../lib/utils';

type StateProps = {
  matches: number;
  wins: number;
  word: string;
  hasLose: boolean;
  hasWin: boolean;
  modal: 'start-game' | 'statistics' | 'none';
  answer: string[][];
  currentRow: number;
  validation: Record<string, string>[];
  keyboardValidation: Record<string, string>;
  isDarkMode: boolean;
};

const gameSlice = createSlice({
  name: 'root',
  initialState: {
    matches: 0,
    wins: 0,
    word: 'hello',
    modal: 'start-game',
    hasLose: false,
    hasWin: false,
    answer: [[], [], [], [], []],
    currentRow: 0,
    validation: [{}, {}, {}, {}, {}],
    keyboardValidation: {},
    isDarkMode: true
  } as StateProps,
  reducers: {
    toggleDarkMode: (state: StateProps) => {
      state.isDarkMode = !state.isDarkMode;

      return state;
    },
    restartMatch: (state: StateProps) => {
      state.matches = 0;
      state.wins = 0;
      state.word = 'hello';
      state.modal = 'start-game';
      state.hasLose = false;
      state.hasWin = false;
      state.answer = [[], [], [], [], []];
      state.currentRow = 0;
      state.validation = [{}, {}, {}, {}, {}];
      return state;
    },
    setWord: (state: StateProps, action: PayloadAction<string>) => {
      state.word = action.payload;

      return state;
    },
    addKeyOnAnswer: (state: StateProps, { payload }: PayloadAction<string>) => {
      state.answer[state.currentRow].push(payload);

      return state;
    },
    removeKeyOnAnswer: (state: StateProps) => {
      state.answer[state.currentRow].pop();

      return state;
    },
    submitWord: (state: StateProps) => {
      let validation: Record<string, string> = {};
      state.answer.forEach(row => {
        if (row.length !== 0) {
          validation = validateAnswer(state.word, row);
        }
      });

      state.validation[state.currentRow] = validation;

      state.keyboardValidation = validateKeyboard(state.word, state.answer);

      const hasWin = Object.values(validation).every(
        value => value === 'right'
      );
      if (hasWin) {
        toast.success('Has ganado!');
        state.matches = state.matches + 1;
        state.wins = state.wins + 1;
        state.modal = 'statistics';
        state.hasWin = true;
        return state;
      }

      if (state.currentRow === 4) {
        toast('Has perdido! :c');
        state.matches = state.matches + 1;
        state.hasLose = true;
        state.modal = 'statistics';
        return state;
      }

      state.currentRow += 1;
      return state;
    },
    openStartGameModal: (state: StateProps) => {
      state.modal = 'start-game';

      return state;
    },
    closeStartGameModal: (state: StateProps) => {
      state.modal = 'none';

      return state;
    },
    openStatisticsModal: (state: StateProps) => {
      state.modal = 'statistics';

      return state;
    },
    closeStatisticsModal: (state: StateProps) => {
      state.modal = 'none';

      return state;
    }
  }
});

export const {
  toggleDarkMode,
  restartMatch,
  setWord,
  addKeyOnAnswer,
  removeKeyOnAnswer,
  submitWord,
  openStartGameModal,
  closeStartGameModal,
  openStatisticsModal,
  closeStatisticsModal
} = gameSlice.actions;

export default gameSlice.reducer;