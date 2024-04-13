export interface ConsoleData {
  stream: string
  type: string
  data: string
}

export interface ServerUsageData {
  stream: string
  type: string
  data: ServerUsageDetails
}

export interface ServerUsageDetails {
  cpuUsage: number
  usedMem: number
  totalMem: number
}


export function isConsoleData(obj: any): obj is ConsoleData;

export function isServerUsageData(obj: any): obj is ServerUsageData;

export function isServerUsageDetails(obj: any): obj is ServerUsageDetails;