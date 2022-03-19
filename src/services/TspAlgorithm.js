import axios from "axios";
import { HOSTS, ENVIRONMENTS, CURRENT_ENVIRIONMENT } from "../enums/hosts";

export const postTspAlgorithm = (data) => {
  return axios.post(`${getHost()}/api/build-shortest-path`, data)
}

const getHost = () => {
  switch (CURRENT_ENVIRIONMENT) {
    case ENVIRONMENTS.LOCAL:
      return HOSTS.LOCAL_HOST
    case ENVIRONMENTS.DEVELPOP:
      return HOSTS.DEVELOP_HOST
    case ENVIRONMENTS.HOMOLOG:
      return HOSTS.HOMOLOG_HOST
    case ENVIRONMENTS.PRODUCTION:
      return HOSTS.PRODUCTION_HOST
    default:
      break;
  }
}