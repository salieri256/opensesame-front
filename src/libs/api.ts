import axios from "axios"
import useSWR from "swr"
import type { UserBase, User } from "@/types/user"
import type { DoorBase, Door } from "@/types/door"
import type { ActivityLog } from "@/types/activityLog"
import type { LockLog } from "@/types/lockLog"

const API_BASE_URL = process.env.NEXT_PUBLIC_DB_SERVICE_BASE_URL

const fetcher = async <T>(path: string) => {
    return await axios.get<T>(API_BASE_URL + path).then(res => res.data)
}

const poster = async <T>(path: string, data: any) => {
    return await axios.post<T>(API_BASE_URL + path, data).then(res => res.data)
}

const putter = async <T>(path: string, data: any) => {
    return await axios.put<T>(API_BASE_URL + path, data).then(res => res.data)
}

const deleter = async (path: string) => {
    return await axios.delete(API_BASE_URL + path).then(res => res.data)
}

export const useUsers = () => {
    return useSWR<User[]>('/users', fetcher)
}

export const useDoors = () => {
    return useSWR<Door[]>('/doors', fetcher)
}

export const useActivityLogs = () => {
    return useSWR<ActivityLog[]>('/logs/activities', fetcher)
}

export const useLockLogs = () => {
    return useSWR<LockLog[]>('/logs/locks', fetcher)
}

export const useUser = (userId: number) => {
    return useSWR<User>(`/users/${userId}`, fetcher)
}

export const useDoor = (doorId: number) => {
    return useSWR<Door>(`/doors/${doorId}`, fetcher)
}

export const postUser = async (data: UserBase) => {
    return await poster<User>('/users', data)
}

export const postDoor = async (data: DoorBase) => {
    return await poster<Door>('/doors', data)
}

export const putUser = async (userId: number, data: UserBase) => {
    return await putter<User>(`/users/${userId}`, data)
}

export const putDoor = async (doorId: number, data: DoorBase) => {
    return await putter<Door>(`/doors/${doorId}`, data)
}

export const deleteUser = async (userId: number) => {
    return await deleter(`/users/${userId}`)
}

export const deleteDoor = async (doorId: number) => {
    return await deleter(`/doors/${doorId}`)
}