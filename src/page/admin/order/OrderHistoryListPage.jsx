import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Select from "../../../components/Select";
import Input from "../../../components/Input";
import MuiPage from "../../../components/MuiPage";
import Modal from "./OrderDetailModal";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const categoryOpt = [
  { label: "전체", value: "전체" },
  { label: "임직원 법인명", value: "임직원 법인명" },
  { label: "입주사 회사명", value: "입주사 회사명" },
  { label: "방문객", value: "방문객" },
]
const storeNameOpt = [
  { label: "전체", value: "전체" },
  { label: "즐거운 카페", value: "즐거운 카페" },
  { label: "즐거운2 카페", value: "즐거운2 카페" },
];
const dateOpt = [
  { label: "오늘", value: "오늘" },
  { label: "1주일", value: "1주일" },
  { label: "1개월", value: "1개월" },
  { label: "3개월", value: "3개월" },
];
const numOpt = [
  { label: "20개씩 보기", value: "20개씩 보기" },
  { label: "30개씩 보기", value: "30개씩 보기" },
  { label: "50개씩 보기", value: "50개씩 보기" },
];

function OrderHistoryListPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">주문 내역 관리</h1>
      </div>
      <ContentBox top>
        <div>
          <Select
            minwidth="210px"
            round="app"
            placeholder="구분"
            options={categoryOpt}
          />
        </div>
        <div>
          <Select
            minwidth="210px"
            round="app"
            placeholder="판매 매장"
            options={storeNameOpt}
          />
        </div>
        {/* <div>
          <Select
            minwidth="210px"
            round="app"
            placeholder="기간 선택"
            options={dateOpt}
          />
        </div> */}
        <div style={{ width: "250px" }}>
          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            className={"date_picker"}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={false}
            placeholderText="기간 선택"
          />
        </div>
        <div>
          <Input
            width="210px"
            placeholder="주문번호"
            shape="none"
            onClick={() => {}}
          />
        </div>
        <div>
          <Input
            width="210px"
            placeholder="주문자명"
            shape="none"
            onClick={() => {}}
          />
        </div>
        <Button
          type="pc"
          color="black"
          icon="Search"
          iconStyle={{
            fill: "#fff",
            height: 18,
            width: 18,
          }}
          round
          size="icon_l"
        >
          검색
        </Button>
        <Button
          type="pc"
          color="white"
          size="icon_l"
          round
          icon="Refresh"
          iconStyle={{
            fill: "var(--primary)",
            height: 23,
            width: 19,
          }}
          globalClass="ml_10"
        >
          초기화
        </Button>
      </ContentBox>
      <ContentBox>
        <div className="align start mb_12">
          <div className="item">
            <Select
              minwidth="200px"
              defaultValue={numOpt[0]}
              options={numOpt}
            />
          </div>
          <div className="item">
            <p className="body0">
              총 <span className="title3">200</span>건
            </p>
          </div>
        </div>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="5%" />
                <col width="6%" />
                <col width="10%" />
                <col width="10%" />
                <col width="15%" />
                <col width="15%" />
                <col width="15%" />
                <col width="10%" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell>주문번호</TableCell>
                  <TableCell>구분</TableCell>
                  <TableCell>주문자명</TableCell>
                  <TableCell>주문내역</TableCell>
                  <TableCell>주문일시</TableCell>
                  <TableCell>판매 매장명</TableCell>
                  <TableCell>결제금액</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>000000</TableCell>
                  <TableCell>즐거운2</TableCell>
                  <TableCell>홍길동</TableCell>
                  <TableCell>
                    <Button
                      onClick={handleOpen}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      에스프레소 1개 외
                    </Button>
                  </TableCell>
                  <TableCell>2025.10.24 09:27:00</TableCell>
                  <TableCell>즐거운2 카페</TableCell>
                  <TableCell className="right">
                    <Button
                      onClick={handleOpen}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      8,280원
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>000001</TableCell>
                  <TableCell>즐거운</TableCell>
                  <TableCell>홍길동</TableCell>
                  <TableCell>
                    <Button
                      onClick={handleOpen}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      카페라떼 1개 외
                    </Button>
                  </TableCell>
                  <TableCell>2025.10.24 09:27:00</TableCell>
                  <TableCell>즐거운2 카페</TableCell>
                  <TableCell className="right">
                    <Button
                      onClick={handleOpen}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      8,280원
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>000002</TableCell>
                  <TableCell>방문객</TableCell>
                  <TableCell>1234</TableCell>
                  <TableCell>
                    <Button
                      onClick={handleOpen}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      카페라떼 1개 외
                    </Button>
                  </TableCell>
                  <TableCell>2025.10.24 09:27:00</TableCell>
                  <TableCell>즐거운2 카페</TableCell>
                  <TableCell className="right">
                    <Button
                      onClick={handleOpen}
                      color="gray"
                      none
                      txtColor="txtgray"
                      type="pc"
                      size="xsmall"
                    >
                      8,280원
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={8}>검색된 결과가 없습니다.</TableCell>
                </TableRow>
              </TableBody>
            </MuiTable>
          </TableContainer>
        </div>
        <MuiPage />
      </ContentBox>
      <Modal open={open} handleClose={handleClose} />
    </Layout>
  );
}

export default OrderHistoryListPage;