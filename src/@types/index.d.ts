export interface ListSpaceAdmin {
  CEP: number;
  UF: string;
  address: string;
  description: string;
  id: number;
  isStatus: boolean;
  latitude: number;
  longitude: number;
  name: string;
  space: [
    {
      id: number;
    }
  ];
  status: boolean;
}

export interface ConfigSpaceAdmin {
  CEP: number;
  UF: string;
  address: string;
  description: string;
  id: number;
  isStatus: boolean;
  latitude: number;
  longitude: number;
  name: string;
  space: [
    {
      id: number;
      name: string;
      description: string;
    }
  ];
  status: boolean;
}

export interface ListEmailReceivedAdmin {
  id: number;
  email_user: string;
  subject: string;
  message: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ViewEmailReceivedAdmin {
  id: number;
  email_user: string;
  subject: string;
  message: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ViewEmailRespondedAdmin {
  id: number;
  email_user: string;
  subject: string;
  message: string;
  ownerMessage: [
    {
      email_user: string;
      subject: string;
      message: string;
    }
  ];
  status: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface EmailRespondedAdmin {
  id: number;
}

export interface ListEmailRespondedAdmin {
  id: number;
  email_user: string;
  ownerMessage: [
    {
      subject: string;
      message: string;
    }
  ];
  status: string;
  updatedAt: Date;
}

export interface ListSportsAdmin {
  id: number;
  name: string;
  description: string;
}
export interface ConfigSportsAdmin {
  created: {
    id: number;
    name: string;
    description: string;
  };
}

export interface FormCadastroUser {
  userName: string;
  userNickName: string;
  userEmail: string;
  userDDD: number;
  UserNumber: number;
  userPhoto: any;
  userPassword: string;
  userConfirmPassword: string;
}

export interface FormConfigUser {
  info: {
    id: number;
    name: string;
    username: string;
    email: string;
    cellPhoneNumber: number;
    DDD: number;
    status: string;
    isAdmin: boolean;
    photos: string;
  };
}

export interface FormConfigUserAltered {
  userName: string;
  userNickName: string;
  userEmail: string;
  userDDD: number;
  UserNumber: number;
}

export interface HistoricUserList {
  id: number;
  AuthorID: number;
  author: string;
  photos: string;
  name_event: string;
  created_at: string;
  finished_at: string;
  SpaceName: string;
  address: string;
  CEP: number;
  UF: string;
  SpaceDescription: string;
  SportsName: string;
  SportsDescription: string;
}

export interface HistoricInfoById {
  id: number;
  AuthorID: number;
  author: string;
  photos: string;
  name_event: string;
  created_at: Date;
  finished_at: Date;
  SpaceName: string;
  address: string;
  CEP: string;
  UF: string;
  SpaceDescription: string;
  SportsName: string;
  SportsDescription: string;
}

export interface InvitesSendedList {
  id: number;
  id_User: number;
  id_Friend: number;
  status_friendships: string;
  securityFriend: string;
  username: string;
  photos: string;
}
export interface InvitesSendedTrustList {
  id: number;
  status_friendships: string;
  securityFriend: string;
  id_User: number;
  id_Friend: number;
  username: string;
  photos: string;
}
export interface InvitesReceivedTrustList {
  id: number;
  status_friendships: string;
  securityFriend: string;
  id_User: number;
  id_Friend: number;
  username: string;
  photos: string;
}

export interface InvitesReceivedList {
  id: number;
  id_User: number;
  id_Friend: number;
  status_friendships: string;
  securityFriend: boolean;
  username: string;
  photos: string;
}

export interface FriendsList {
  id: number;
  id_User: number;
  id_Friend: number;
  name?: string;
  username: string;
  photos: string;
  email?: string;
  DDD?: number;
  cellPhoneNumber?: number;
}

export interface ListSpaceByUF {
  id: number;
  name: string;
  address: string;
  CEP: number;
  description: string;
  status: boolean;
  space: [
    {
      id: number;
      name: string;
      description: string;
    }
  ];
}
export interface ListSpaceByUFAux {
  id: number;
  name: string;
  address: string;
  CEP: number;
  latitude: number;
  longitude: number;
  description: string;
  status: boolean;
  space: [
    {
      id: number;
      name: string;
      description: string;
    }
  ];
}

export interface SpaceInformationByID {
  id: number;
  name: string;
  address: string;
  CEP: number;
  description: string;
  status: boolean;
  space: [
    {
      id: number;
      name: string;
      description: string;
    }
  ];
}
export interface SpaceInformationEventeCreate {
  id: number;
  name: string;
  address: string;
  CEP: number;
  description: string;
  status: boolean;
  space: [
    {
      id: number;
      name: string;
      description: string;
    }
  ];
}

export interface FavoriteSpaceList {
  Space_id: number;
  nome: string;
  address: string;
  CEP: number;
  UF: string;
  latitude: string;
  longitude: string;
  description: string;
  status: number;
  isStatus: number;
}

export interface EventsInfoByUf {
  Id_Event: number;
  id_space: number;
  AuthorID: number;
  author: string;
  photos: string;
  name_event: string;
  created_at: string;
  SpaceName: string;
  address: string;
  CEP: number;
  UF: string;
  SpaceDescription: string;
  SportsName: string;
  SportsDescription: string;
}

export interface SearchMain {
  Sports: [
    {
      id: number;
      name: string;
      description: string;
    }
  ];
  Users: [
    {
      id: number;
      username: string;
      photos: string;
      idFriendUser: [
        {
          id: number;
          status_friendships: string;
          securityFriend: boolean;
          id_User: number;
          id_Friend: number;
        }
      ];
    }
  ];
  Events: [
    {
      id: number;
      id_space: number;
      id_author: number;
      id_sport: number;
      name_event: string;
      event_date: string;
      created_at: string;
      EventsOwnerSpaces: {
        id: number;
        name: string;
        address: string;
        CEP: number;
        UF: string;
        latitude: string;
        longitude: string;
        description: string;
        status: boolean;
        isStatus: boolean;
      };
    }
  ];
  Spaces: [
    {
      id: number;
      name: string;
      address: string;
      CEP: number;
      description: string;
      status: boolean;
    }
  ];
}
export interface SearchUserAux {
  id: number;
  username: string;
  photos: string;
  idFriendUser: [
    {
      id: number;
      status_friendships: string;
      securityFriend: boolean;
      id_User: number;
      id_Friend: number;
    }
  ];
}

export interface SportsFilter {
  Sport_id: number;
  Name_Sport: string;
  Sport_Description: string;
  Space_id: number;
  Space_name: string;
  Space_address: string;
  Space_CEP: number;
  Space_UF: string;
  Space_Description: string;
  Space_status: number;
}

export interface ExistingSportList {
  id: number;
  name: string;
  description: string;
}

export interface SearchPeople {
  Users: [
    {
      id: number;
      username: string;
      photos: string;
      idFriendUser: [
        {
          id: number;
          status_friendships: string;
          securityFriend: boolean;
          id_User: number;
          id_Friend: number;
        }
      ];
    }
  ];
}

export interface UserList {
  id: number;
  name: string;
  username: string;
  email: string;
  photos: string;
  isAdmin: boolean;
}

export interface EventInfo {
  Id_Event: number;
  id_space: number;
  AuthorID: number;
  author: string;
  photos: string;
  name_event: string;
  created_at: string;
  SpaceName: string;
  address: string;
  CEP: string;
  UF: string;
  SpaceDescription: string;
  SportsName: string;
  SportsDescription: string;
}

export interface AllParticipants {
  participant: [
    {
      id: number;
      participants: string;
      photos: string;
    }
  ];
}
