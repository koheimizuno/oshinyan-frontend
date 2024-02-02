import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import BtnPurple from "./components/BtnPurple";
import PrefectureBtn from "../../basic/CustomButton";
import Twitter from "../../basic/icons/Twitter";
import Instagram from "../../basic/icons/Instagram";
import Border from "./components/Border";
import HeartCircle from "../../basic/icons/HeartCircle";
import { CalendarMonthSharp } from "@mui/icons-material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import CatDetailCarousel from "./components/CatDetailCarousel";
import CatFavorite from "./components/CatFavorite";
import BtnAdd from "./components/BtnAdd";
import BtnSolid from "./components/BtnSolid";
import CatImage from "./components/CatImage";
import CatCard from "../../basic/blog/CatCard";
import ImageGallery from "./components/ImageGallery";
import ImageDetail from "./components/ImageDetail";
import axios from "axios";
import { CatObjectType, UserType } from "../../../constant/type";
import { RecommendAction } from "../../../slices/cat";

const Cats = [
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    isChu: false,
  },
];

const CatImgs = [
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
  {
    imgUrl: "/assets/imgs/cats/favorite_cat.png",
    personName: "猫好きさん",
  },
];

const actions = [
  "avatar_1.svg",
  "avatar_2.svg",
  "avatar_3.svg",
  "avatar_4.svg",
  "avatar_5.svg",
  "avatar_6.svg",
  "avatar_7.svg",
  "avatar_8.svg",
];

const CatDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recommendLoginElement = useRef<HTMLDivElement>(null);
  const [recommendLoginShow, setRecommendLoginShow] = useState(false);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [showImageDetail, setShowImageDetail] = useState(false);
  const [catData, setCatData] = useState<CatObjectType[]>([]);
  const [recommendTooltip, setRecommendTooltip] = useState(false);
  const [recommendedUser, setRecommendedUser] = useState<UserType[]>([]);
  const [retrieveCat, setRetrieveCat] = useState<CatObjectType>({
    id: 0,
    cat_name: "",
    shop_name: "",
    prefecture: "",
    cat_images: [],
    character: [],
    favorite_things: [],
    attendance: "",
    description: "",
    recommend: [],
    last_update: "",
  });
  const { user, authLoading, isAuthenticated } = useSelector(
    (state: any) => state.user
  );
  const { catLoading } = useSelector((state: any) => state.cat);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("randomcat");
        setCatData(data);
      } catch (error) {}
    };
    const RetrieveCat = async () => {
      const { data } = await axios.get(`cat/${id}`);
      setRetrieveCat(data);
    };
    fetchData();
    RetrieveCat();
  }, [isAuthenticated, catLoading, authLoading]);

  useEffect(() => {
    const ListRecommendUser = async () => {
      if (retrieveCat.recommend[0]) {
        const { data } = await axios.get(
          `recommend?cat_id=${retrieveCat.recommend[0].cat}`
        );
        setRecommendedUser(data);
      }
    };
    ListRecommendUser();
  }, [retrieveCat.recommend[0]]);

  const handleRecommend = async () => {
    if (isAuthenticated) {
      if (!retrieveCat.recommend.find((e) => e.user == user.user_id)) {
        const submitData = {
          cat_id: id,
          user_id: user.user_id,
        };
        const res = await dispatch(RecommendAction(submitData));
      }
    } else {
      setRecommendLoginShow(true);
    }
  };

  console.log("💚💚💚", recommendedUser);

  return (
    <div className="w-full relative">
      <CatDetailCarousel />
      <div className="w-full bg-white p-[28px] pt-[0px]">
        <div className="flex justify-between">
          <div className="flex items-center font-bold">
            <img src="/assets/imgs/icons/face_empty.png" alt="cat icon" />
            <span className="text-2xl ms-4">{retrieveCat.cat_name}</span>
          </div>
          <div
            className="flex gap-[6px] items-center"
            ref={recommendLoginElement}
          >
            <img
              src="/assets/imgs/icons/comment_chu.png"
              alt="comment_chu.png"
              className={`${recommendTooltip ? "block" : "hidden"}`}
            />
            <span
              className="cursor-pointer rounded-full"
              onClick={handleRecommend}
              onMouseOver={() => setRecommendTooltip(true)}
              onMouseLeave={() => setRecommendTooltip(false)}
            >
              {retrieveCat.recommend.find((e) => e.user == user.user_id) ? (
                <img
                  src="/assets/imgs/icons/recommend-on.png"
                  alt="recommend-on"
                />
              ) : (
                <img
                  src="/assets/imgs/icons/recommend-off-black.png"
                  alt="recommend-off-black"
                />
              )}
            </span>
            {recommendLoginShow && (
              <span
                className="absolute -left-5 -bottom-[75px] w-[250px] bg-white px-4 py-2 shadow-md rounded-xl cursor-pointer"
                onClick={() => navigate("/login")}
              >
                会員ログイン後にボタンを押すことが可能です
                <span className="w-2 h-4 absolute left-10 -top-4 z-20 border-8 border-transparent border-b-white"></span>
              </span>
            )}
          </div>
        </div>
        <div className="mt-2">
          <BtnPurple
            text="ニャンアルバム"
            isShowIcon={true}
            onClick={() => {
              setShowImageGallery(true);
            }}
          />
        </div>
        <div className="mt-4 break-all">{retrieveCat.description}</div>
        <div className="mt-2">
          <Link
            to="/nyanplace/1"
            className="underline text-base w-[180px] inline-block"
          >
            {retrieveCat.shop_name}
          </Link>
          <PrefectureBtn value={retrieveCat.prefecture} />
        </div>
        <div className="flex gap-[14px] mt-6">
          <div>
            <Twitter />
          </div>
          <div>
            <Instagram />
          </div>
        </div>
        <Border className="mt-6" color="#CCCCCC" />
        <div className="w-full flex gap-8 mt-6">
          <div className="flex gap-2">
            <CalendarMonthSharp fontSize="large" style={{ fill: "#FAD2B5" }} />
            <div className="ms-2">出勤頻度</div>
            <div className="ms-4">
              <PrefectureBtn value={retrieveCat.attendance} />
            </div>
          </div>
          <div className="flex gap-2">
            <HeartCircle />
            <div className="ms-2">性格</div>
            <div className="ms-4 flex gap-2">
              {retrieveCat.character &&
                retrieveCat.character.map((item, key) => (
                  <PrefectureBtn key={key} value={item} />
                ))}
            </div>
          </div>
        </div>
        <div className="w-full flex mt-6">
          <StarRateRoundedIcon
            className="me-2"
            style={{ fill: "#FAD2B5", fontSize: "30px" }}
          />
          <div className="w-[150px]">好きなモノ・コト</div>
          <div className="">
            {retrieveCat.favorite_things &&
              retrieveCat.favorite_things.map((item, key, arr) => (
                <span key={key}>
                  {item}
                  {key !== arr.length - 1 && "、"}
                </span>
              ))}
          </div>
        </div>
        <div className="w-full flex mt-6 items-center h-10">
          <div className="flex items-center">
            <img
              className="w-6"
              src="/assets/imgs/icons/recommend.svg"
              alt=""
            />
          </div>
          <div className="text-2xl font-medium ms-2">
            {retrieveCat.recommend.length}ニャン
          </div>
        </div>
        <div className="w-full border-b border-black mt-4"></div>
        <div className="flex flex-wrap mt-4">
          <div className="flex flex-wrap gap-x-20 gap-y-4">
            {recommendedUser &&
              recommendedUser
                .sort(() => Math.random() - 0.5)
                .slice(0, 12)
                .map((item, key) => (
                  <div className="flex items-center" key={key}>
                    <img
                      className="w-7 h-7"
                      src={item.avatar_url}
                      alt={item.avatar_url}
                    />
                    <div className="ms-3">{item.username}</div>
                    <img
                      className="ms-5"
                      src="/assets/imgs/icons/comment_abbr.png"
                      alt=""
                    />
                  </div>
                ))}
          </div>
        </div>
        <div className="mt-9">推しニャンコメント</div>
        <div className={`w-full border-b border-black mt-5`}></div>
        <div className="pt-8 pb-[63px] ">
          <div className="bg-[#FBA1B7] grid grid-cols-2 h-[92px] overflow-visible rounded-xl">
            <div className="flex justify-between relative">
              <div>
                <div className="relative h-full">
                  <div className="h-full w-[150px] absolute top-0 left-[-11px] ">
                    <img
                      src="/assets/imgs/Group 864.png"
                      alt="Group 864"
                      className="h-full w-auto m-auto"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="absolute top-[-20px] right-[20px]">
                  <p className="flex flex-col text-[20px] font-bold text-[#767676] pt-4 pr-6 pb-4 pl-10 comment-link-tooptip">
                    <span>推し写真のアップ＆</span>
                    <span>推しコメントを書いてね！</span>
                  </p>
                  <img
                    src="/assets/imgs/Group 867.png"
                    alt="Group 867"
                    className="absolute top-0 left-0 -z-10"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div>
                <Link to="/comment" className="flex items-center h-full">
                  <span className="text-[28px] tracking-[-3px] text-white font-bold">
                    コメントするニャン！
                  </span>
                  <span>
                    <img
                      src="/assets/imgs/icons/arr-right-white.png"
                      alt="arr-right-white"
                    />
                  </span>
                </Link>
              </div>
              <div className="">
                <div className="bg-red-400 relative w-[150px]">
                  <div className="absolute top-0 right-[-11px]">
                    <img src="/assets/imgs/Group 863.png" alt="Group 864" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1 */}
        <div>
          <div className="flex items-center">
            <div className="w-10 h-10">
              <img
                className="w-full"
                src="/assets/imgs/icons/info_cat.png"
                alt="cat"
              />
            </div>
            <div className="text-base underline ms-4">猫好きさん</div>
          </div>
          <div className="mt-2 text-xs text-[#767676]">2023.00.00</div>
          <div className="break-all mt-4 text-base">
            □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□…
          </div>
        </div>
        <div className="mt-6 flex gap-2">
          {Cats &&
            Cats.map((e, i) => {
              return (
                <CatFavorite
                  imgUrl={e.imgUrl}
                  vote="000"
                  key={i}
                  onClick={() => setShowImageDetail(true)}
                />
              );
            })}
        </div>
        <div className="mt-6">
          <BtnAdd />
        </div>
        <div className="flex gap-2 mt-4">
          {actions &&
            actions.map((e, i) => (
              <img
                className="w-7 h-7"
                src={`/assets/imgs/icons/${e}`}
                alt=""
                key={i}
              />
            ))}
        </div>
        {/* 2 */}
        <Border className="mt-5 border-dashed" color="#CCCCCC" />
        <div className="mt-6">
          <div className="flex items-center">
            <div className="w-10 h-10">
              <img
                className="w-full"
                src="/assets/imgs/icons/cat_avatar_2.png"
                alt="cat"
              />
            </div>
            <div className="text-base underline ms-4">はなこさん</div>
          </div>
          <div className="mt-2 text-xs text-[#767676]">2023.00.00</div>
          <div className="break-all mt-4 text-base">
            □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□…
          </div>
        </div>
        <div className="mt-6">
          <BtnAdd />
        </div>
        <div className="flex gap-2 mt-4">
          {actions &&
            actions.map((e, i) => (
              <img
                className="w-7 h-7"
                src={`/assets/imgs/icons/${e}`}
                alt=""
                key={i}
              />
            ))}
        </div>
        {/* add button */}
        <Border className="mt-5 border-dashed" color="#CCCCCC" />
        <div className="mt-8 flex justify-center">
          <BtnSolid onClick={() => {}} />
        </div>

        {/* album */}
        <div className="text-base mt-14 font-medium">ニャンアルバム</div>
        <div className="w-full border-b border-black mt-4"></div>
        <div className="flex justify-between mt-6 flex-wrap gap-y-3">
          {CatImgs &&
            CatImgs.map((e, i) => {
              return (
                <CatImage
                  imgUrl={e.imgUrl}
                  personName={e.personName}
                  vote="000"
                  key={i}
                />
              );
            })}
        </div>
      </div>

      {/* signboard cat in the same place */}
      <div className="text-base mt-8 font-medium">
        同じ地域の看板猫を探すニャン！
      </div>
      <div className="w-full border-b border-[#CBB279] mt-4"></div>
      <div className="mt-6 flex flex-wrap justify-between">
        {catData.length !== 0 ? (
          catData.map((e, i) => (
            <CatCard
              key={i}
              id={e.id}
              cat_name={e.cat_name}
              shop_name={e.shop_name}
              prefecture={e.prefecture}
              cat_images={e.cat_images}
              character={e.character}
              favorite_things={e.favorite_things}
              attendance={e.attendance}
              description={e.description}
              recommend={e.recommend}
              last_update={e.last_update}
            />
          ))
        ) : (
          <p className="py-10 block w-full text-center text-xl">
            お探しの看板猫はありません
          </p>
        )}
      </div>
      <ImageGallery show={showImageGallery} setShow={setShowImageGallery} />
      <ImageDetail show={showImageDetail} setShow={setShowImageDetail} />
    </div>
  );
};

export default CatDetail;
