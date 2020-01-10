
import { ISocialiiz79Props, IEntity } from './ISocialiiz79Props';
import { string } from 'prop-types';

import { ITheTime } from '../../../services/dateServices';

export interface IPivot {
    headerText: string;
    itemKey: string;
    filter?: string;
    data?: string;
}
  
export interface IMyPivots {
    allTopics: IPivot[];
    allEntityKeywords: IPivot[];
    keysForTopic: IPivot[];
    subTopic1Titles: IPivot[];
    subTopic2Titles: IPivot[];
    subTopic3Titles: IPivot[];
    entTitlesForTopics: IPivot[];
    spacers: IPivot[];
}
 
  
export interface ILink {
    description: string;
    url: string;
}
  
export interface IUser {
    title: string;
    initials?: string;  //Single person column
    email?: string;  //Single person column
    id?: any;
    Id?: any;
    ID?: any;
    isSiteAdmin?:boolean;
    LoginName?: string;
}

export interface ISocialiiz79State {
    // 0 - Context
    currentUser?: IUser;  //Current user information

    // 1 - Analytics options
    
    description: string;
    endTime?: ITheTime;

    // 2 - Source and destination list information
    sourceListURL?: string; //Get from list item  
    sourceListName: string;  // Static Name of list (for URL) - used for links and determined by first returned item


    // 3 - 

    // 4 - 

    // 5 - UI Defaults

    // 6 - User Feedback

    // 7 - Media Choices - Left Side bar
    navigationType: string;

    // 8 - Pivot Choices - Top Bar
    currentPivotSet: string;
    currentPivots: IPivot[][];
    selectedEntity: IEntity;
    selectedMedia : string;

    pivots?: IMyPivots;
    pivtTitles?:string[];
    filteredCategory?: string;
    pivotDefSelKey?: string;


    // 9 - Other web part options


    loadStatus?: string;
    loadData: any;

    userLoadStatus?: string;

    showTips?: string;
    loadError?: string;
  
    listError?: boolean;
    itemsError?: boolean;
  
    searchType?: string;
    searchShow?: boolean;
    searchCount?: number;
    searchWhere?: string;

}