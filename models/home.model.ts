export interface House {
  id: string;
  house_name: string;
  house_type: string;
  zone: Zone;
  sell_type: string;
  size: number;
  amenity: Amenity[];
  floor: number;
  price: number;
  number_of_rooms: number;
  number_of_bathrooms: number;
  water_rate: number;
  electricity_rate: number;
  description: string;
  address: string;
  location_latitute: number;
  location_longitute: number;
  is_recommend: boolean;
  images_main: Image;
  images: Image[];
  contact_info: ContactInfo;
}

interface Zone {
  id: string;
  zone_name: string;
}

interface Amenity {
  id: string;
  name: string;
}

interface Image {
  id: string;
  url: string;
  type: string;
}

interface ContactInfo {
  first_name: string;
  last_name: string;
  phone_number: string;
  line_id: string;
}
