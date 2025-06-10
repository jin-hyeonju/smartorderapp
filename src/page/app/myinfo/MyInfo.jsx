import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import Layout from '../../../layout/AppDefaultLayout'
import { Input } from "../../../components/Input"
import { Select } from "../../../components/Select"
import { Button } from "../../../components/Button"

function MyInfo() {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  // };

  // 
  const [isSingle] = useState(false);

  const sector = [
    { value: "즐거운", label: "즐거운" },
    { value: "즐거운2", label: "즐거운2" },
    { value: "즐거운3", label: "즐거운3" },
    { value: "즐거운4", label: "즐거운4" },
  ];

  return (
    <Layout Back Title="내 정보" Menu>
      <form
      // onSubmit={handleFormSubmit}
      >
        <ul className="myinfo inner">
          <li className="align">
            <label htmlFor="name">이름</label>
            <div>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                shape="none"
                globalClass=""
                disabled
              />
            </div>
          </li>
          <li className="align">
            <label htmlFor="email">이메일</label>
            <div>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="xxxxxxx@gmail.com"
                shape="none"
                globalClass=""
                disabled
              />
            </div>
          </li>
          <li className="align">
            <label htmlFor="phone">전화번호</label>
            <div>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-000-0000"
                shape="none"
                maxLength={13}
                globalClass=""
                disabled
                phone
              />
            </div>
          </li>
          <li className="align">
            <label htmlFor="phone">비밀번호</label>
            <div className="align">
              <Input
                value={password}
                onChange={handlePasswordChange}
                defaultValue="1231456"
                type="password"
                shape="none"
                disabled
                globalClass="password"
              />
              <Button
                onClick={() => navigate("/change-password")}
                size="xxsmall"
                line
                color="gray"
              >
                변경
              </Button>
            </div>
          </li>
          <li>
            <dl className="align">
              <dt>소속</dt>
              <dd>
                {isSingle ? (
                  <Select
                    options={sector}
                    round="app"
                    defaultValue={sector[0]}
                    disabled
                  />
                ) : (
                  <Select
                    options={sector}
                    defaultValue={sector[0]}
                    round="app"
                  />
                )}
              </dd>
            </dl>
          </li>
        </ul>
      </form>
    </Layout>
  );
}

export default MyInfo;
