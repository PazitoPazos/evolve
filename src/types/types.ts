import { ServerUsageDetails, ServerUsageData, ConsoleData, ServerItemData } from './types.d'

export function isServerItemData(obj: any): obj is ServerItemData {
  return (
    typeof obj === 'object' &&
    'serverIcon' in obj &&
    typeof obj.stream === 'string' &&
    'serverName' in obj &&
    typeof obj.type === 'string' &&
    'serverId' in obj &&
    typeof obj.data === 'string' &&
    'serverDescription' in obj &&
    typeof obj.stream === 'string' &&
    'serverVersion' in obj &&
    typeof obj.type === 'string' &&
    'serverStatus' in obj &&
    typeof obj.data === 'string'
  )
}

export function isConsoleData(obj: any): obj is ConsoleData {
  return (
    typeof obj === 'object' &&
    'stream' in obj &&
    typeof obj.stream === 'string' &&
    'type' in obj &&
    typeof obj.type === 'string' &&
    'data' in obj &&
    typeof obj.data === 'string'
  )
}

export function isServerUsageData(obj: any): obj is ServerUsageData {
  return (
    typeof obj === 'object' &&
    'stream' in obj &&
    typeof obj.stream === 'string' &&
    'type' in obj &&
    typeof obj.type === 'string' &&
    'data' in obj &&
    isServerUsageDetails(obj.data)
  )
}

export function isServerUsageDetails(obj: any): obj is ServerUsageDetails {
  return (
    typeof obj === 'object' &&
    'cpuUsage' in obj &&
    typeof obj.cpuUsage === 'number' &&
    'usedMem' in obj &&
    typeof obj.usedMem === 'number' &&
    'totalMem' in obj &&
    typeof obj.totalMem === 'number'
  )
}