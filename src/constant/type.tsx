interface recommendType {
  user: number;
  cat: number;
}

interface CatImageType {
  imgs: string;
}
export interface CatObjectType {
  id: number;
  cat_name: string;
  shop_name: string;
  prefecture: string;
  cat_images: CatImageType[];
  character: string[];
  favorite_things: string[];
  attendance: string;
  description: string;
  recommend: recommendType[];
  last_update: string;
}

export interface UserType {
  id: number;
  username: string;
  email: string;
  prefecture: string;
  avatar_url: string;
}
