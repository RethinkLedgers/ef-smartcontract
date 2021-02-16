// Generated from EF.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type FundingContractApproval = {
  lessor: damlTypes.Party;
  fundingDate: damlTypes.Date;
  dealerCommission: damlTypes.Numeric;
  fundingRequest: FundingContractRequest;
  fundingStatus: FundingStatus;
};

export declare const FundingContractApproval:
  damlTypes.Template<FundingContractApproval, undefined, 'd0308dc2a690c05522c58fde975fbc5f8333978a44b67f67050c0e2a454ee7f1:EF:FundingContractApproval'> & {
  Archive: damlTypes.Choice<FundingContractApproval, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace FundingContractApproval {
  export type CreateEvent = damlLedger.CreateEvent<FundingContractApproval, undefined, typeof FundingContractApproval.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<FundingContractApproval, typeof FundingContractApproval.templateId>
  export type Event = damlLedger.Event<FundingContractApproval, undefined, typeof FundingContractApproval.templateId>
  export type QueryResult = damlLedger.QueryResult<FundingContractApproval, undefined, typeof FundingContractApproval.templateId>
}



export declare type FundingApproval = {
  newFundingDate: damlTypes.Date;
  newDealerCommission: damlTypes.Numeric;
  selectedlessor: damlTypes.Party;
};

export declare const FundingApproval:
  damlTypes.Serializable<FundingApproval> & {
  }
;


export declare type FundingContractRequest = {
  lessor: damlTypes.Party[];
  originationFee: damlTypes.Numeric;
  fundingContract: EFContract;
};

export declare const FundingContractRequest:
  damlTypes.Template<FundingContractRequest, undefined, 'd0308dc2a690c05522c58fde975fbc5f8333978a44b67f67050c0e2a454ee7f1:EF:FundingContractRequest'> & {
  Archive: damlTypes.Choice<FundingContractRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  FundingApproval: damlTypes.Choice<FundingContractRequest, FundingApproval, damlTypes.ContractId<FundingContractApproval>, undefined>;
};

export declare namespace FundingContractRequest {
  export type CreateEvent = damlLedger.CreateEvent<FundingContractRequest, undefined, typeof FundingContractRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<FundingContractRequest, typeof FundingContractRequest.templateId>
  export type Event = damlLedger.Event<FundingContractRequest, undefined, typeof FundingContractRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<FundingContractRequest, undefined, typeof FundingContractRequest.templateId>
}



export declare type FundingRequest = {
  newLessors: damlTypes.Party[];
  newFundingDate: damlTypes.Date;
  newFee: damlTypes.Numeric;
};

export declare const FundingRequest:
  damlTypes.Serializable<FundingRequest> & {
  }
;


export declare type CreateEFContract = {
};

export declare const CreateEFContract:
  damlTypes.Serializable<CreateEFContract> & {
  }
;


export declare type EFContract = {
  originator: damlTypes.Party;
  business: damlTypes.Party;
  eftype: EFType;
  startdate: damlTypes.Date;
  duration: string;
  amount: damlTypes.Numeric;
  rate: damlTypes.Numeric;
  assetType: AssetType;
  vin: string;
  businessCreditScore: damlTypes.Int;
  dealercommission: damlTypes.Numeric;
};

export declare const EFContract:
  damlTypes.Template<EFContract, undefined, 'd0308dc2a690c05522c58fde975fbc5f8333978a44b67f67050c0e2a454ee7f1:EF:EFContract'> & {
  Archive: damlTypes.Choice<EFContract, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  CreateEFContract: damlTypes.Choice<EFContract, CreateEFContract, damlTypes.ContractId<EFContract>, undefined>;
  FundingRequest: damlTypes.Choice<EFContract, FundingRequest, damlTypes.ContractId<FundingContractRequest>, undefined>;
};

export declare namespace EFContract {
  export type CreateEvent = damlLedger.CreateEvent<EFContract, undefined, typeof EFContract.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<EFContract, typeof EFContract.templateId>
  export type Event = damlLedger.Event<EFContract, undefined, typeof EFContract.templateId>
  export type QueryResult = damlLedger.QueryResult<EFContract, undefined, typeof EFContract.templateId>
}



export declare type CloseWholeSaleContract = {
  newEndDate: damlTypes.Date;
  newClosingContract: EFContract;
};

export declare const CloseWholeSaleContract:
  damlTypes.Serializable<CloseWholeSaleContract> & {
  }
;


export declare type WholesaleContract = {
  originator: damlTypes.Party;
  dealer: damlTypes.Party;
  eftype: EFType;
  startDate: damlTypes.Date;
  endDate: damlTypes.Date;
  duration: string;
  loanAmount: damlTypes.Numeric;
  interest: damlTypes.Numeric;
  assetType: AssetType;
  vin: string;
  closingContract: EFContract;
  status: string;
};

export declare const WholesaleContract:
  damlTypes.Template<WholesaleContract, undefined, 'd0308dc2a690c05522c58fde975fbc5f8333978a44b67f67050c0e2a454ee7f1:EF:WholesaleContract'> & {
  Archive: damlTypes.Choice<WholesaleContract, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  CloseWholeSaleContract: damlTypes.Choice<WholesaleContract, CloseWholeSaleContract, damlTypes.ContractId<WholesaleContract>, undefined>;
};

export declare namespace WholesaleContract {
  export type CreateEvent = damlLedger.CreateEvent<WholesaleContract, undefined, typeof WholesaleContract.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<WholesaleContract, typeof WholesaleContract.templateId>
  export type Event = damlLedger.Event<WholesaleContract, undefined, typeof WholesaleContract.templateId>
  export type QueryResult = damlLedger.QueryResult<WholesaleContract, undefined, typeof WholesaleContract.templateId>
}



export declare type FundingStatus =
  | 'Open'
  | 'Funded'
;

export declare const FundingStatus:
  damlTypes.Serializable<FundingStatus> & {
  }
& { readonly keys: FundingStatus[] } & { readonly [e in FundingStatus]: e }
;


export declare type AssetType =
  | 'Van'
  | 'Tractor'
  | 'Trailor'
;

export declare const AssetType:
  damlTypes.Serializable<AssetType> & {
  }
& { readonly keys: AssetType[] } & { readonly [e in AssetType]: e }
;


export declare type EFType =
  | 'Lease'
  | 'Loan'
;

export declare const EFType:
  damlTypes.Serializable<EFType> & {
  }
& { readonly keys: EFType[] } & { readonly [e in EFType]: e }
;

