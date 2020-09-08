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
    space: {
        id: string
    }
    status: boolean;
}