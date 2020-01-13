import { Location } from './location';
export interface Address {
  id?: string;
  gmID: string;
  placeID: string;
  name?: string;
  icon?: string;
  displayAddress?: string;
  postalCode?: number;
  streetNumber?: number;
  streetName?: string;
  sublocality?: string;
  locality?: {
    short?: string;
    long?: string;
  };
  state?: {
    short?: string;
    long?: string;
  };
  country?: {
    short?: string;
    long?: string;
  };
  vicinity?: string;
  url?: string;
  geoLocation?: Location;
}
