export class UserDTO{
  constructor(public operationMessage: string, public operationStatus: string, public item: User) {}
}

export class User {
  constructor(public userId: string, public email: string, public displayName: string, public token: string) {}
}
