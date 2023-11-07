import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface ServiceRequestInterface {
  id?: string;
  request_type: string;
  description?: string;
  status: string;
  user_id: string;
  car_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  car?: CarInterface;
  _count?: {};
}

export interface ServiceRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  request_type?: string;
  description?: string;
  status?: string;
  user_id?: string;
  car_id?: string;
}
