import React from "react";
import Layout from "../../../layout/AppDefaultLayout";

function NoticeDetailPage() {
  return (
    <Layout
      Back
      Menu
      Title="공지사항 상세"
    >
      <div className="notice">
        <div className="inner">
          <div className="notice_title">
            <p className="body0 pb_6">즐거운 가입쿠폰 사용안내</p>
            <p className="color_t_99">2025-10-05</p>
          </div>
          <div className="notice_content">
            <p className="body0">
              안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.
              안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.
              안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.
              안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NoticeDetailPage;