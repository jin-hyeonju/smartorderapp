import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/AppLoginLayout";
import MainimgDefult from "../../../images/main_img.gif";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

function MailVerifyPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="login">
        <div className="login_visual middle align">
          <div className="lft">
            <p>
              <span className="headline4 mb_16">We’ve already met!</span>
              <span className="headline0">
                <strong>
                  <em className="neon">비밀번호 </em>
                </strong>
              </span>
              <span>
                <em className="neon"></em>
              </span>
              <span>
                <strong>
                  <em className="neon">찾으세요 ?</em>
                </strong>
              </span>
            </p>
          </div>
          <div className="rgt">
            <img src={MainimgDefult} alt="유저 이미지" />
          </div>
        </div>
        <div className="login_info">
          {/* <p>
            <span>서비스 이용을 위해</span>
            <span>휴대폰 번호를 입력해주세요.</span>
          </p> */}
        </div>
        <div className="login_content">
          <div className="login_box">
            <p className="title2 mb_10">
              <span>비밀번호를 변경할</span>
              <span>이메일 주소를 입력해 주세요.</span>
            </p>
            <div className="login_box_input align column ">
              <div>
                <div>
                  <Input
                    onClick={() => {}}
                    shape="none"
                    globalClass="login_input"
                    placeholder="이메일 입력"
                  />
                </div>
              </div>
            </div>
            {/* <div className="error_txt required_lft mt_5 ml_5">
              이메일 주소를 입력해주세요.
            </div>
            <div className="error_txt required_lft mt_5 ml_5">
              이메일 형식이 올바르지 않습니다.
            </div> */}
            <div className="login_btn mt_20">
              <div>
                <Button
                  color="blue"
                  size="full"
                  onClick={() => {
                    navigate("/mail/info");
                  }}
                >
                  비밀번호 변경
                </Button>
              </div>
            </div>
            <div className="align center mt_10">
              <Button
                none
                onClick={() => navigate(-1 || "/")}
                size="small"
                color="blue"
              >
                뒤로가기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MailVerifyPage;
