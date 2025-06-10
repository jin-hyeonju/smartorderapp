import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/AppLoginLayout";
import MainimgDefult from "../../../images/main_img.gif";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

function QRLoginPage() {
  const navigate = useNavigate();
  const [certification, setCertification] = useState(false);
  const certifications = () => {
    setCertification(true);
  };
  return (
    <Layout>
      <div className="login">
        <div className="align top login_visual">
          <div className="lft">
            <p>
              <span className="headline4 mb_16">We’ve already met!</span>
              <span className="headline0">
                <strong>
                  안녕하세요 <em className="bold400">:)</em>
                </strong>
              </span>
              <span>
                <em className="neon">즐거운카페</em>
              </span>
              <span>
                <em className="neon">입니다.</em>
              </span>
            </p>
          </div>
          <div className="rgt pt_30">
            <img src={MainimgDefult} alt="유저 이미지" />
          </div>
        </div>
        <div className="login_info">
          <p>
            <span>서비스 이용을 위해</span>
            <span>휴대폰 번호를 입력해주세요.</span>
          </p>
        </div>
        <div className="login_content">
          <div className="login_box">
            <div className="login_box_input align column ">
              <div>
                <Input
                  onClick={certifications}
                  certification={certification}
                  shape="none"
                  globalClass="login_input"
                  placeholder="핸드폰 번호 입력"
                  phone
                  maxLength={13}
                />
              </div>
              <div>
                <Input
                  onClick={() => {}}
                  shape="none"
                  globalClass="login_input"
                  type="text"
                  placeholder="인증번호 입력"
                  timer={certification === true}
                  disabled={certification === false}
                />
              </div>
            </div>
            <div className="error_txt required_lft mt_5 ml_5">
              인증번호가 맞지 않습니다. <br />
              <span className="ml_10">다시 인증번호를 요청하세요.</span>
            </div>
            <div className="login_btn mt_20">
              <div>
                <Button
                  color="blue"
                  onClick={() => {
                    navigate("/qrmain");
                  }}
                  size="full"
                  disabled={certification === false}
                >
                  로그인
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default QRLoginPage;
