import React, { useState } from 'react'
import logo from './cn.png';
import { Link, useSearchParams } from 'react-router-dom';
import { useUserState } from './UserContext';
import styles from './mypage.module.css'



// function Mypage() {
//   return (
//     <div>
//       <div class="head">
//         <Link to={"/"}>
//           <img src={logo} className='App-logo' alt='React' />
//         </Link>
//         <Link to={"/Mypage"}>
//           <button className='mypage'>my page</button>
//         </Link>
//       </div>
//     </div>
//   )
// }

const MyPage = () => {

  const [userInfo, setUserInfo] = useState({
    name: "홍길동",
    id: 'hong123',
    major: "컴퓨터정보통신",
    number: "123456",
    email: "123456@jnu.ac.kr",
    pwd: "123456"
  });

  const [textMajor, setTextMajor] = useState("");
  const [textPwd, setTextPwd] = useState("");
  const [textEmail, setTextEmail] = useState("");

  const majorChange = () => {
    setUserInfo(prevUserInfo => ({
      ...prevUserInfo,
      major: textMajor,
    }));
  };

  const emailChange = () => {
    setUserInfo(prevUserInfo => ({
      ...prevUserInfo,
      email: textEmail,
    }));
  };

  //비밀번호에 맞게 수정하기
  const pwdChange = () => {
    setUserInfo(prevUserInfo => ({
      ...prevUserInfo,
      pwd: textPwd,
    }));
  };

  return (
    <div className={styles['container']}>
      <div className={styles['mypage']}>
        <div className={styles['myinfoframe']}>
          <span className={styles['text']}>
          <span>{userInfo.name}</span>
          </span>
          <div style={{top: "13px", left: "100px", position: 'absolute'}}>
          {userInfo.email}
          </div>
        
          <span className={styles['text02']}>
            <span>{userInfo.number}</span>
          </span>
          <span className={styles['text04']}>
            <span>{userInfo.major}</span>
          </span>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83500b0e-6528-4d22-adda-d9e7de434eab/31d96da6-a645-4c26-8561-573fc7db36a1?org_if_sml=13959"
            alt="logoimage2413"
            className={styles['logopage']}
          />
        </div>
       
        <span className={styles['text12']}>
          <span>내 정보</span>
        </span>
        <div className={styles['accountframe']}>
          <span className={styles['text14']}>
            <span>
              계정
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className={styles['frame']}>
            <span className={styles['text16']}>
              <span>
               
              <input type="text" value= {textMajor} onChange={(e)=> setTextMajor(e.target.value)}  />
              <button onClick={majorChange}>전공 변경</button>    
              
              </span>
            </span>
          </div>
          <div className={styles['frame1']}>
            <span className={styles['text20']}>
              <span>
                <input type="text" value= {textEmail} onChange={(e)=> setTextEmail(e.target.value)}  />
              <button onClick={emailChange}>이메일변경</button>
                
                </span>
            </span>
          </div>
          <div className={styles['frame2']}>
            <span className={styles['text18']}>
              <span><button>비밀번호변경</button>
	              </span>
            </span>
          </div>
          
        </div>
        <div className={styles['etcframe']}>
          <span className={styles['text22']}>
            <span>기타</span>
          </span>
          <div className={styles['frame3']}>
            <span className={styles['text24']}>
              <span><button>
                회원 탈퇴</button></span>
            </span>
          </div>
          <div className={styles['frame4']}>
            <span className={styles['text26']}>
              <span><button>
              로그아웃
              </button>
                </span>
            </span>
          </div>
        </div>
        <div className={styles['bottombar']}>
          <button className={styles['selectoptionbutton']}>
            <img
              src="/optionselectbuttoni397-de4n.svg"
              alt="optionselectbuttonI397"
              className={styles['optionselectbutton']}
            />
            <span className={styles['text28']}>
              <span>강의 옵션 선택</span>
            </span>
          </button>
          <button className={styles['homebutton']}>
            <span className={styles['text30']}>
              <span>Home</span>
            </span>
            <img
              src="/homebuttoni397-4qx6.svg"
              alt="HomeButtonI397"
              className={styles['home-button1']}
            />
          </button>
          <button className={styles['mypagebutton']}>
            <span className={styles['text32']}>
              <span>my page</span>
            </span>
            <img
              src="/userpagebuttoni397-k7q9.svg"
              alt="UserpagebuttonI397"
              className={styles['userpagebutton']}
            />
          </button>
        </div>
      </div>
      

    </div>
  );
};

export default MyPage