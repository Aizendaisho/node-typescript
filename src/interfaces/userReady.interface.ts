import { UserAuthInterface } from "./userAuth.interface";

export interface UserReady extends UserAuthInterface {
  name: string;
  description: string;
}
