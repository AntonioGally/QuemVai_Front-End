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
  Criado: {
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

export interface InvitesSendedList {
  id_Friend: number;
  UserFriendOwner: {
    username: string;
    photos: string;
  };
}
export interface InvitesSendedTrustList {
  something_here: string;
  but_i_dont_know: string;
  what: string;
}
export interface InvitesReceivedTrustList {
  id: number;
  status_friendships: strring;
  securityFriend: strring;
  id_User: number;
  id_Friend: number;
  UserOwner: {
    username: strring;
    photos: strring;
  };
}

export interface InvitesReceivedList {
  id_User: number;
  UserOwner: {
    username: string;
    photos: string;
  };
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
