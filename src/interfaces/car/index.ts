import { BookingInterface } from 'interfaces/booking';
import { FeedbackInterface } from 'interfaces/feedback';
import { ServiceRequestInterface } from 'interfaces/service-request';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  license_plate: string;
  owner_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  feedback?: FeedbackInterface[];
  service_request?: ServiceRequestInterface[];
  user?: UserInterface;
  _count?: {
    booking?: number;
    feedback?: number;
    service_request?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  license_plate?: string;
  owner_id?: string;
}
