import type { UserAddress } from "./UserAddress";

export interface User {
  id?: number;
  name: string;
  username?: string;
  email?: string;
  phone?: string;
  address?: UserAddress;
  avatar?: string;
}
