import {useStoreActions} from "../store/selectors";

export const api = (endpoint: string, body:any) => {
  const apiUrl = 'https://lldev.thespacedevs.com/2.2.0/'
  const { setLoading, setError } = useStoreActions()

  const get = () => {
    try{
      setLoading(true)
      fetch(apiUrl + endpoint, body)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    get
  }
}
