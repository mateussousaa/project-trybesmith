export default interface User {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface UserWithoutPassword {
  id?: number,
  username: string,
  classe: string,
  level: number,
}

export interface UserLogin {
  username: string,
  password: string,
}