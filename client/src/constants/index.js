import { createCampaign, dashboard, logout, payment, profile, withdraw, facebook } from '../assets';

export const navlinks = [
  {
    name: 'postpage',
    imgUrl: facebook,
    link: '/postpage',
  },



  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },



  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create',
  },





  {
    name: 'payment',
    imgUrl: payment,             
    link: '/metaverse',
  },


  {
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/deals',
    
  },



  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  
  

  {
    name: 'logout',
    imgUrl: logout,
    link: '/logout',
    
  },


];


