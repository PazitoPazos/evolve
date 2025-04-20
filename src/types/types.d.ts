import { RowDataPacket } from 'mysql2'

export interface Plan {
  name: string
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

export type ServerConfig = {
  'max-players': string
  gamemode: string
  difficulty: string
  hardcore: string
  'white-list': string
  'online-mode': string
  pvp: string
  'view-distance': string
  'simulation-distance': string
  'commands-blocks': string
  'allow-flight': string
  'spawn-animals': string
  'spawn-monsters': string
  'spawn-npcs': string
  'allow-nether': string
  'force-gamemode': string
  'spawn-protection': string
  'require-resource-pack': string
  'resource-pack': string
}

export function isServerItemData(obj: any): obj is ServerItemData

export function isConsoleData(obj: any): obj is ConsoleData

export function isServerUsageData(obj: any): obj is ServerUsageData

export function isServerUsageDetails(obj: any): obj is ServerUsageDetails
