import React, { useState } from "react";
import Layout from '../../layout/AppDefaultLayout';
import MainimgDefult from "../../images/main_img.gif";

import FullMenu from "./FullMenuPage";

import { Icons } from "../../components/Icon";

const LocationsData = [
  {
    id: 1,
    title: "즐거운카페",
    location: "서울 어디구 어디로",
    time: "08:00~22:00",
    state: "영업중",
  },
  {
    id: 2,
    title: "즐거운2카페",
    location: "서울 어디구 어디로 1F",
    time: "08:00~22:00",
    state: "영업전",
  },
  {
    id: 3,
    title: "즐거운카페",
    location: "경기 어디구 어디로",
    time: "08:00~22:00",
    state: "영업종료",
  },
  {
    id: 4,
    title: "즐거운카페",
    location: "경기 어디구 어디로",
    time: "08:00~22:00",
    state: "휴점",
  },
];

function Locations() {
  const [open, setOpen] = useState(false);
  const [titleSelect, setTitleSelect] = useState(
    <p className="headline1">
      <span>주문매장을</span>
      <span>선택해 주세요!</span>
    </p>
  );

  const LocationonCLick = () => {
    setOpen(!open);
  };
  const ListCLick = (location) => {
    setOpen(!open);
    setTitleSelect(
      <p>
        <span className="align center">
          <span className="headline1">{location.title}</span>
        </span>
        <span className="mt_12">
          {location.state !== "영업중" && <em>{location.state}</em>}
          {location.state === "영업중" && (
            <em className="red_bg mr_10">영업중</em>
          )}
          {location.time}
        </span>
      </p>
    );
  };
  return (
    <div className="main_locations">
      <button onClick={LocationonCLick}>
        {titleSelect}
        <i className={`${open ? "open" : ""}`}>
          <Icons.ArrowBg
            width={36}
            height={36}
            fill="var(--blue)"
            stroke="#000"
          />
        </i>
      </button>
      <div className={`${"main_locations_list"} ${open ? "open" : ""}`}>
        <ul>
          {LocationsData.map((location) => (
            <li key={location.id}>
              {location.state === "영업중" && (
                <button onClick={() => ListCLick(location)}>
                  <i>
                    <Icons.MenuPrivacy width={20} height={20} />
                  </i>
                  <p className="optionItem">
                    <span>
                      {location.title}
                      {location.state === "영업중" && (
                        <em className="red_bg ml_10">영업중</em>
                      )}
                    </span>
                    <span className="mt_10">{location.location}</span>
                    <span>{location.time}</span>
                  </p>
                </button>
              )}
              {location.state !== "영업중" && (
                <button style={{ cursor: "default" }}>
                  <i>
                    <Icons.MenuPrivacy width={20} height={20} fill="#838F39" />
                  </i>
                  <p className="optionItem" style={{ color: "#838F39" }}>
                    <span>
                      {location.title}
                      {location.state !== "영업중" && (
                        <em className="ml_10">{location.state}</em>
                      )}
                    </span>
                    <span className="mt_10">{location.location}</span>
                    <span>{location.time}</span>
                  </p>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const MenuList = [
  "에스프레소",
  "아메리카노",
  "카페라떼",
  "카푸치노",
  "바닐라라떼",
  "캬라멜마끼아또",
  "더치커피",
  "디카페인콜드브루",
  "캔 콜드브루",
  "달고나라떼",
  "딸기라떼",
  "초코라떼",
  "얼그레이 밀크티",
  "복숭아아이스티",
  "플레인요거트스무디",
  "딸기요거트스무디",
  "블루베리요거트스무디",
  "한라봉스무디",
  "레몬에이드",
  "샤인머스캣에이드",
  "감귤주스",
  "토마토주스",
  "수박주스",
  "유자차",
  "배도라지모과차",
  "보이차",
  "로얄캐모마일",
  "쿨 민트",
  "현미녹차",
  "루이보스 빌베리",
];

function QRMainPage() {
  const date = new Date();

   const getRandomIndex = function (length) {
     return parseInt(Math.random() * length);
   };
  return (
    <Layout Coupon Cart Menu>
      <div className="main">
        <div className="align top main_visual">
          <div className="lft">
            <p>
              <span className="headline4 mb_16">
                {date.getHours() === 0
                  ? "Good night"
                  : date.getHours() === 1
                  ? "Good night"
                  : date.getHours() === 2
                  ? "Good night"
                  : date.getHours() === 3
                  ? "Good night"
                  : date.getHours() === 4
                  ? "Good night"
                  : date.getHours() === 5
                  ? "Good night"
                  : date.getHours() === 6
                  ? "Good morning"
                  : date.getHours() === 7
                  ? "Good morning"
                  : date.getHours() === 8
                  ? "Good morning"
                  : date.getHours() === 9
                  ? "Good morning"
                  : date.getHours() === 10
                  ? "Good morning"
                  : date.getHours() === 11
                  ? "Good morning"
                  : date.getHours() === 12
                  ? "Good afternoon"
                  : date.getHours() === 13
                  ? "Good afternoon"
                  : date.getHours() === 14
                  ? "Good afternoon"
                  : date.getHours() === 15
                  ? "Good afternoon"
                  : date.getHours() === 16
                  ? "Good afternoon"
                  : date.getHours() === 17
                  ? "Good afternoon"
                  : date.getHours() === 18
                  ? "Good night"
                  : date.getHours() === 19
                  ? "Good night"
                  : date.getHours() === 20
                  ? "Good night"
                  : date.getHours() === 21
                  ? "Good night"
                  : date.getHours() === 22
                  ? "Good night"
                  : date.getHours() === 23
                  ? "Good night"
                  : date.getHours() === 24
                  ? "Good night"
                  : ""}
              </span>
              <span>
                <strong>하루가 달콤해지는</strong>
              </span>
              <span>
                <em className="neon">
                  {MenuList[getRandomIndex(MenuList.length)]}
                </em>
              </span>
              <span>
                <em className="neon">한잔 어때요?</em>
              </span>
            </p>
          </div>
          <div className="rgt">
            <img src={MainimgDefult} alt="유저 이미지" />
          </div>
        </div>
        <div className="main_content">
          <Locations />
          <FullMenu QR />
        </div>
      </div>
    </Layout>
  );
}

export default QRMainPage;
