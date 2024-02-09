import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BtnPurple from "./components/BtnPurple";
import PrefectureBtn from "../../basic/CustomButton";
import Twitter from "../../basic/icons/Twitter";
import Instagram from "../../basic/icons/Instagram";
import Border from "./components/Border";
import HeartCircle from "../../basic/icons/HeartCircle";
import { CalendarMonthSharp } from "@mui/icons-material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import CatFavorite from "./components/CatFavorite";
import BtnAdd from "./components/BtnAdd";
import BtnSolid from "./components/BtnSolid";
import CatImage from "./components/CatImage";
import CatCard from "../../basic/blog/CatCard";
import axios from "axios";
import { CatObjectType, UserType, commentType } from "../../../constant/type";
import { RecommendAction } from "../../../slices/cat";
import CatDetailCarousel from "./components/Carousel";
import AlbumGallery from "./components/AlbumGallery";
import ImageDetail from "./components/ImageDetail";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { formatDateTime } from "../../../utils/functions";
import { CAT_REACTION_IMG } from "../../../utils/constants";

const CatDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const advertise = searchParams.get("advertise");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recommendLoginElement = useRef<HTMLDivElement>(null);
  const [recommendLoginShow, setRecommendLoginShow] = useState(false);
  const [showImageDetail, setShowImageDetail] = useState(false);
  const [catData, setCatData] = useState<CatObjectType[]>([]);
  const [recommendedUser, setRecommendedUser] = useState<UserType[]>([]);
  const [commentData, setCommentData] = useState<commentType[]>([]);
  const [displayAll, setDisplayAll] = useState(false);
  const [showAlbumGallery, setShowAlbumGallery] = useState(false);
  const [commentImgs, setCommentImgs] = useState<
    {
      imgs: string;
      username: string;
      comment: string;
    }[]
  >([]);

  const [retrieveCat, setRetrieveCat] = useState<CatObjectType>({
    id: 0,
    cat_name: "",
    shop: {
      shop_name: "",
      prefecture: "",
    },
    images: [],
    admin_images: [],
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
    // !isAuthenticated && navigate("/login");
    const commentFetch = async () => {
      let list: {
        imgs: string;
        username: string;
        comment: string;
      }[] = [];
      const { data } = await axios.get(`api/comment?cat_id=${id}`);
      setCommentData(data);
      data.map((item: any, key: number) =>
        item.comment_images.map((it: any, i: number) =>
          list.push({
            imgs: it.imgs,
            username: item.user.username,
            comment: item.comment,
          })
        )
      );
      setCommentImgs(list);
    };
    commentFetch();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("api/randomcat");
        setCatData(data);
      } catch (error) {}
    };
    if (!advertise) {
      const RetrieveCat = async () => {
        const { data } = await axios.get(`api/cats/${id}/`);
        setRetrieveCat(data);
      };
      RetrieveCat();
    } else {
      const RetrieveCat = async () => {
        const { data } = await axios.get(`api/advertise/${id}/`);
        setRetrieveCat(data);
      };
      RetrieveCat();
    }
    fetchData();
  }, [isAuthenticated, catLoading, authLoading]);

  useEffect(() => {
    const ListRecommendUser = async () => {
      if (retrieveCat.id) {
        const { data } = await axios.get(
          `api/recommend?cat_id=${retrieveCat.id}`
        );
        setRecommendedUser(data);
      }
    };
    ListRecommendUser();
  }, [retrieveCat.id]);

  const handleRecommend = async () => {
    if (isAuthenticated) {
      if (!advertise) {
        if (!retrieveCat.recommend.find((e) => e.user == user.user_id)) {
          const submitData = {
            cat_id: id,
            user_id: user.user_id,
          };
          const res = await dispatch(RecommendAction(submitData));
        }
      } else {
        if (!retrieveCat.recommend.find((e) => e.user == user.user_id)) {
          const submitData = {
            advertise_id: id,
            user_id: user.user_id,
          };
          const res = await dispatch(RecommendAction(submitData));
        }
      }
    } else {
      setRecommendLoginShow(true);
    }
  };

  return (
    <div className="w-full relative">
      <CatDetailCarousel data={retrieveCat} />
      <div className="w-full bg-white p-[28px]">
        <div className="flex justify-between">
          <div className="flex items-center font-bold">
            <img src="/assets/imgs/icons/face_empty.png" alt="cat icon" />
            <span className="text-2xl ms-4">{retrieveCat.cat_name}</span>
          </div>
          <div
            className="relative flex gap-[6px] items-center"
            ref={recommendLoginElement}
          >
            <span
              className="cursor-pointer rounded-full"
              onClick={handleRecommend}
            >
              {retrieveCat.recommend &&
              retrieveCat.recommend.find((e) => e.user == user.user_id) ? (
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
              setShowAlbumGallery(true);
            }}
          />
        </div>
        <div className="mt-4 break-all">{retrieveCat.description}</div>
        <div className="mt-2 flex gap-5">
          <Link
            to={`/nyanplace/${id}`}
            className="underline text-base inline-block"
          >
            {retrieveCat.shop.shop_name}
          </Link>
          <PrefectureBtn value={retrieveCat.shop.prefecture} />
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
        <div className="w-full flex items-start gap-8 mt-6">
          <div className="flex gap-2">
            <CalendarMonthSharp fontSize="large" style={{ fill: "#FAD2B5" }} />
            <div className="ms-2 whitespace-nowrap">出勤頻度</div>
            <div className="ms-4">
              <PrefectureBtn value={retrieveCat.attendance} />
            </div>
          </div>
          <div className="flex gap-2">
            <HeartCircle />
            <div className="ms-2 whitespace-nowrap">性格</div>
            <div className="ms-4 flex gap-2 flex-wrap">
              {retrieveCat.character &&
                retrieveCat.character.map((item, key) => (
                  <PrefectureBtn key={key} value={item.character} />
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
                  {item.favorite_things}
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
            {retrieveCat.recommend && retrieveCat.recommend.length}ニャン
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
            <div className="flex justify-between">
              <div>
                <Link
                  to={`/comment/${id}`}
                  className="flex items-center h-full"
                >
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
        {commentData &&
          commentData.map((item, key) => (
            <div key={key}>
              <div>
                <div className="flex items-center">
                  <div className="w-10 h-10">
                    <img
                      className="w-full"
                      src="/assets/imgs/icons/info_cat.png"
                      alt="cat"
                    />
                  </div>
                  <div className="text-base underline ms-4">
                    {item.user.username}
                  </div>
                </div>
                <div className="mt-2 text-xs text-[#767676]">
                  {formatDateTime(item.user.last_login)}
                </div>
                <div className="break-all mt-4 text-base">{item.comment}</div>
              </div>
              <div className="mt-6 flex gap-2">
                {item.comment_images &&
                  item.comment_images.map((e, i) => {
                    return (
                      <CatFavorite
                        imgUrl={e.imgs}
                        recommend={retrieveCat.recommend.length}
                        key={i}
                        onClick={() => setShowImageDetail(true)}
                      />
                    );
                  })}
              </div>
              <div className="mt-6">
                <BtnAdd />
              </div>
              <Tabs className="mt-[10px] border border-[#bbbbbb] rounded-lg p-6">
                <div className="flex items-center gap-16">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/imgs/icons/fancier-pink.png"
                      alt="fancier-pink"
                      width={32}
                    />
                    <span>ご挨拶</span>
                  </div>
                  <TabList className="flex items-center gap-2">
                    <Tab className="text-base cursor-pointer">メッセージ</Tab>
                    <span>|</span>
                    <Tab className="text-base cursor-pointer">猫ちゃん</Tab>
                    <span>|</span>
                    <Tab className="text-base cursor-pointer">気持ち</Tab>
                    <span>|</span>
                    <Tab className="text-base cursor-pointer">季節</Tab>
                    <span>|</span>
                    <Tab className="text-base cursor-pointer">パーティー</Tab>
                    <span>|</span>
                    <Tab className="text-base cursor-pointer">フード</Tab>
                  </TabList>
                </div>
                <div className="border-b pb-4 mb-4"></div>
                <div className="h-24 overflow-y-auto">
                  <TabPanel className="flex flex-wrap gap-4">
                    {CAT_REACTION_IMG.map((cat_item, key) => (
                      <img
                        key={key}
                        src={process.env.PUBLIC_URL + cat_item[0]}
                        alt={cat_item[1]}
                        width={40}
                      />
                    ))}
                  </TabPanel>
                  <TabPanel className="">Panel 2</TabPanel>
                  <TabPanel className="">Panel 3</TabPanel>
                  <TabPanel className="">Panel 4</TabPanel>
                  <TabPanel className="">Panel 5</TabPanel>
                  <TabPanel className="">Panel 6</TabPanel>
                </div>
              </Tabs>
            </div>
          ))}
        {/* 2 */}
        <Border className="mt-5 border-dashed" color="#CCCCCC" />
        <div className="mt-8 flex justify-center">
          <BtnSolid onClick={() => {}} />
        </div>
        {/* album */}
        <div className="text-base mt-14 font-medium">ニャンアルバム</div>
        <div className="w-full border-b border-black mt-4"></div>
        <div className="grid grid-cols-3 gap-6">
          {commentImgs && displayAll
            ? commentImgs.map((item, key) => (
                <CatImage
                  imgUrl={item.imgs}
                  username={item.username}
                  recommend={0}
                  key={key}
                />
              ))
            : commentImgs
                .slice(0, 9)
                .map((item, key) => (
                  <CatImage
                    key={key}
                    imgUrl={item.imgs}
                    username={item.username}
                    recommend={0}
                  />
                ))}
        </div>
        <div className="text-right mt-[57px] mb-[32px] px-2">
          <button
            type="button"
            className="underline"
            onClick={() => setDisplayAll(true)}
          >
            すべての写真を見るニャン
          </button>
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
              shop={e.shop}
              images={e.images}
              admin_images={e.admin_images}
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
      <AlbumGallery
        cat_name={retrieveCat.cat_name}
        commentImgs={commentImgs}
        displayAll={displayAll}
        setDisplayAll={setDisplayAll}
        showAlbumGallery={showAlbumGallery}
        setShowAlbumGallery={setShowAlbumGallery}
      />
      {/* <ImageDetail show={showImageDetail} setShow={setShowImageDetail} /> */}
      <ImageDetail
        commentImgs={commentImgs}
        showAlbumGallery={showImageDetail}
        setShowAlbumGallery={setShowImageDetail}
      />
    </div>
  );
};

export default CatDetail;
