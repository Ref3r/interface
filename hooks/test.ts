"use client"
import { useDynamicContext } from "@dynamic-labs/sdk-react-core"

export const useIsAuthenticated = () => {
    const { isAuthenticated } = useDynamicContext()
    return isAuthenticated
}