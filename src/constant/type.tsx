interface recommendType {
  user: number;
  cat: number;
}

export interface shopType {
  id?: number;
  category?: string;
  shop_name: string;
  prefecture: string;
  address?: string;
  nearest_station?: string;
  phone?: string;
  business_time?: string;
  rest_day?: string;
  url?: string;
  last_update?: string;
  shop_images?: { imgs: string }[];
  cat?: any[];
}

// shop_name = models.CharField(max_length=100, verbose_name='店舗名')
//     prefecture = models.CharField(max_length=100, choices=PREFECTURE_CHOICES, default='北海道', verbose_name='都道府県')
//     address = models.CharField(blank=True, verbose_name='住所')
//     nearest_station = models.CharField(blank=True, verbose_name='最寄り駅')
//     phone = models.CharField(max_length=20, blank=True, verbose_name='電話番号（登録者）')
//     business_time = models.CharField(blank=True, verbose_name='営業時間')
//     rest_day = models.CharField(blank=True, verbose_name='定休日')
//     url = models.URLField(verbose_name='店舗ホームページ')
//     last_update = models.DateTimeField(auto_now_add=True)

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

export interface CatObjectType {
  advertise?: string;
  id: number;
  cat_name: string;
  shop: shopType;
  images?: CatImageType[];
  admin_images?: CatImageByAdminType[];
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
