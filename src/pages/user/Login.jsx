import React from 'react';
import { useState } from 'react';
import { Input } from '../../components/Input';
import { Flex, Row } from '../../components/Flex';
import ValidationError from '../../components/form/ValidationError';
import { AuthFormValidation } from '../../hooks/user/useAuthFormValidation';
import { StFont, StSmallFont } from '../welcome/WelcomeStyled';
import {
  StBackground,
  StForm,
  StFormBox,
  StLink,
  StLoginInputIconBox,
  StLoginForm,
  StLoginIcon,
  StLoginIconDiv,
  StLongButton,
  StOverall,
  StLoginContain,
} from './UserStyled';
import { LoginSubmitHandler } from '../../utils/loginSubmitHandler';
import Text from '../../components/Text';
import { Dimension } from '../../components/Dimension';
import { Void } from '../../components/Void';
import { Form, ImageIndex } from '../../styles/etc';
import Page from "../../components/Page"

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const { auth, onChangeEmailHandler, onChangePasswordHandler } =
    AuthFormValidation(login, setLogin);

  const { onsubmitHandler } = LoginSubmitHandler(login, setErrorMsg);

  return (
    <StBackground height="100vh">
      <StOverall>
        <StLoginContain>
          <StLoginForm onSubmit={onsubmitHandler} width="420px">
            <StForm>
              <StFormBox>
                {/* <StFont width="100%" align="start" fontSize="28px">
                  로그인
                </StFont> */}

                  <Flex ai="start" dir='column'>
                    <Dimension w="430px">
                      <Text shape="T28_700_30" color="blue_001">
                        로그인
                      </Text>

                    <Text shape="T16_500" color="blue_001">
                    이메일 주소와 비밀번호를 입력해주세요.
                    </Text>

                    </Dimension>
                  </Flex>

                {/* <StSmallFont
                  width="100%"
                  align="start"
                  fontSize="16px"
                  marginTop="10px"
                >
                  이메일 주소와 비밀번호를 입력해주세요.
                </StSmallFont> */}
              </StFormBox>

              <StLoginInputIconBox>
                <StLoginIconDiv>
                  <StLoginIcon
                    src={`${process.env.PUBLIC_URL}/img/loginIcon3.png`}
                    alt="loginIcon3"
                  />
                </StLoginIconDiv>

                <Input
                  type="email"
                  value={auth.email}
                  onChange={onChangeEmailHandler}
                  name="email"
                  placeholder="이메일"
                  required
                  border="none"
                />
              </StLoginInputIconBox>

              <StLoginInputIconBox>
                <StLoginIconDiv>
                  <StLoginIcon
                    src={`${process.env.PUBLIC_URL}/img/loginIcon4.png`}
                    alt="loginIcon4"
                  />
                </StLoginIconDiv>
                <Input
                  type="password"
                  value={auth.password}
                  onChange={onChangePasswordHandler}
                  name="password"
                  placeholder="비밀번호"
                  required
                  border="none"
                />
              </StLoginInputIconBox>

              <ValidationError value={errorMsg} />

              <StLongButton> 로그인 </StLongButton>

              <Row>
                <StLink to={'/signup'}> 관리자 회원가입 </StLink>
                <StLink to={'/signupuser'}> 일반 회원가입 </StLink>
              </Row>
            </StForm>
          </StLoginForm>
        </StLoginContain>
      </StOverall>
    </StBackground>

    // <Page>
    //   <Dimension w="420px" h="100%">
    //     <Flex ai="center">
    //       <Void mt="100" pd="40" br="8">
    //         <div
    //           style={{
    //             border: '1px solid red',
    //           }}
    //         >
    //           <Flex dir="row" fap="10" jc="space-between">
    //           <Form color="bgMint_001">
    //             <Text shape="T28_700_30" color="blue_001">
    //               로그인
    //             </Text>
    //             <Text shape="T16_500" color="blue_001">
    //               이메일 주소와 비밀번호를 입력해주세요.
    //             </Text>
    //             {/* ////////////////////////////////////////// */}
    //             <Void bd="1px solid #A6AEBB" br="8">
    //               <Dimension>
    //                 <Dimension w="20%" height="50px">
    //                   <ImageIndex
    //                     src={`${process.env.PUBLIC_URL}/img/loginIcon3.png`}
    //                     alt="loginIcon3"
    //                   />
    //                 </Dimension>
    //                 <div style={{
    //                   marginLeft: "40px"
    //                 }}>
    //                 <Input
    //                   type="email"
    //                   value={auth.email}
    //                   onChange={onChangeEmailHandler}
    //                   name="email"
    //                   placeholder="이메일"
    //                   required
    //                   // border="none"
    //                 />
    //                 </div>
    //               </Dimension>
    //             </Void>
    //             {/* ////////////////////////////////////////// */}
    //             <Void bd="1px solid #A6AEBB" br="8">
    //               <Dimension>
    //                 <Dimension w="20%" height="50px">
    //                   <ImageIndex
    //                     src={`${process.env.PUBLIC_URL}/img/loginIcon4.png`}
    //                     alt="loginIcon4"
    //                   />
    //                 </Dimension>
    //                 <Input
    //                 type="password"
    //                 value={auth.password}
    //                 onChange={onChangePasswordHandler}
    //                 name="password"
    //                 placeholder="비밀번호"
    //                 required
    //                 border="none"
    //                 />
    //               </Dimension>
    //             </Void>

    //           </Form>
    //           </Flex>
    //         </div>
    //       </Void>
    //     </Flex>
    //   </Dimension>
    // </Page>
  );
}

export default Login;
