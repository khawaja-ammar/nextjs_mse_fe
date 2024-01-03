export type SearchQueryRequest = {
  q: string; //Query
  frm: Date; //From Date
  to: Date; //To Date
};

export type Property = {
  hotel_name: string;
  hotel_brand: string;
  hotel_city: string;
  hotel_state: string;
  hotel_country: string;
  hotel_zipcode: string;
  hotel_coordinates: string;
  hotel_checkintime: string;
  hotel_checkouttime: string;
  hotel_imageurls: string[];
  hotel_overview: string;
  hotel_starrating: string;
  hotel_reviewaverage: string;
  hotel_numreviews: number;
};

export type PropertyOld = {
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

export type blogPost = {
  post_id: number; // id might not be needed, title + author PK
  post_title: string;
  post_author: string;
  created_at: string;
  summary: string;
  // summary point
  // Db can do this
  // total_views: number;
  // tags: string[];
};

export type blogIndex = {
  updatedAt: string;
  totalBlogs: number;
  blogPosts: blogPost[];
};
