import { useNavigate } from "react-router"

export const useNav = () => {
  const navigate = useNavigate();
  const changePage = (id) => {
    navigate(`/${destination}`)
  }
  return {changePage}
}