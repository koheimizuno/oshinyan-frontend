import { useState } from "react";
import Carousel from "../../components/common/Carousel";
import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/basic/Container";
import NormalButton from "../../components/basic/NormalButton";

const ConceptIntro = () => {
  return (
    <>
      <MainLayout>
        <Carousel />
        <Container>
          <div className="mt-[40px]">
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
          <div className="text-center mt-[72px]">
            <img src="/assets/imgs/how_to_have_good_time.png" alt="" />
          </div>
          <div className="mt-[48px]">
            {/* 1 */}
            <div className="flex">
              <div className="w-[424px] me-auto">
                <button
                  className={`text-[28px] h-[56px] border-solid rounded-[15px] px-[14px] py-[8px] text-[#C38154] translate-x-0.51 bg-[#FBA1B7] text-white`}
                >
                  その１ニャン!
                </button>
                <div className="text-[40px] text-[#515151] mt-[22px] leading-[53px]">
                  全国のかわいい看板猫たちをサイト内で探してみるニャン！
                </div>
              </div>
              <div className="text-center">
                <div className="w-[470px] h-[295px] rounded-[50%] bg-[#EAEAEA]"></div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex mt-[72px]">
              <div className="text-center me-auto">
                <div className="w-[470px] h-[295px] rounded-[50%] bg-[#EAEAEA]"></div>
              </div>
              <div className="w-[424px]">
                <button
                  className={`text-[28px] h-[56px] border-solid rounded-[15px] px-[14px] py-[8px] text-[#C38154] translate-x-0.51 bg-[#FBA1B7] text-white`}
                >
                  その2ニャン!
                </button>
                <div className="text-[40px] text-[#515151] mt-[22px] leading-[53px]">
                  サイトの中の看板猫で、自分の「推し」を見つけるニャン！
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="flex mt-[72px]">
              <div className="w-[424px] me-auto">
                <button
                  className={`text-[28px] h-[56px] border-solid rounded-[15px] px-[14px] py-[8px] text-[#C38154] translate-x-0.51 bg-[#FBA1B7] text-white`}
                >
                  その3ニャン!
                </button>
                <div className="text-[40px] text-[#515151] mt-[22px] leading-[53px]">
                  「推し」の看板猫さんに会いに行くニャン！
                </div>
              </div>
              <div className="text-center">
                <div className="w-[470px] h-[295px] rounded-[50%] bg-[#EAEAEA]"></div>
              </div>
            </div>
            {/* 4 */}
            <div className="flex mt-[72px]">
              <div className="text-center me-auto">
                <div className="w-[470px] h-[295px] rounded-[50%] bg-[#EAEAEA]"></div>
              </div>
              <div className="w-[424px]">
                <button
                  className={`text-[28px] h-[56px] border-solid rounded-[15px] px-[14px] py-[8px] text-[#C38154] translate-x-0.51 bg-[#FBA1B7] text-white`}
                >
                  その4ニャン!
                </button>
                <div className="text-[40px] text-[#515151] mt-[22px] leading-[53px]">
                  推しニャンSNS は、全国の猫さんがたくさん載っているニャー
                  ＃推しニャンを楽しんで
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
          <div className="mt-[32px] flex justify-between">
            <div className="w-[300px]">
              <div className="w-[300px] h-[300px] rounded-[50%] bg-[#EAEAEA]"></div>
              <div className="mt-[22px] text-center text-[20px] px-[14px]">
                マイページで、自分の推し猫にいつも会える！
              </div>
            </div>
            <div className="w-[300px]">
              <div className="w-[300px] h-[300px] rounded-[50%] bg-[#EAEAEA]"></div>
              <div className="mt-[22px] text-center text-[20px] px-[14px]">
                推し猫の写真やコメントに投稿できる！
              </div>
            </div>
            <div className="w-[300px]">
              <div className="w-[300px] h-[300px] rounded-[50%] bg-[#EAEAEA]"></div>
              <div className="mt-[22px] text-center text-[20px] px-[14px]">
                その他、これから機能が追加されます。お楽しみに。
              </div>
            </div>
          </div>

          <div className="mt-[40px] hover:opacity-70">
            <img src="assets/imgs/member.png" alt="" />
          </div>

          <div className="mt-[80px]">
            <img src="assets/imgs/rule_begin_fan.png" alt="" />
          </div>

          <div className="text-[16px] leading-[21px]">
            ニャン参りとは、看板猫がいるお店に自ら訪問すること。「ニャン参りの心得」定め、看板猫の代弁をさせていただいております。自分勝手な行動で猫界から追放されないように気を付けましょう。
          </div>

          <div className="mt-[32px] mb-[72px]">
            <div className="mt-[16px] flex">
                <div className="mt-[6px] w-[24px] h-[24px] me-[16px] bg-[#C38154] rounded-[50%] text-[16px] text-white flex justify-center items-center font-bold">1</div>
                <div className="text-[24px] font-bold leading-[32px]">看板猫はいない時もある。その日にもし出会えたら幸運を噛み締めるニャー</div>
            </div>
            <div className="mt-[16px] flex">
                <div className="mt-[6px] w-[24px] h-[24px] me-[16px] bg-[#C38154] rounded-[50%] text-[16px] text-white flex justify-center items-center font-bold">2</div>
                <div className="text-[24px] font-bold leading-[32px]">看板猫へのすべての行為をする前に、お店の方に一言聞く礼節を大切にするニャー</div>
            </div>
            <div className="mt-[16px] flex">
                <div className="mt-[6px] w-[24px] h-[24px] me-[16px] bg-[#C38154] rounded-[50%] text-[16px] text-white flex justify-center items-center font-bold">3</div>
                <div className="text-[24px] font-bold leading-[32px]">看板猫が寝ているときこそ、温かく見守る広い心を持つニャー</div>
            </div>
            <div className="mt-[16px] flex">
                <div className="mt-[6px] w-[24px] h-[24px] me-[16px] bg-[#C38154] rounded-[50%] text-[16px] text-white flex justify-center items-center font-bold">4</div>
                <div className="text-[24px] font-bold leading-[32px]">看板猫の表情で今の気分や気持ちを察する心眼を開くニャー</div>
            </div>
            <div className="mt-[16px] flex">
                <div className="mt-[6px] w-[24px] h-[24px] me-[16px] bg-[#C38154] rounded-[50%] text-[16px] text-white flex justify-center items-center font-bold">5</div>
                <div className="text-[24px] font-bold leading-[32px]">衝動的に看板猫に触りたい気持ちをグッとこらえる忍耐力をつけるニャー</div>
            </div>
            <div className="mt-[16px] flex">
                <div className="mt-[6px] w-[24px] h-[24px] me-[16px] bg-[#C38154] rounded-[50%] text-[16px] text-white flex justify-center items-center font-bold">6</div>
                <div className="text-[24px] font-bold leading-[32px]">食事中やトイレ中の看板猫を邪魔しないで欲しいニャー</div>
            </div>
            <div className="mt-[16px] flex">
                <div className="mt-[6px] w-[24px] h-[24px] me-[16px] bg-[#C38154] rounded-[50%] text-[16px] text-white flex justify-center items-center font-bold">7</div>
                <div className="text-[24px] font-bold leading-[32px]">看板猫のペースを尊重し、目配り・気配り・心配りニャー</div>
            </div>
            <div className="mt-[16px] flex">
                <div className="mt-[6px] w-[24px] h-[24px] me-[16px] bg-[#C38154] rounded-[50%] text-[16px] text-white flex justify-center items-center font-bold">8</div>
                <div className="text-[24px] font-bold leading-[32px]">立ったまま上から見下ろすのではなく、看板猫と同じ目線で楽しむニャー</div>
            </div>
            <div className="mt-[16px] flex">
                <div className="mt-[6px] w-[24px] h-[24px] me-[16px] bg-[#C38154] rounded-[50%] text-[16px] text-white flex justify-center items-center font-bold">9</div>
                <div className="text-[24px] font-bold leading-[32px]">ニャン参りできない時は、モフモフ・ツヤツヤを妄想する力をつけるニャー</div>
            </div>
            <div className="mt-[16px] flex">
                <div className="mt-[6px] w-[24px] h-[24px] me-[16px] bg-[#C38154] rounded-[50%] text-[16px] text-white flex justify-center items-center font-bold">10</div>
                <div className="text-[24px] font-bold leading-[32px]">他の人のニャン参り体験を尊重し、共有する喜びを知るニャー</div>
            </div>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};

export default ConceptIntro;
