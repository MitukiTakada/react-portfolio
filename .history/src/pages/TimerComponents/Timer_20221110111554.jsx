import { useToast } from '@chakra-ui/toast';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import LoginContext from '../../LoginContext';
import PomoTimer from './PomoTimer';
import Setting from './Setting';
import SettingContext from './SettingContext';
import "./Timer.css";

const Timer = () => {
  const _isLogin = localStorage.getItem("isLogin");
  const toast = useToast();
  const {isLogin} = useContext(LoginContext);
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    if(_isLogin === false) {
      toast({
        position: "top",
        title: "ログインしてください",
        status: "error",
        duration: 5000,
        isClosable: true
      })
      navigate("/")
    }
  },[])
  return (
    <div className="timer-body">
      <main>
        <SettingContext.Provider value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes, 
          setBreakMinutes
        }}>
          {showSettings ? <Setting /> : <PomoTimer/>}
        </SettingContext.Provider>
      </main>
    </div>
  )
}

export default Timer