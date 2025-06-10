import React from "react";
import moment from "moment";
import Layout from "../../../layout/AppDefaultLayout";
import OrderHistoryCard from "./OrderHistoryCard"

import Tabs from "../../../components/Tabs";
import NoData from "../../../components/NoData";

const OrderHistoryData = [
  {
    id: 1,
    ordernum: 231013001,
    image: require("../../../images/item.png"),
    product: "아메리카노",
    productlength: 2,
    location: "즐거운카페 1호점",
    locationname: "서울 어디로 어디구 1F",
    price: 3800,
    date: "2025.10.28",
    time: "17:43:44",
    type: "ICED",
    density: {
      opt: "연하게",
      price: 0,
    },
    discount: [
      {
        title: "가입쿠폰 아메리카노",
        percent: 100,
        count: 1,
      },
      {
        title: "추가할인쿠폰 적용",
        percent: 73.95,
        count: 1,
      },
    ],
    other: [
      {
        id: 1,
        product: "플레인요거트스무디",
        productlength: 1,
        price: 4200,
        type: "ICED Only",
        density: null,
        discount: [
          {
            title: "가입쿠폰 모든음료",
            percent: 100,
            count: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    ordernum: 231013001,
    image: require("../../../images/item.png"),
    product: "아메리카노",
    productlength: 1,
    location: "즐거운카페 1호점",
    locationname: "서울 어디구 어디로",
    price: 3800,
    date: "2025.09.28",
    time: "17:43:44",
    type: "ICED",
    density: {
      opt: "진하게",
      price: 500,
    },
    discount: [
      {
        title: "가입쿠폰 아메리카노",
        percent: 100,
        count: 1,
      },
    ],
    other: null,
  },
  {
    id: 3,
    ordernum: 231013001,
    image: require("../../../images/item.png"),
    product: "아메리카노",
    productlength: 1,
    location: "즐거운카페 1호점",
    locationname: "서울 어디구 어디로",
    price: 3800,
    date: "2025.03.28",
    time: "17:43:44",
    type: "ICED",
    density: {
      opt: "진하게",
      price: 500,
    },
    discount: null,
    other: null,
  },
];

const today = new Date();
// 현재 날짜를 가져옵니다.



const oneMonthAgo = new Date(today.setMonth(today.getMonth() - 1));
const sixMonthAgo = new Date(today.setMonth(today.getMonth() - 6));
const twelveMonthAgo = new Date(today.setMonth(today.getMonth() - 12));



const History1 = OrderHistoryData.filter(
  (History) => History.date >= moment(oneMonthAgo).format("YYYY.MM.DD")
);

const History6 = OrderHistoryData.filter(
  (History) => History.date >= moment(sixMonthAgo).format("YYYY.MM.DD")
);

const History12 = OrderHistoryData.filter(
  (History) => History.date >= moment(twelveMonthAgo).format("YYYY.MM.DD")
);


function OrderHistoryPage() {
  return (
    <Layout Back Menu Title="주문내역">
      <div className="orderhistory">
        <Tabs
          type="poingbg"
          globalClass="orderhistory_tab"
          TabsData={[
            {
              id: 1,
              title: "1개월",
              defaultActive: true,
              content: (
                <>
                  {History1.length > 0 ? (
                    <OrderHistoryCard Data={History1} />
                  ) : (
                    <NoData
                      globalClass="mt_80 mb_80"
                      txt="1개월 동안에 주문하신 내역이 없습니다."
                    />
                  )}
                </>
              ),
            },
            {
              id: 2,
              title: "6개월",
              content: (
                <>
                  {History6.length > 0 ? (
                    <OrderHistoryCard Data={History6} />
                  ) : (
                    <NoData
                      globalClass="mt_80 mb_80"
                      txt="6개월 동안에 주문하신 내역이 없습니다."
                    />
                  )}
                </>
              ),
            },
            {
              id: 3,
              title: "12개월",
              content: (
                <>
                  {History12.length > 0 ? (
                    <OrderHistoryCard Data={History12} />
                  ) : (
                    <NoData
                      globalClass="mt_80 mb_80"
                      txt="12개월 동안에 주문하신 내역이 없습니다."
                    />
                  )}
                </>
              ),
            },
          ]}
        />
      </div>
    </Layout>
  );
}

export default OrderHistoryPage;