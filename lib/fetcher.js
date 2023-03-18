import useSWR from "swr";

// const baseURL = process.env.baseURL;
const baseURL = "http://localhost:3000/";

const apiResponse = (...args) => fetch(...args).then((res) => res.json());

export default function fetcher(endpoint) {
  const { data, error } = useSWR(`${baseURL}${endpoint}`, apiResponse);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
