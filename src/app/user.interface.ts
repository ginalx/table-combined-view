export interface User {
  id: number;
  username: string;
  address: Address;
  email: string;
}

interface Address {
  city: string;
}
