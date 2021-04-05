import { useLocation } from "react-router-dom"

export default function useQuery<T extends { [key: string]: string | undefined }>(): T {
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    return Object.fromEntries(query.entries()) as T
}
