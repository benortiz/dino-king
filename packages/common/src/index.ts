export type TeamColor = 'blue' | 'orange'

export type CentralGameState = {
  playerStateById: PlayerStateById
}

export type CharacterType = 'king' | 'knight' | 'peon'

export type PlayerBodyState = {
  acceleration: Phaser.Math.Vector2
  position: Phaser.Math.Vector2
  velocity: Phaser.Math.Vector2
}

export type PlayerStateById = {
  [id: number]: PlayerState
}

export type PlayerState = {
  playerBodyState: PlayerBodyState
  isAlive: boolean
}
export type PlayerRegistration = {
  id: number
  characterConfig: CharacterConfig
}
export type CharacterConfig = {
  team: TeamColor
  type: CharacterType
}

export enum KingClientMessage {
  KILL_PLAYER = 'KILL_PLAYER',
  NEW_GAME = 'NEW_GAME',
  REQUEST_CHARACTER = 'REQUEST_CHARACTER',
  REQUEST_PLAYERS = 'REQUEST_PLAYERS',
  PLAYER_BODY_STATE = 'PLAYER_BODY_STATE'
}

export enum KingServerMessage {
  ASSIGN_CHARACTER = 'ASSIGN_CHARACTER',
  PLAYER_REGISTRATIONS = 'PLAYER_REGISTRATIONS',
  HANDLE_NEW_PLAYER = 'HANDLE_NEW_PLAYER',
  HANDLE_PLAYER_DISCONNECTED = 'HANDLE_PLAYER_DISCONNECTED',
  UPDATE_GAME_STATE = 'UPDATE_GAME_STATE',
  UPDATE_PLAYER_STATE = 'UPDATE_PLAYER_STATE'
}
