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
