interface recommendType {
  user: number;
}
export interface CatObjectType {
  id: number;
  cat_name: string;
  shop_name: string;
  prefecture: string;
  cat_images: string[];
  character: string[];
  favorite_things: string[];
  description: string;
  recommend_user: recommendType[];
}
