import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import PageBar from "../../components/common/PageBar";
import Title from "../../components/common/Typography/Title";
import GuideCarousel from "../../components/common/GuideCarousel";
import HelmetPage from "../../layouts/MainLayout/HelmetPage";

const Guide = () => {
  return (
    <>
      <HelmetPage
        title="推しニャン｜推しニャンの使い方説明ページ"
        description="推しニャンとは？｜看板猫サイト「推しニャン」の使い方、楽しみ方、会員登録をしたら出来ることなど説明をしているページです。"
        keywords="看板猫, 推しニャン, 猫のいる店"
      />
      <MainLayout>
        {/* <SocialLinkGroup /> */}
        <Container>
          <PageBar page="推しニャンとは ?" />
          <Title title="推しニャンとは？" />
        </Container>
        <div className="pt-[30px] pb-[40px]">
          <GuideCarousel />
        </div>
        <Container>
          <div>
            <p className="text-[20px] leading-[27px]">
              「にゃんこ好きのみなさん、お待たせしました！
              <br />
              人生のワクワクが、ここでまた見つかります 『
              推し猫探し』をしてみませんか？
            </p>
            <p className="text-[28px] mt-[22px] leading-[37px] font-bold">
              推しニャンは『 お気に入りの看板猫が探せる！推せるサイト』 です
            </p>
            <p className="text-[16px] leading-[21px] mt-[24px]">
              当サイトでは、全国各地の素敵な店舗や宿に住む、個性豊かな「看板猫」を見つけることができます。美しい景色や素敵なお店を背景に、品のあるポーズを決めるトラ猫、優雅に風を受ける白猫、そしてちょっぴりシャイな三毛猫、そして颯爽とした黒猫
              さまざまな個性を持つ看板猫たちが全国で皆さんの訪れを待っています。
            </p>
          </div>
          <div className="mt-20 mb-10 text-center border-b-2 border-[#CBB279]">
            <p className="mb-3 text-xl text-[#CBB279] font-bold">
              How to have a good time
            </p>
            <h4 className="mb-8 text-[28px] font-bold">
              『推しニャン』 の楽しみ方
            </h4>
          </div>
          <div className="mt-[48px] px-10">
            {/* 1 */}
            <div className="xs:flex xs:flex-col md:flex md:flex-row md:items-start">
              <div className="max-w-[424px] me-auto m-auto">
                <button
                  className={`text-[28px] h-[56px] border-solid rounded-[15px] px-[14px] py-[8px] translate-x-0.51 bg-[#FBA1B7] text-white`}
                >
                  その１ニャン!
                </button>
                <div className="xs:text-[32px] md:text-[40px] text-[#515151] mt-[10px] leading-[68px]">
                  全国のかわいい看板猫たちをサイト内で探してみるニャン！
                </div>
              </div>
              <div className="text-center">
                <img
                  src="assets/imgs/Guide-1.webp"
                  alt="Guide-1"
                  className="m-auto"
                />
              </div>
            </div>
            {/* 2 */}
            <div className="xs:flex xs:flex-col md:flex md:flex-row md:items-end mt-[30px]">
              <div className="text-center xs:m-auto md:me-auto xs:order-2 md:order-none">
                <img
                  src="assets/imgs/Guide-2.webp"
                  alt="Guide-2"
                  className="m-auto"
                />
              </div>
              <div className="max-w-[424px] pb-[27px] m-auto xs:order-1 md:order-none">
                <button
                  className={`text-[28px] h-[56px] border-solid rounded-[15px] px-[14px] py-[8px] translate-x-0.51 bg-[#FBA1B7] text-white`}
                >
                  その2ニャン!
                </button>
                <div className="xs:text-[32px] md:text-[40px] text-[#515151] mt-[22px] leading-[68px]">
                  サイトの中の看板猫で、自分の「推し」を見つけるニャン！
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="xs:flex xs:flex-col md:flex md:flex-row md:items-start mt-[78px]">
              <div className="max-w-[424px] me-auto m-auto">
                <button
                  className={`text-[28px] h-[56px] border-solid rounded-[15px] px-[14px] py-[8px] translate-x-0.51 bg-[#FBA1B7] text-white`}
                >
                  その3ニャン!
                </button>
                <div className="xs:text-[32px] md:text-[40px] text-[#515151] mt-[22px] leading-[68px]">
                  「推し」の看板猫さんに会いに行くニャン！
                </div>
              </div>
              <div className="text-center">
                {/* <div className="w-[470px] h-[295px] rounded-[50%] bg-[#EAEAEA]"></div> */}
                <img
                  src="assets/imgs/Guide-3.webp"
                  alt="Guide-3"
                  className="m-auto"
                />
              </div>
            </div>
            {/* 4 */}
            <div className="xs:flex xs:flex-col md:flex md:flex-row md:items-start mt-[86px]">
              <div className="text-center xs:m-auto md:me-auto xs:order-2 md:order-none">
                <img
                  src="assets/imgs/Guide-4.webp"
                  alt="Guide-4"
                  className=" m-auto"
                />
              </div>
              <div className="max-w-[424px] m-auto xs:order-1 md:order-none">
                <button
                  className={`text-[28px] h-[56px] border-solid rounded-[15px] px-[14px] py-[8px] translate-x-0.51 bg-[#FBA1B7] text-white`}
                >
                  その4ニャン!
                </button>
                <div className="xs:text-[32px] md:text-[40px] text-[#515151] mt-[10px] leading-[68px]">
                  推しニャンSNS は、全国の猫さんがたくさん載っているニャー
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[56px]">
            <div className="border-t-[1px] border-t-[#CBB279]">
              <svg
                className="m-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="40"
                viewBox="0 0 96 40"
              >
                <path
                  id="Polygon_5"
                  data-name="Polygon 5"
                  d="M48,0,96,40H0Z"
                  transform="translate(96 40) rotate(180)"
                  fill="#cbb279"
                />
              </svg>
            </div>
            <div className="mt-[16px] text-center text-[28px] text-bold">
              会員登録をすると、もっと楽しめるニャ
            </div>
          </div>
          <div className="mt-[32px] flex justify-between gap-2">
            <div className="w-[300px]">
              <div>
                <img
                  src="assets/imgs/icons/Guide-icon-1.webp"
                  alt="Guide-icon-1"
                />
              </div>
              <div className="mt-[22px] text-center xs:text-[16px] md:text-[20px] px-[14px]">
                マイページで、自分の推し猫にいつも会える！
              </div>
            </div>
            <div className="w-[300px]">
              <div>
                <img
                  src="assets/imgs/icons/Guide-icon-2.webp"
                  alt="Guide-icon-2"
                />
              </div>
              <div className="mt-[22px] text-center xs:text-[16px] md:text-[20px] px-[14px]">
                推し猫の写真やコメントに投稿できる！
              </div>
            </div>
            <div className="w-[300px]">
              <div>
                <img
                  src="assets/imgs/icons/Guide-icon-3.webp"
                  alt="Guide-icon-3"
                />
              </div>
              <div className="mt-[22px] text-center xs:text-[16px] md:text-[20px] px-[14px]">
                その他、これから機能が追加されます。お楽しみに。
              </div>
            </div>
          </div>

          <div className="mt-[40px] hover:opacity-70">
            <img src="/assets/imgs/member.webp" alt="" />
          </div>
          <div className="mt-20 mb-10 text-center border-b-2 border-[#CBB279]">
            <p className="mb-3 text-xl text-[#CBB279] font-bold">
              The Rules of Being a Fan
            </p>
            <h4 className="mb-8 text-[28px] font-bold">
              『ニャン参り』の ルール
            </h4>
          </div>
          <div className="text-[16px] leading-[28px]">
            ニャン参りとは、看板猫がいるお店に自ら訪問すること。「ニャン参りの心得」定め、看板猫の代弁をさせていただいております。自分勝手な行動で猫界から追放されないように気を付けましょう。
          </div>

          <div className="mt-[32px] mb-[72px]">
            <div className="mt-[16px] flex items-center gap-4">
              <div className="w-6 h-6">
                <img
                  src="assets/imgs/icons/1-icon.webp"
                  alt="1-icon.webp"
                  className="w-full h-full"
                />
              </div>
              <div className="xs:text-[20px] md:text-[24px] md:font-bold leading-[32px] w-[calc(100%-24px)]">
                看板猫はいない時もある。その日にもし出会えたら幸運を噛み締めるニャー
              </div>
            </div>
            <div className="mt-[16px] flex items-center gap-4">
              <div className="w-6 h-6">
                <img
                  src="assets/imgs/icons/2-icon.webp"
                  alt="2-icon.webp"
                  className="w-full h-full"
                />
              </div>
              <div className="xs:text-[20px] md:text-[24px] md:font-bold leading-[32px] w-[calc(100%-24px)]">
                看板猫へのすべての行為をする前に、お店の方に一言聞く礼節を大切にするニャー
              </div>
            </div>
            <div className="mt-[16px] flex items-center gap-4">
              <div className="w-6 h-6">
                <img
                  src="assets/imgs/icons/3-icon.webp"
                  alt="3-icon.webp"
                  className="w-full h-full"
                />
              </div>
              <div className="xs:text-[20px] md:text-[24px] md:font-bold leading-[32px] w-[calc(100%-24px)]">
                看板猫が寝ているときこそ、温かく見守る広い心を持つニャー
              </div>
            </div>
            <div className="mt-[16px] flex items-center gap-4">
              <div className="w-6 h-6">
                <img
                  src="assets/imgs/icons/4-icon.webp"
                  alt="4-icon.webp"
                  className="w-full h-full"
                />
              </div>
              <div className="xs:text-[20px] md:text-[24px] md:font-bold leading-[32px] w-[calc(100%-24px)]">
                看板猫の表情で今の気分や気持ちを察する心眼を開くニャー
              </div>
            </div>
            <div className="mt-[16px] flex items-center gap-4">
              <div className="w-6 h-6">
                <img
                  src="assets/imgs/icons/5-icon.webp"
                  alt="5-icon.webp"
                  className="w-full h-full"
                />
              </div>
              <div className="xs:text-[20px] md:text-[24px] md:font-bold leading-[32px] w-[calc(100%-24px)]">
                衝動的に看板猫に触りたい気持ちをグッとこらえる忍耐力をつけるニャー
              </div>
            </div>
            <div className="mt-[16px] flex items-center gap-4">
              <div className="w-6 h-6">
                <img
                  src="assets/imgs/icons/6-icon.webp"
                  alt="6-icon.webp"
                  className="w-full h-full"
                />
              </div>
              <div className="xs:text-[20px] md:text-[24px] md:font-bold leading-[32px] w-[calc(100%-24px)]">
                食事中やトイレ中の看板猫を邪魔しないで欲しいニャー
              </div>
            </div>
            <div className="mt-[16px] flex items-center gap-4">
              <div className="w-6 h-6">
                <img
                  src="assets/imgs/icons/7-icon.webp"
                  alt="7-icon.webp"
                  className="w-full h-full"
                />
              </div>
              <div className="xs:text-[20px] md:text-[24px] md:font-bold leading-[32px] w-[calc(100%-24px)]">
                看板猫のペースを尊重し、目配り・気配り・心配りニャー
              </div>
            </div>
            <div className="mt-[16px] flex items-center gap-4">
              <div className="w-6 h-6">
                <img
                  src="assets/imgs/icons/8-icon.webp"
                  alt="8-icon.webp"
                  className="w-full h-full"
                />
              </div>
              <div className="xs:text-[20px] md:text-[24px] md:font-bold leading-[32px] w-[calc(100%-24px)]">
                立ったまま上から見下ろすのではなく、看板猫と同じ目線で楽しむニャー
              </div>
            </div>
            <div className="mt-[16px] flex items-center gap-4">
              <div className="w-6 h-6">
                <img
                  src="assets/imgs/icons/9-icon.webp"
                  alt="9-icon.webp"
                  className="w-full h-full"
                />
              </div>
              <div className="xs:text-[20px] md:text-[24px] md:font-bold leading-[32px] w-[calc(100%-24px)]">
                ニャン参りできない時は、モフモフ・ツヤツヤを妄想する力をつけるニャー
              </div>
            </div>
            <div className="mt-[16px] flex items-center gap-4">
              <div className="w-6 h-6">
                <img
                  src="assets/imgs/icons/10-icon.webp"
                  alt="10-icon.webp"
                  className="w-full h-full"
                />
              </div>
              <div className="xs:text-[20px] md:text-[24px] md:font-bold leading-[32px] w-[calc(100%-24px)]">
                他の人のニャン参り体験を尊重し、共有する喜びを知るニャー
              </div>
            </div>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default Guide;
