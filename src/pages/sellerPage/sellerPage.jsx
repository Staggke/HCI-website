import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentNeutralSharpIcon from '@mui/icons-material/SentimentNeutralSharp';
import { Favorite } from "@mui/icons-material";
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Star } from "phosphor-react";
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import 'reactjs-popup/dist/index.css';
import "./sellerPage.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const SellerPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { productId } = useParams();
  const navigate = useNavigate();

    return (
        <div>
          <div className="seller">
            <div className="account">
              <h2><AccountCircleIcon fontSize="large"/> {PRODUCTS[ productId-1].seller} </h2>
              <p className="accountDetails"> 100 Sales | <Star weight="fill" size={12}/><Star weight="fill" size={12}/><Star weight="fill" size={12}/><Star weight="fill" size={12}/><Star size={12}/> </p>
              <p>{PRODUCTS[productId-1].aboutSeller}</p>
            </div>
            <div>
              <Popup trigger={<button> <CommentIcon className="messageIcon" fontSize="small" /> &ensp;Message <b> {PRODUCTS[ productId-1].seller} </b> </button>} position="right center"
              modal nested>
              {
                close => (
                  <div className="modal">
                    <IconButton className="close" onClick={() => close()}>
                      <CancelOutlinedIcon />
                    </IconButton>
                    <div className="header"> Message <b> {PRODUCTS[ productId-1].seller} </b> </div>
                    <div className="content">
                      <input className="message" type="text" placeholder="Write a message" /> &emsp; 
                      <IconButton onClick={() => close()}>
                        <SendIcon />
                      </IconButton>
                    </div>
                  </div>
              )
            }
            </Popup>
            &emsp; &emsp; <button> <Favorite className="favoriteIcon" fontSize="small" /> &ensp;Follow Seller </button>
            </div>
          </div>
          <div className="tabs">
            <Box sx={{ width: '100%'}}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                  value={value} 
                  onChange={handleChange} 
                  centered
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "grey",
                    }
                  }}
                  aria-label="seller tabs" 
                  >
                    <Tab className="tabTitle" label="Items" {...a11yProps(0)} textColor="secondary"/>
                    <Tab className="tabTitle" label="Reviews" {...a11yProps(1)} />
                    <Tab className="tabTitle" label="FAQ" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <div className="tabContent">
                <CustomTabPanel value={value} index={0}>
                  <div className="itemTab">
                  <button onClick={() => navigate(-1)}>
                    {<img className="pic" src = {PRODUCTS[productId-1].productImage} />}
                  </button>
                  <div className="description">
                    <button onClick={() => navigate(-1)}>
                      <b style={{fontSize: 18, color: "grey"}}>{PRODUCTS[productId-1].productName}</b>
                    </button>
                    <p>Price: ${PRODUCTS[productId-1].price}</p>
                  </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <div className="review">
                    <div className="reviewer">
                      <EmojiEmotionsIcon /> <b> Anonymous </b> 
                      <Star weight="fill" size={15}/><Star weight="fill" size={15}/><Star weight="fill" size={15}/><Star weight="fill" size={15}/><Star size={15}/>
                    </div>
                    <div className="reviewContent">
                      <p> {PRODUCTS[productId-1].comment1} </p>
                    </div>
                  </div>
                  <div className="review">
                    <div className="reviewer">
                      <SentimentNeutralSharpIcon /> <b> Anonymous </b> 
                      <Star weight="fill" size={15}/><Star weight="fill" size={15}/><Star size={15}/><Star size={15}/><Star size={15}/>
                    </div>
                    <div className="reviewContent">
                      <p> {PRODUCTS[productId-1].comment2} </p>
                    </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <div className="faq">
                    <div className="qbox">
                      <h2> {PRODUCTS[ productId-1].q1} </h2>
                      <p>{PRODUCTS[productId-1].a1}</p>
                    </div>
                    <div className="qbox">
                      <h2> {PRODUCTS[ productId-1].q2} </h2>
                      <p>{PRODUCTS[productId-1].a2}</p>
                    </div>
                  </div>
                </CustomTabPanel>
              </div>
            </Box>
          </div>
        </div>
    )
}