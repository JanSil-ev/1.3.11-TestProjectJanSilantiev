// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Currency } from "../types/types";

// const initialState = {
//   loading: true,
//   currenciesForList: [] as Currency[],
//   currencies: [
//     {
//       CharCode: "RUR",
//       Value: 1,
//       Previous: 1,
//       ID: "1423hgdfg5",
//       Name: "Российский рубль",
//       Nominal: 1,
//       NumCode: "",
//     },
//   ],
//   mainCurrencies: [
//     {
//       CharCode: "RUR",
//       Value: 1,
//       Previous: 1,
//       ID: "1423hgdfg5",
//       Name: "Российский рубль",
//       Nominal: 1,
//       NumCode: "",
//     },
//   ],
//   countFirstField: "100",
//   countSecondField: "",
//   currencyFirstField: "RUR",
//   currencySecondField: "USD",
// };

// export type CurrencyReducerStateType = typeof initialState;

// const currenciesSlice = createSlice({
//   name: "currencies",
//   initialState,
//   reducers: {
//     setCurrencies(state, action: PayloadAction<Currency[]>) {
//       const filteredCurrencies = action.payload.filter((el) => el.CharCode !== "XDR" && el.CharCode !== "TJS");

//       const sortedAndNormalizedCurrencies = filteredCurrencies
//         .sort((a, b) => a.Name.localeCompare(b.Name)) // Используется localeCompare
//         .map((el) => (el.Nominal > 1 ? { ...el, Value: el.Value / el.Nominal, Nominal: 1 } : el));
//       state.currencies = [...state.currencies, ...sortedAndNormalizedCurrencies];

//       state.currenciesForList = filteredCurrencies;
//     },
//     setCurrentCurrency: (state, action: PayloadAction<{ currencyFirstField: string; currencySecondField: string }>) => {
//       state.currencyFirstField = action.payload.currencyFirstField;
//       state.currencySecondField = action.payload.currencySecondField;
//     },
//     changeFieldValue: (state, action: PayloadAction<{ amountFirstField: string; amountSecondField: string }>) => {
//       const { amountFirstField, amountSecondField } = action.payload;
//       state.countFirstField = amountFirstField;
//       state.countSecondField = amountSecondField;
//     },
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.loading = action.payload;
//     },
//     setMainCurrency: (state, action: PayloadAction<Currency[]>) => {
//       state.mainCurrencies = [...state.mainCurrencies, ...action.payload];
//     },
//   },
// });

// export const { setCurrencies, setCurrentCurrency, changeFieldValue, setLoading, setMainCurrency } =
//   currenciesSlice.actions;
// export default currenciesSlice.reducer;



////


// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Currency } from "../types/types";


// const initialState = {
//   loading: true,
//   currenciesForList: [] as Currency[],
//   currencies: [
//     {
//       CharCode: "RUR",
//       Value: 1,
//       Previous: 1,
//       ID: "1423hgdfg5",
//       Name: "Российский рубль",
//       Nominal: 1,
//       NumCode: "",
//     },
//   ],
//   mainCurrencies: [
//     {
//       CharCode: "RUR",
//       Value: 1,
//       Previous: 1,
//       ID: "1423hgdfg5",
//       Name: "Российский рубль",
//       Nominal: 1,
//       NumCode: "",
//     },
//   ],
//   countFirstField: "100",
//   countSecondField: "",
//   currencyFirstField: "RUR",
//   currencySecondField: "USD",
// };

// export type CurrencyReducerStateType = typeof initialState;

// const currenciesSlice = createSlice({
//   name: "currencies",
//   initialState,
//   reducers: {
//     setCurrencies(state, action: PayloadAction<Currency[]>) {
//       const filteredCurrencies = action.payload.filter(
//         (el) => el.CharCode !== "XDR" && el.CharCode !== "TJS"
//       );

//       const sortedAndNormalizedCurrencies = filteredCurrencies
//         .sort((a, b) => a.Name.localeCompare(b.Name))
//         .map((el) => (el.Nominal > 1 ? { ...el, Value: el.Value / el.Nominal, Nominal: 1 } : el));
      
//       state.currencies = [...state.currencies, ...sortedAndNormalizedCurrencies];
//       state.currenciesForList = filteredCurrencies;
//     },
    
//     setCurrentCurrency: (state, action: PayloadAction<{ currencyFirstField: string; currencySecondField: string }>) => {
//       state.currencyFirstField = action.payload.currencyFirstField;
//       state.currencySecondField = action.payload.currencySecondField;
//     },
    
//     changeFieldValue: (state, action: PayloadAction<{ amountFirstField: string; amountSecondField: string }>) => {
//       state.countFirstField = action.payload.amountFirstField;
//       state.countSecondField = action.payload.amountSecondField;
//     },
    
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.loading = action.payload;
//     },
    
//     setMainCurrency: (state, action: PayloadAction<Currency[]>) => {
//       state.mainCurrencies = [...state.mainCurrencies, ...action.payload];
//     },
    
//     resetCurrencyState: () => initialState,
//   },
// });


// export const { 
//   setCurrencies, 
//   setCurrentCurrency, 
//   changeFieldValue, 
//   setLoading, 
//   setMainCurrency,
//   resetCurrencyState
// } = currenciesSlice.actions;

// export default currenciesSlice.reducer;


// ////

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currency } from "../types/types";

const initialState = {
  loading: true,
  currenciesForList: [] as Currency[],
  currencies: [
    {
      CharCode: "RUR",
      Value: 1,
      Previous: 1,
      ID: "1423hgdfg5",
      Name: "Российский рубль",
      Nominal: 1,
      NumCode: "",
    },
  ],
  mainCurrencies: [
    {
      CharCode: "RUR",
      Value: 1,
      Previous: 1,
      ID: "1423hgdfg5",
      Name: "Российский рубль",
      Nominal: 1,
      NumCode: "",
    },
  ],
  countFirstField: "100",
  countSecondField: "",
  currencyFirstField: "RUR",
  currencySecondField: "USD",
  error: null as string | null,
};

export type CurrencyReducerStateType = typeof initialState;

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    setCurrencies(state, action: PayloadAction<Currency[]>) {
      try {
        // Фильтрация и удаление дубликатов
        const uniqueCurrencies = action.payload.filter(
          (currency, index, self) =>
            index === self.findIndex((c) => c.ID === currency.ID)
        );

        const filteredCurrencies = uniqueCurrencies.filter(
          (el) => el.CharCode !== "XDR" && el.CharCode !== "TJS"
        );

        const sortedAndNormalizedCurrencies = filteredCurrencies
          .sort((a, b) => a.Name.localeCompare(b.Name))
          .map((el) =>
            el.Nominal > 1
              ? { ...el, Value: el.Value / el.Nominal, Nominal: 1 }
              : el
          );

        state.currencies = [...state.currencies, ...sortedAndNormalizedCurrencies];
        state.currenciesForList = filteredCurrencies;
        state.error = null;
      } catch (err) {
        state.error = "Failed to process currencies data";
      }
    },
    setCurrentCurrency: (
      state,
      action: PayloadAction<{ currencyFirstField: string; currencySecondField: string }>
    ) => {
      state.currencyFirstField = action.payload.currencyFirstField;
      state.currencySecondField = action.payload.currencySecondField;
    },
    changeFieldValue: (
      state,
      action: PayloadAction<{ amountFirstField: string; amountSecondField: string }>
    ) => {
      const { amountFirstField, amountSecondField } = action.payload;
      state.countFirstField = amountFirstField;
      state.countSecondField = amountSecondField;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setMainCurrency: (state, action: PayloadAction<Currency[]>) => {
      state.mainCurrencies = [...state.mainCurrencies, ...action.payload];
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    swapCurrencies: (state) => {
      const temp = state.currencyFirstField;
      state.currencyFirstField = state.currencySecondField;
      state.currencySecondField = temp;
    },
    resetCurrencies: (state) => {
      return {
        ...initialState,
        currencyFirstField: state.currencyFirstField,
        currencySecondField: state.currencySecondField,
      };
    },
  },
});

export const {
  setCurrencies,
  setCurrentCurrency,
  changeFieldValue,
  setLoading,
  setMainCurrency,
  setError,
  swapCurrencies,
  resetCurrencies,
} = currenciesSlice.actions;

export default currenciesSlice.reducer;