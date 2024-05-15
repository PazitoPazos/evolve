import { RowDataPacket } from 'mysql2'

export interface Plan {
  ram: string
  players: string
  vCPUs: string
  storage: string
  numBackups: string
  ads: string
  price: string
}

export interface FormDialogProps {
  isOpen: boolean
  onClose: () => void
}

export interface ServerDetailsData {
  name: string
  id: string
  address: string
  port: string
  version: string
  description: string
  icon: string
  status: string
}

export interface ServerItemData {
  name: string
  id: string
  description: string
  icon: string
  version: string
}

export interface ServerItemDataRDP extends RowDataPacket {
  name: string
  id: string
  description: string
  icon: string
  version: string
}

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

export interface SubscribeData {
  action: string
  type: string
}

export function isServerItemData(obj: any): obj is ServerItemData

export function isConsoleData(obj: any): obj is ConsoleData

export function isServerUsageData(obj: any): obj is ServerUsageData

export function isServerUsageDetails(obj: any): obj is ServerUsageDetails
