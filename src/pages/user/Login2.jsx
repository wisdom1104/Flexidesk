import React,{useState,useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../axios/api';
import { cookies } from '../../shared/cookies';
import jwt_decode from 'jwt-decode';
import { Input } from '../../components/Input';


const SingUp2 = () => {
    // //이름, 이메일, 비밀번호, 비밀번호 확인
    const navi = useNavigate()

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    
          // 에러메시지 상태
          nameMessage:'',
          emailMessage:'',
          passwordMessage:'',
          passwordConfirmMessage:'',
    
        // 유효성 검사
        isName: false,
        isEmail: false,
        isPassword: false,
        isPasswordConfirm: false,
      });

      const loginChangeHandler = e => {
        const { value, name } = e.target;
        setUser(old => {
          return { ...old, [name]: value };
        });
      };

      console.log(user.emailMessage);
      console.log(user.isEmail);
      console.log(user.email);

    const onsubmitHandler = async e => {
        e.preventDefault();
        try {
          const response = await api.post('/users/login', user);
          const token = response.headers.authorization;
          const newtoken = token.split(' ')[1];
          const payload = jwt_decode(newtoken);
    
          cookies.set('token', newtoken, { path: '/' , maxAge:3540,});
          cookies.set('userId', payload.id, { path: '/' , maxAge:3540,});
          cookies.set('companyName', String(payload.companyName), { path: '/' , maxAge:3540, });
          cookies.set('role', payload.role, { path: '/' , maxAge:3540,});
          
          navi('/adminspace')
    
        } catch (e) {
          const errorMsg = e.response.data.message;
          alert(`${errorMsg}`);
        }
      };

    // 이름
    const onChangeName = useCallback((e) => {
        // setUser(e.target.value);
        if (e.target.value.length < 2 || e.target.value.length > 5) {
          setUser((old) => {
            return {
              ...old,
              nameMessage: "2글자 이상 5글자 미만으로 입력해주세요.",
              isName: false,
            };
          });
        } else {
          setUser((old) => {
            return {
              ...old,
              nameMessage: "올바른 이름 형식입니다 :)",
              isName: true,
            };
          });
        }
      }, []);

    // 이메일
    const onChangeEmail = useCallback((e) => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      const emailCurrent = e.target.value

      if (!emailRegex.test(emailCurrent)) {
        setUser((old) =>{
            return {
                ...old,
                emailMessage:'이메일 형식이 틀렸어요!',
                isEmail:false
            }
        })
      } else {
        setUser((old) => {
          return {
            ...old,
            emailMessage: "올바른 이름 형식입니다 :)",
            isEmail: true,
          };
        });
      }
    }, []);
  
    // 비밀번호
    const onChangePassword = useCallback((e) => {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
      const passwordCurrent = e.target.value
  
      if (!passwordRegex.test(passwordCurrent)) {
        setUser((old) =>{
            return {
                ...old,
                passwordMessage:'비밀번호 형식이 틀렸어요!',
                isPassword:false
            }
        })
      } else {
        setUser((old) => {
          return {
            ...old,
            passwordMessage: "올바른 이름 형식입니다 :)",
            isPassword: true,
          };
        });
      }
    }, []);
  
  
    // // 비밀번호 확인
    // const onChangePasswordConfirm = useCallback(
    //   (e) => {
    //     const passwordConfirm = e.target.value
  
    //     if (password === passwordConfirm) {
    //         passwordConfirmMessage('비밀번호를 똑같이 입력했어요 : )')
    //         isPasswordConfirm(true)
    //     } else {
    //         passwordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
    //         isPasswordConfirm(false)
    //     }
    //   },
    //   [password]
    // );

  
    return (
      <>
  
        <h1>회원가입</h1>
  
        <form onSubmit={onsubmitHandler}>
          <div>
            <Input text="name" value={user.name} type="text" name="name" onChange={loginChangeHandler} placeholder="이름"
 />
            {user.name.length > 0 && <span className={`message ${user.isName ? 'success' : 'error'}`}>{user.nameMessage}</span>}
          </div>
  
          <div>
            <Input text="email" value={user.email} type="email" name="email" onChange={loginChangeHandler}  placeholder="이메일" />
            {user.email.length > 0 && <span className={`message ${user.isEmail ? 'success' : 'error'}`}>{user.emailMessage}</span>}
          </div>
  
          <div>
            <Input
              onChange={loginChangeHandler}
              passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
              name="password"
              value={user.password}
              placeholder="비밀번호"
            />
            {user.password.length > 0 && (
              <span className={`message ${user.isPassword ? 'success' : 'error'}`}>{user.passwordMessage}</span>
            )}
          </div>
  
          <div>
            <Input
              onChange={loginChangeHandler}
              passwordText=" "
              name="passwordConfirm"
              value={user.passwordConfirm}
              placeholder="비밀번호 확인"
            />
            {user.passwordConfirm.length > 0 && (
              <span className={`message ${user.isPasswordConfirm ? 'success' : 'error'}`}>{user.passwordConfirmMessage}</span>
            )}
          </div>
  
          {/* 이름, 이메일, 패스워드, 패스워드 확인이 다 맞다면 주황버튼으로 */}
          <div>
            <section>
              <button
                type="submit"
                disabled={!(user.isName && user.isEmail && user.isPassword && user.isPasswordConfirm)}
              >
                다음
              </button>
            </section>
          </div>
        </form>
      </>
    )
  }
  
  export default SingUp2