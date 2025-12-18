import "./navbarStyles.css";
import {  EyeOutlined, LinkOutlined, FlagOutlined, FilterOutlined, FullscreenOutlined,FullscreenExitOutlined} from "@ant-design/icons";
import { employees } from "./data";
import { useState } from "react";
import { FloatButton } from "antd";
import ReportCustomCopylink from "./reportCustomCopylink";

export default function Navbar() {
  const [tempBtn, setTempBtn] = useState(false);


  const [isFullPage, setIsFullPage] = useState(false);

  const toggleFullPage = () => {
    setIsFullPage((prev) => !prev);
  };

  return (
    <>

      {!isFullPage && (
        <nav>
          <div className="logo">
            <div className="symbol">
              <span>PJ18.ai</span>
            </div>
            <p>This is replica of claude.ai prop drilling demo page</p>
          </div>

          <div className="options">
            <div className="options">
            <div className='ExOptions' id='viewLength'><EyeOutlined />{employees.length}</div>
            <div className='ExOptions' onClick={() => setTempBtn(true)}><LinkOutlined /></div>
            <div className='ExOptions' onClick={() => setTempBtn(true)}><FlagOutlined /></div>
            <div className='ExOptions' id='customise' onClick={() => setTempBtn(true)}><FilterOutlined />customise</div>
            <div className='ExOptions' onClick={toggleFullPage}><FullscreenOutlined /></div>
        </div>

            
          </div>
        </nav>
      )}

      {isFullPage && (
        <FloatButton
          className="floatFullIN"
          icon={<FullscreenExitOutlined />}
          onClick={toggleFullPage}
        />
      )}


      {tempBtn && 
        <ReportCustomCopylink
        open={tempBtn}
        onClose={() => setTempBtn(false)}
        />
      }


    </>
  );
}
