import CatImage from "./CatImage";
import { Modal, Box } from "@mui/material";

type PropsType = {
  cat_name: string;
  displayAll: boolean;
  commentImgs: {
    imgs: string;
    username: string;
  }[];
  setDisplayAll: any;
  showAlbumGallery: boolean;
  setShowAlbumGallery: any;
};

const AlbumGallery = ({
  cat_name,
  commentImgs,
  displayAll,
  setDisplayAll,
  showAlbumGallery,
  setShowAlbumGallery,
}: PropsType) => {
  return (
    <Modal
      open={showAlbumGallery}
      onClose={() => setShowAlbumGallery(false)}
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
      <Box
        className="w-[960px] h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden
      "
      >
        <span
          className="absolute top-4 right-4 text-white text-[60px] cursor-pointer"
          onClick={() => setShowAlbumGallery(false)}
        >
          &times;
        </span>
        <div className="text-[28px] pt-10 font-medium text-white">
          {cat_name}
        </div>
        <div className="text-[28px] mt-2 font-medium text-white border-b pb-5">
          ニャンアルバム
        </div>
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
      </Box>
    </Modal>
  );
};

export default AlbumGallery;
