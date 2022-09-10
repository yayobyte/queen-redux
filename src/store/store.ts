import create from 'zustand'
import moment from 'moment'

export type Store = {
  startDate: string
  endDate: string
  agency?: string
  isSuccessful: boolean
}

const initialState: Store = {
  startDate: moment().format(''),
  endDate: moment().format(''),
  agency: undefined,
  isSuccessful: false,
}

export const useStore = create((set) => ({
  ...initialState,
  setStartDate: (startDate: string) => set({ startDate }),
  setEndDate: (endDate: string) => set({ endDate }),
  setAgency: (agency: string) => set({ agency }),
  setIsSuccessful: (isSuccessful: boolean) => set({ isSuccessful }),
}))
