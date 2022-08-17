export class User{
    id: number;
    username: string;
    role: string;
    name: string;
    password?: string;
  }

  export class UserDto{
    id?: number;
    name: string;
    encodedCredentials: string;
    accountType: string;
    securityQuestion: string;
    securityAnswer: string;
  }

  export class UserEditDto{
    id?: number;
    name: string;
    securityQuestion: string;
    securityAnswer: string;
    username?: string;
  }

  export class UserSecurityDto{
    id?: number;
    name: string;
    securityQuestion: string;
    username?: string;
  }

  export class UserToVendor{
    id?: number;
    name: string;
    vid?: number;
    vEmail: string;
    vPhoneNumber: string;
  }