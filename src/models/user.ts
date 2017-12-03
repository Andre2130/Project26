export class User {
  Status?: Status;
  AccessibleAccountDetailList?: AccessibleAccountDetailList;
}

export interface AccountInfo {
  _id: string,
  AccountDetail: any,
  BasicAccountDetails?: BasicAccountDetail,
  LegalParticipantIdentifier?: string,
  OperatingCompanyIdentifier?: string,
  PrimaryIdentifier?: string,
  Status: Status
}

export interface Status{
  StatusCode?: string;
  Severity?: string;
  StatusDescription?: string;
  AccessibleAccountDetailList?: string
}

export interface AccessibleAccountDetailList {
  _id?: string;
  OperatingCompanyIdentifier?: string;
  ProductCode?: string;
  PrimaryIdentifier?: string;
  LegalParticipantIdentifier?: string
  BasicAccountDetail?: BasicAccountDetail
}

export interface BasicAccountDetail{
  Balances?: Balances;
  Codes?: Codes;
  RedactedAccountNumber?: string;
  BranchIdentifier?: string
}


export interface Balances{
  AccessibleBalanceAmount?: number;
  InvestmentBalanceAmount?: number;
  CreditAvailableBalanceAmount?: number;
  PayoffBalanceAmount?: number;
  AvailableBalanceAmount?: number;
  CurrentBalanceAmount?: number
}

export interface Codes {
  StatusDescription?: string;
  AccountStatusCode?: string;
  SubProductCode?: string;
  RelationshipCode?: string;
  CategoryDescription?: string;
  CategoryCode?: string
}

export interface AccountDetails {
  operatingCompanyIdentifier?: string;
  productCode?: string;
  primaryIdentifier?: string;
}

export interface Transaction {
  amount?: number;
  date?: Date;
  type?: string;
  state?: string;
}
