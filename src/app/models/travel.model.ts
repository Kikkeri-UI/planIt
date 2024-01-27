export interface Root {
  data: Daum[]
  metadata: Metadata
  sort: Sort[]
  partial_content: boolean
  tracking: Tracking
  paging: Paging
}

export interface Daum {
  result_type: string
  result_object: ResultObject
  scope: string
  is_top_result?: boolean
  search_explanations?: SearchExplanations
  review_snippet?: ReviewSnippet
}

export interface ResultObject {
  location_id: string
  name: string
  latitude?: string
  longitude?: string
  num_reviews: string
  timezone: string
  location_string: string
  photo: Photo
  awards: any[]
  doubleclick_zone?: string
  preferred_map_engine: string
  geo_type?: string
  category_counts?: CategoryCounts
  map_image_url?: string
  nearby_attractions?: any[]
  description: string
  is_localized_description?: boolean
  web_url: string
  ancestors: Ancestor[]
  category: Category
  subcategory: Subcategory2[]
  is_jfy_enabled: boolean
  nearest_metro_station: any[]
  geo_description?: string
  has_restaurant_coverpage?: boolean
  has_attraction_coverpage?: boolean
  has_curated_shopping_list?: boolean
  location_subtype?: string
  distance: any
  distance_string: any
  bearing: any
  rating?: string
  is_closed?: boolean
  open_now_text?: string
  is_long_closed?: boolean
  address_obj?: AddressObj
  address?: string
  is_candidate_for_contact_info_suppression?: boolean
  fee?: string
  special_offers?: SpecialOffers
  amenities?: any[]
  supplier_location_id?: string
  supplier_location_name?: string
  supplier_location_subtype?: string
  is_reviewable?: boolean
  cuisine?: Cuisine[]
  establishment_types?: EstablishmentType[]
}

export interface Photo {
  images: Images
  is_blessed: boolean
  uploaded_date: string
  caption: string
  id: string
  helpful_votes: string
  published_date: string
  user?: User
}

export interface Images {
  small: Small
  thumbnail: Thumbnail
  original: Original
  large: Large
  medium: Medium
}

export interface Small {
  width: string
  url: string
  height: string
}

export interface Thumbnail {
  width: string
  url: string
  height: string
}

export interface Original {
  width: string
  url: string
  height: string
}

export interface Large {
  width: string
  url: string
  height: string
}

export interface Medium {
  width: string
  url: string
  height: string
}

export interface User {
  user_id: any
  member_id: string
  type: string
}

export interface CategoryCounts {
  attractions: Attractions
  restaurants: Restaurants
  accommodations: Accommodations
  neighborhoods: string
  airports: string
}

export interface Attractions {
  activities: string
  attractions: string
  nightlife: string
  shopping: string
  total: string
}

export interface Restaurants {
  total: string
}

export interface Accommodations {
  hotels: string
  bbs_inns: string
  others: string
  total: string
}

export interface Ancestor {
  subcategory: Subcategory[]
  name: string
  abbrv?: string
  location_id: string
}

export interface Subcategory {
  key: string
  name: string
}

export interface Category {
  key: string
  name: string
}

export interface Subcategory2 {
  key: string
  name: string
}

export interface AddressObj {
  street1?: string
  street2?: string
  city: string
  state?: string
  country: string
  postalcode?: string
}

export interface SpecialOffers {
  desktop: any[]
  mobile: any[]
}

export interface Cuisine {
  key: string
  name: string
}

export interface EstablishmentType {
  key: string
  name: string
}

export interface SearchExplanations {
  mentioned_by_travelers: string
}

export interface ReviewSnippet {
  snippet: string
  spans: Span[]
  review_id: string
}

export interface Span {
  start_index: number
  end_index: number
}

export interface Metadata {
  scope: string
}

export interface Sort {
  filter_key: string
  label: string
  locale_independent_label: string
  selected: boolean
}

export interface Tracking {
  search_id: string
}

export interface Paging {
  results: string
  total_results: string
}
