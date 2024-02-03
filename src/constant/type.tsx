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

interface characterType {
  id: number;
  character: string;
}

interface favoritethingType {
  favorite_things: string;
}

export interface CatObjectType {
  id: number;
  cat_name: string;
  // shop_name: string;
  // prefecture: string;
  shop: shopType;
  cat_images: CatImageType[];
  character: characterType[];
  favorite_things: favoritethingType[];
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
