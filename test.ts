export interface Homes {
    Code:     string;
    Message:  string;
    Data:     Datum[];
    Paginate: Paginate;
}

export interface Datum {
    id:                  string;
    house_name:          string;
    house_type:          HouseType;
    zone:                Zone;
    sell_type:           SellType;
    size:                number;
    amenity:             Amenity[];
    floor:               number;
    price:               number;
    number_of_rooms:     number;
    number_of_bathrooms: number;
    water_rate:          number;
    electricity_rate:    number;
    description:         string;
    address:             string;
    location_latitute:   number;
    location_longitute:  number;
    is_recommend:        boolean;
    images_main:         Image;
    images:              Image[];
    contact_info:        ContactInfo;
}

export interface Amenity {
    id:   string;
    name: string;
}

export interface ContactInfo {
    first_name:   string;
    last_name:    string;
    phone_number: string;
    line_id:      string;
}

export enum HouseType {
    คอนโด = "คอนโด",
    บ้านพัก = "บ้านพัก",
    บ้านเดียว = "บ้านเดียว",
}

export interface Image {
    id:   string;
    url:  string;
    type: Type;
}

export enum Type {
    Cover = "cover",
    Original = "original",
}

export enum SellType {
    ขาย = "ขาย",
    เช่า = "เช่า",
}

export interface Zone {
    id:        string;
    zone_name: ZoneName;
}

export enum ZoneName {
    บึงแก่นนคร = "บึงแก่นนคร",
    หลังมอ = "หลังมอ",
}

export interface Paginate {
    From:  number;
    Size:  number;
    Total: number;
}
