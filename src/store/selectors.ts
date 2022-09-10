import {useStore} from "./store";

export const useStoreSelector = () => {
  // @ts-ignore
  const { startDate, endDate, isSuccessful, agency, error, loading } = useStore((state) => state)
  return { startDate, endDate, isSuccessful, agency, error, loading }
}

export const useStoreActions = () => {
  // @ts-ignore
  const { setAgency, setEndDate, setStartDate, setIsSuccessful, setLoading, setError, setLaunchList } = useStore((state) => state)
  return { setAgency, setEndDate, setStartDate, setIsSuccessful, setLoading, setError, setLaunchList }
}
