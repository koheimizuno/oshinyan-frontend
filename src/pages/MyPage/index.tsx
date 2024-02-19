import { lazy, useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import CatCard from "../../components/basic/blog/CatCard";
import EditButton from "../../components/basic/EditButton";
import CommentImageCard from "../../components/basic/CommentImageCard";
import SocialLinkGroup from "../../components/common/SocialLinkGroup";
import Title from "../../components/common/Typography/Title";
import axios from "axios";
import { CatObjectType, CommentImageType } from "../../constant/type";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import { Close } from "@mui/icons-material";
import { formatDateTime } from "../../utils/functions";
const Box = lazy(() => import("@mui/material/Box"));

interface avatarType {
  id: number;
  avatar: string;
}

const MyPage = () => {
  const navigate = useNavigate();
  const [userCatData, setUserCatData] = useState<CatObjectType[]>([]);
  const [currentUser, setCurrentUser] = useState({
    id: 0,
    username: "",
    email: "",
    avatar_url: "",
  });
  const [isFetchUserName, setIsFetchUserName] = useState(false);
  const [newUsername, setNewUserName] = useState("");
  const [isFetchEmail, setIsFetchEmail] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [avatars, setAvatars] = useState<avatarType[]>([]);
  const [avatarModal, setAvatarModal] = useState(false);
  const [commentImgsByUser, setCommentImgsByUser] = useState<
    CommentImageType[]
  >([]);
  const { catLoading } = useSelector((state: any) => state.cat);
  const { user, authLoading, isAuthenticated } = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    const commentByUserFetch = async () => {
      let list: any[] = [];
      const { data } = await axios.get(`api/commentbyuser`);
      console.log(data);
      data.forEach((item: any) => {
        item.comment_images.forEach((it: any) => {
          list.push(it);
        });
      });
      setCommentImgsByUser(list);
    };
    commentByUserFetch();
  }, [isAuthenticated, navigate, catLoading]);

  useEffect(() => {
    const fetchuserCatData = async () => {
      try {
        const { data } = await axios.get("api/usercat");
        setUserCatData(data);
      } catch (error) {}
    };
    const fetchUser = async () => {
      if (user.user_id) {
        const { data } = await axios.get(`account/user/${user.user_id}/`);
        setCurrentUser(data);
      }
    };
    fetchuserCatData();
    fetchUser();
  }, [isAuthenticated, catLoading, authLoading, user.user_id]);

  const editUserName = async () => {
    if (!isFetchUserName) {
      setNewUserName(currentUser.username);
      setIsFetchUserName(true);
    } else {
      try {
        if (currentUser.username !== newUsername) {
          const { data } = await axios.put(`account/user/${user.user_id}/`, {
            username: newUsername,
          });
          setCurrentUser(data);
        }
      } catch (error: any) {}
      setIsFetchUserName(false);
    }
  };

  const editEmail = async () => {
    if (!isFetchEmail) {
      setNewEmail(currentUser.email);
      setIsFetchEmail(true);
    } else {
      try {
        if (currentUser.email !== newEmail) {
          const { data } = await axios.put(`account/user/${user.user_id}/`, {
            email: newEmail,
          });
          setCurrentUser(data);
        }
      } catch (error: any) {}
      setIsFetchEmail(false);
    }
  };

  const handleAvatar = () => {
    setAvatarModal(true);
    const fetchAvatar = async () => {
      const { data } = await axios.get("account/avatar/");
      setAvatars(data);
    };
    fetchAvatar();
  };

  const selectAvatar = async (id: number) => {
    const { data } = await axios.put(`account/user/${user.user_id}/`, {
      avatar: id,
    });
    setCurrentUser({ ...currentUser, avatar_url: data.avatar_url });
    setAvatarModal(false);
  };

  return (
    <MainLayout>
      <SocialLinkGroup />
      <Container>
        <PageBar page="マイページ" />
        <Title title="マイページ" />
        <div className="p-[24px] pb-[16px] bg-white">
          <div className="xs:flex xs:flex-col md:flex md:flex-row md:flex-wrap md:justify-between md:items-center gap-4 pb-[24px] border-b border-[#CCCCCC]">
            <div className="flex items-center justify-between xs:w-full md:w-[calc(100%-300px)]">
              <div className="flex justify-between items-center gap-10">
                <button className="w-[72px] h-[72px]" onClick={handleAvatar}>
                  {currentUser.avatar_url && (
                    <img
                      className="w-full"
                      src={currentUser.avatar_url}
                      alt="cat"
                    />
                  )}
                </button>
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
              </div>
              <Modal
                open={avatarModal}
                onClose={() => setAvatarModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                slotProps={{
                  backdrop: {
                    sx: {
                      backgroundColor: "rgba(0,0,0,.85)",
                    },
                  },
                }}
              >
                <Box className="w-3/4 sm:2/3 md:w-1/2 bg-white rounded-lg outline-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="p-6 pb-[34px]">
                    <Close
                      className="absolute top-2 right-2 bg-[#474747] rounded-full text-white p-1 cursor-pointer"
                      onClick={() => setAvatarModal(false)}
                    />
                    <h3 className="text-[24px]">
                      使用する猫アイコンを選択するニャン！
                    </h3>
                    <div className="mt-10 flex flex-wrap gap-10">
                      {avatars.length &&
                        avatars.map((item, index) => (
                          <label
                            key={index}
                            className="cursor-pointer"
                            onClick={() => selectAvatar(item.id)}
                          >
                            <img src={item.avatar} alt={item.avatar} />
                          </label>
                        ))}
                    </div>
                  </div>
                </Box>
              </Modal>
              <div>
                <EditButton onClick={editUserName} />
              </div>
            </div>
            <div className="md:h-8 border-l border-[#CCCCCC]"></div>
            <div className="text-[24px] leading-[32px]">
              Oshy-Nyan ID : 0000222
            </div>
          </div>
          <div className="sm:flex mt-[16px]">
            <div className="w-[152px] me-[24px] text-[16px] leading-[21px] whitespace-nowrap">
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
        <div className="mt-[32px] mb-[48px] flex justify-between flex-wrap">
          {userCatData.length !== 0 ? (
            userCatData.map((e, i) => (
              <CatCard
                key={i}
                id={e.id}
                is_public={e.is_public}
                page="mypage"
                cat_name={e.cat_name}
                shop={e.shop}
                images={e.images}
                admin_images={e.admin_images}
                character={e.character}
                favorite_things={e.favorite_things}
                attendance={e.attendance}
                description={e.description}
                recommend={e.recommend}
                created_date={e.created_date}
              />
            ))
          ) : (
            <p className="py-10 block w-full text-center text-xl">
              お探しの看板猫はありません
            </p>
          )}
        </div>
        <div className="mb-4 text-[24px] leading-[32px] border-b border-[#CBB279] pb-[16px]">
          投稿した推しニャン画像
        </div>
        <div className="mt-[40px] mb-[64px] flex flex-wrap justify-between gap-4">
          {commentImgsByUser &&
            commentImgsByUser.map((item, key) => (
              <CommentImageCard
                key={key}
                id={item.id}
                imgs={item.imgs}
                created_date={formatDateTime(item.created_date)}
                comment_images_recommend={item.comment_images_recommend}
              />
            ))}
        </div>
      </Container>
    </MainLayout>
  );
};

export default MyPage;
