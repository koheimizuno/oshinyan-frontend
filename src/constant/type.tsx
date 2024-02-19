export interface shopType {
  id?: number;
  shop_type?: { id: string; shop_type: string };
  shop_name: string;
  prefecture: string;
  address?: string;
  nearest_station?: string;
  phone?: string;
  business_time?: string;
  rest_day?: string;
  url?: string;
  created_date?: string;
  shop_images?: { imgs?: string }[];
  cat?: any[];
}

export interface ImageType {
  id: number;
  imgs: string;
}

interface characterType {
  id: number;
  character: string;
}

interface favoritethingType {
  favorite_things: string;
}

interface recommendType {
  id: number;
  user: number;
  cat: number;
}

export interface CatObjectType {
  id: number;
  page?: string;
  is_public?: boolean;
  advertise?: string;
  cat_name: string;
  shop: shopType;
  images?: ImageType[];
  admin_images?: ImageType[];
  character?: characterType[];
  favorite_things?: favoritethingType[];
  attendance: string;
  description: string;
  recommend: recommendType[];
  created_date: string;
}

export interface UserType {
  id: number;
  username: string;
  email: string;
  avatar_url: string;
}

export interface bannerType {
  image: string;
  url: string;
}

export interface CommentImageType {
  id: number;
  imgs: string;
  comment_images_recommend: string[];
  created_date: string;
}

export interface commentType {
  id: number;
  comment: string;
  comment_images: CommentImageType[];
  user: any;
  cat: any;
}

export interface AmbassadorType {
  ambassador_name: string;
  prefecture: string;
}

interface ColumnBlogType {
  id: number;
  imgs: string;
  img_caption: string;
  description: string;
}

export interface ColumnType {
  id?: number;
  title: string;
  cat_name: string;
  hero_image: string;
  created_date: string;
  detail_image?: string;
  subtitle?: string;
  description?: string;
  blog?: ColumnBlogType[];
}

export interface CommentReactionIcon {
  id: number;
  comment: number;
  user: number;
  imgs: string;
}
