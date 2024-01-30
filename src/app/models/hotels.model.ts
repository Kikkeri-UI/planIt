export interface Result {
    data: Daum[]
    status: Status
    paging: Paging
  }
  
  export interface Daum {
    location_id: string
    name?: string
    latitude?: string
    longitude?: string
    num_reviews?: string
    timezone?: string
    location_string?: string
    photo?: Photo
    awards?: any[]
    preferred_map_engine?: string
    autobroaden_type?: string
    autobroaden_label?: string
    raw_ranking?: string
    ranking_geo?: string
    ranking_geo_id?: string
    ranking_position?: string
    ranking_denominator?: string
    ranking_category?: string
    ranking?: string
    subcategory_type?: string
    subcategory_type_label?: string
    distance?: string
    distance_string: any
    bearing?: string
    rating?: string
    is_closed?: boolean
    is_long_closed?: boolean
    price_level?: string
    price?: string
    neighborhood_info?: NeighborhoodInfo[]
    hotel_class?: string
    hotel_class_attribution?: string
    business_listings?: BusinessListings
    special_offers?: SpecialOffers
    listing_key?: string
    ad_position?: string
    ad_size?: string
    doubleclick_zone?: string
    ancestors?: Ancestor[]
    detail?: string
    page_type?: string
    mob_ptype?: string
    open_now_text?: string
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
  
  export interface NeighborhoodInfo {
    location_id: string
    name: string
  }
  
  export interface BusinessListings {
    desktop_contacts: any[]
    mobile_contacts: MobileContact[]
  }
  
  export interface MobileContact {
    value: string
    label: string
    type: string
  }
  
  export interface SpecialOffers {
    desktop: any[]
    mobile: Mobile[]
  }
  
  export interface Mobile {
    headline: string
    url: string
    offerless_click_tracking_url: string
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
  
  export interface Status {
    unfiltered_total_size: string
    commerce_country_iso_code: string
    autobroadened: boolean
    progress: string
    auction_key: string
    primary_geo: string
    pricing: string
    doubleClickZone: string
  }
  
  export interface Paging {
    results: string
    total_results: string
  }
  