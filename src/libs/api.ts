import { useEffect, useState } from "react"

type User = {
    id: number
    name: string
    isActive: boolean
    nfcId: string
}

type Door = {
    id: number
    name: string
    isLocked: boolean
}

type ActivityLog = {
    id: number
    unixTime: number
    isActive: boolean
    userId: number
}

type LockLog = {
    id: number
    unixTime: number
    isLocked: boolean
    doorId: number
    userId: number
}

const useAPI = <T>(input: RequestInfo | URL, init?: RequestInit | undefined) => {
    const [data, setData] = useState<T>()

    useEffect(() => {
        fetch(input, init)
        .then<T>(res => res.json())
        .then(object => setData(object))
    }, [])

    return data
}

export const useUsers = () => {
    return useAPI<User[]>('http://192.168.11.10:8000/users', {mode: 'cors'})
}

export const useDoors = () => {
    return useAPI<Door[]>('http://192.168.11.10:8000/doors', {mode: 'cors'})
}

export const useActivityLogs = () => {
    return useAPI<ActivityLog[]>('http://192.168.11.10:8000/logs/activities', {mode: 'cors'})
}

export const useLockLogs = () => {
    return useAPI<LockLog[]>('http://192.168.11.10:8000/logs/locks', {mode: 'cors'})
}