interface recommentUserType {
  id: number;
  username: string;
  avatar_url: string;
}

interface recommendType {
  user: recommentUserType;
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
  recommend_user: recommendType[];
  last_update: string;
}
