interface recommendType {
  user: number;
  cat: number;
}

interface shopType {
  shop_name: string;
  prefecture: string;
}

interface CatImageType {
  imgs: string;
}

export interface CatImageByAdminType {
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

interface AdvertiseImageType {
  imgs: string;
}

export interface CatObjectType {
  advertise?: string;
  id: number;
  cat_name: string;
  shop: shopType;
  cat_images?: CatImageType[];
  advertise_images?: AdvertiseImageType[];
  cat_admin_images?: CatImageByAdminType[];
  character?: characterType[];
  favorite_things?: favoritethingType[];
  attendance: string;
  description: string;
  recommend: recommendType[];
  last_update: string;
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

interface CommentImageType {
  id: number;
  imgs: string;
}

export interface commentType {
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
