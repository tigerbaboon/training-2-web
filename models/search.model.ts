export interface searchHomes {
    search?: string;
    zone_Id?: string;
    minPrice: number;
    maxPrice: number;
}

export interface queryHome {
    search_by_name: string;
    search_by_zone: string;
    price_start: number;
    price_end: number;
}