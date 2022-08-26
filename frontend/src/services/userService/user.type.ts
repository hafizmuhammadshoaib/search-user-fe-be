export interface User {
  id: number;
  fullname: string;
  email: string;
  address?: Address;
}

export interface Address {
  id: number;
  city: string;
  country: string;
  streetAddress: string;
}

export type Users = User[];
