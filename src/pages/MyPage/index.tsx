import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import CatCard from "../../components/basic/blog/CatCard";
import EditButton from "../../components/basic/EditButton";
import FavoriteCard from "../../components/basic/FavoriteCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";
import axios from "axios";
import { CatObjectType } from "../../constant/type";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

const MyPage = () => {
  const navigate = useNavigate();
  const [catData, setCatData] = useState<CatObjectType[]>([]);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    email: "",
    avatar: "",
    avatar_url: "",
  });
  const [isFetchUserName, setIsFetchUserName] = useState(false);
  const [newUsername, setNewUserName] = useState("");
  const [isFetchEmail, setIsFetchEmail] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const { user } = useSelector((state: any) => state.user);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const { data } = await axios.get("randomcat");
        setCatData(data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchUser = async () => {
      if (user.user_id) {
        const { data } = await axios.get(`user/${user.user_id}/`);
        setCurrentUser(data);
      }
    };
    fetchCatData();
    fetchUser();
  }, [user]);

  const editUserName = async () => {
    if (!isFetchUserName) {
      if (user.user_id) {
        const { data } = await axios.get(`user/${user.user_id}/`);
        setNewUserName(data.username);
      }
      setIsFetchUserName(true);
    } else {
      try {
        const { data } = await axios.put(`user/${user.user_id}/`, {
          username: newUsername,
        });
        setCurrentUser(data);
      } catch (error: any) {
        console.log(error.message);
      }
      setIsFetchUserName(false);
    }
  };

  const editEmail = async () => {
    if (!isFetchEmail) {
      if (user.user_id) {
        const { data } = await axios.get(`user/${user.user_id}/`);
        setNewEmail(data.email);
      }
      setIsFetchEmail(true);
    } else {
      try {
        const { data } = await axios.put(`user/${user.user_id}/`, {
          email: newEmail,
        });
        setCurrentUser(data);
      } catch (error: any) {
        console.log(error.message);
      }
      setIsFetchEmail(false);
    }
  };

  return (
    <>
      <MainLayout>
        <SocialLinkGroup />
        <Container>
          <PageBar page="マイページ" />
          <Title title="マイページ" />
          <div className="p-[24px] pb-[16px] bg-white">
            <div className="flex pb-[24px] border-b border-[#CCCCCC]">
              <div className="w-[72px] h-[72px] me-[40px]">
                <img
                  className="w-full"
                  src={currentUser.avatar_url}
                  alt="cat"
                />
              </div>
              <div className="grow flex justify-between items-center me-[32px]">
                <div>
                  {!isFetchUserName ? (
                    <p className="text-[24px] font-bold leading-[32px]">
                      {currentUser.username}
                    </p>
                  ) : (
                    <input
                      type="text"
                      value={newUsername}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewUserName(e.target.value)
                      }
                      className="bg-[#F7F7F7] border border-[#CCCCCC] rounded-[5px] me-auto h-[40px] w-[304px] p-2 focus:outline-none"
                    />
                  )}
                </div>
                <div>
                  <EditButton onClick={editUserName} />
                </div>
              </div>
              <div className="text-[24px] leading-[32px] ps-[32px] border-s border-[#CCCCCC]">
                Oshy-Nyan ID : 0000222
              </div>
            </div>
            <div className="flex mt-[16px]">
              <div className="w-[152px] me-[24px] text-[16px] leading-[21px]">
                登録メールアドレス
              </div>
              <div className="w-full flex justify-between items-center">
                {!isFetchEmail ? (
                  <p className="me-auto text-[16px] leading-[21px] font-bold">
                    {currentUser.email}
                  </p>
                ) : (
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setNewEmail(e.target.value)
                    }
                    className="bg-[#F7F7F7] border border-[#CCCCCC] rounded-[5px] me-auto h-[40px] w-[304px] p-2 focus:outline-none"
                  />
                )}
                <div>
                  <EditButton onClick={editEmail} />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[40px] text-[20px] leading-[27px]">
            マイページには自分の推しニャン（サイト内で推しボタンを押した猫）が一覧で出てくるニャー
          </div>
          <div className="mt-[32px] mb-[48px] flex flex-wrap justify-between">
            <div className="flex justify-between flex-wrap">
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
                    recommend_user={e.recommend_user}
                    last_update={e.last_update}
                  />
                ))
              ) : (
                <p className="py-10 block w-full text-center text-xl">
                  お探しの看板猫はありません
                </p>
              )}
            </div>
          </div>
          <div className="mb-4 text-[24px] leading-[32px] border-b border-[#CBB279] pb-[16px]">
            投稿した推しニャン画像
          </div>
          <div className="mt-[40px] mb-[64px] flex flex-wrap justify-between gap-4">
            {Cats &&
              Cats.map((e, key) => (
                <FavoriteCard
                  key={key}
                  imgUrl={e.imgUrl}
                  date="2023.01.01"
                  vote="000"
                />
              ))}
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default MyPage;
