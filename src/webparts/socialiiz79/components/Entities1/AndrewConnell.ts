
import { IEntity } from '../ISocialiiz79Props';

export function AndrewConnell(){

    const entity :IEntity = {
      title: 'Andrew Connell', //
      keywords: ["MVP","SharePoint","SPFx"],
      profilePic: "https://someURL.com",
      blog: [
        {
          title: 'Andrew\'s Blog',
          order: 1, //For Sorting
          url: 'https://www.andrewconnell.com/blog/',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],
      twitter:
        {
          title: 'Andrew\'s Twitter Feed',
          order: 1, //For Sorting
          url: 'https://twitter.com/andrewconnell',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }, 
    facebook:
        {
        title: '',
        order: 1, //For Sorting
        url: '',
        codeType: 'TBD', //Used to determine what functions to have avaialble
        },  // End facebook
    linkedIn: 
        {
            title: '',
            order: 1, //For Sorting
            url: '',
            codeType: 'TBD', //Used to determine what functions to have avaialble
        },  // End linkedIn
    github: 
        {
            title: '',
            order: 1, //For Sorting
            url: '',
            codeType: 'TBD', //Used to determine what functions to have avaialble
        },  // End github
    webSites: [
        {
          title: 'Voitanos Training',
          order: 1, //For Sorting
          url: 'https://www.voitanos.io/',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        },        {
          title: 'Voitanos Training2',
          order: 1, //For Sorting
          url: 'https://www.voitanos.io/',
          codeType: 'TBD', //Used to determine what functions to have avaialble
        }
      ],  // End webSites
      youtube: {
        title: 'YouTube',
        user: 'jaconnell', //Youtube User (from URL)
        order: 0, //For Sorting
        channels: [
          {
            title: 'AC Channel',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: 'UC5KFTohDGmAekuBwECj38PA', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/channel/UC5KFTohDGmAekuBwECj38PA', // to be used as generic link if no API key is given
          },{
            title: 'Laura Rogers Channel',
            objectType: 'Channel', //user,Channel, Playlist, Videos, Video
            objectID: 'UCbTVoDCaPM6wE0xsDGGr9VA', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/channel/UCbTVoDCaPM6wE0xsDGGr9VA', // to be used as generic link if no API key is given
          }
        ],
        playLists: [
          {
            title: 'Office / SharePoint / SPFx',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLb9FvVDRfRYjJxT9CBTJy1ugWcGrebq0W', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/playlist?list=PLb9FvVDRfRYjJxT9CBTJy1ugWcGrebq0W', // to be used as generic link if no API key is given
          },{
            title: 'Space Shuttle',
            objectType: 'Playlist', //user,Channel, Playlist, Videos, Video
            objectID: 'PLb9FvVDRfRYgLUxBwoDo_Qzt-G3_YgckS', //Used to determine what functions to have avaialble
            objectUrl: 'https://www.youtube.com/playlist?list=PLb9FvVDRfRYgLUxBwoDo_Qzt-G3_YgckS', // to be used as generic link if no API key is given
          }
        ]
      },
  
  
    };
  
      //twitter: any,
      //blog: any,
      //instagram:any,
      //facebook: any,
      //github: any,
      //androidStore: any,
      //appleStore: any,

      return entity;
      
  }