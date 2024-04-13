import { ServerUsageDetails, ServerUsageData, ConsoleData } from './types.d'

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