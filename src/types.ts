export type SearchQueryRequest = {
  q: string; //Query
  frm: Date; //From Date
  to: Date; //To Date
};

// v1
// type RoomCharges = {
//   roomCharge_option: boolean;
//   roomCharge_type: string;
//   roomCharge_amount: number;
// };

// type Room = {
//   room_name: string;
//   room_affiliateUrl: string;
//   room_priceEXCtax: number;
//   room_priceINCtax: number;
//   room_freeWifi: boolean;
//   room_freeCancellation: boolean;
//   room_breakfastIncluded: boolean;
//   room_charges?: RoomCharges[];
// };

// export type Property = {
//   property_ota: string;
//   property_name: string;
//   property_imgUrl: string;
//   property_lat: number;
//   property_lng: number;
//   property_rooms: Room[];
// };

// v2
export type Property = {
  // property_city_country: string; // TODO: ADD THIS
  property_ota: string;
  property_name: string;
  property_imgUrl: string;
  property_lat: number;
  property_lng: number;
  room_name: string;
  room_affiliateUrl: string;
  room_priceEXCtax: number;
  room_priceINCtax: number;
  room_freeWifi: boolean;
  room_freeCancellation: boolean;
  room_breakfastIncluded: boolean;
  roomCharge_option: boolean;
  roomCharge_type: string;
  roomCharge_amount: number;
};

export type SearchQueryResponse = {
  currency: string;
  properties: Property[];
};
