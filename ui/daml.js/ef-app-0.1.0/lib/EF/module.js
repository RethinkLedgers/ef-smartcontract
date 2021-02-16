"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');


exports.FundingContractApproval = {
  templateId: 'd0308dc2a690c05522c58fde975fbc5f8333978a44b67f67050c0e2a454ee7f1:EF:FundingContractApproval',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({lessor: damlTypes.Party.decoder, fundingDate: damlTypes.Date.decoder, dealerCommission: damlTypes.Numeric(10).decoder, fundingRequest: exports.FundingContractRequest.decoder, fundingStatus: exports.FundingStatus.decoder, }); }),
  encode: function (__typed__) {
  return {
    lessor: damlTypes.Party.encode(__typed__.lessor),
    fundingDate: damlTypes.Date.encode(__typed__.fundingDate),
    dealerCommission: damlTypes.Numeric(10).encode(__typed__.dealerCommission),
    fundingRequest: exports.FundingContractRequest.encode(__typed__.fundingRequest),
    fundingStatus: exports.FundingStatus.encode(__typed__.fundingStatus),
  };
}
,
  Archive: {
    template: function () { return exports.FundingContractApproval; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.FundingContractApproval);



exports.FundingApproval = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newFundingDate: damlTypes.Date.decoder, newDealerCommission: damlTypes.Numeric(10).decoder, selectedlessor: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    newFundingDate: damlTypes.Date.encode(__typed__.newFundingDate),
    newDealerCommission: damlTypes.Numeric(10).encode(__typed__.newDealerCommission),
    selectedlessor: damlTypes.Party.encode(__typed__.selectedlessor),
  };
}
,
};



exports.FundingContractRequest = {
  templateId: 'd0308dc2a690c05522c58fde975fbc5f8333978a44b67f67050c0e2a454ee7f1:EF:FundingContractRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({lessor: damlTypes.List(damlTypes.Party).decoder, originationFee: damlTypes.Numeric(10).decoder, fundingContract: exports.EFContract.decoder, }); }),
  encode: function (__typed__) {
  return {
    lessor: damlTypes.List(damlTypes.Party).encode(__typed__.lessor),
    originationFee: damlTypes.Numeric(10).encode(__typed__.originationFee),
    fundingContract: exports.EFContract.encode(__typed__.fundingContract),
  };
}
,
  Archive: {
    template: function () { return exports.FundingContractRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  FundingApproval: {
    template: function () { return exports.FundingContractRequest; },
    choiceName: 'FundingApproval',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.FundingApproval.decoder; }),
    argumentEncode: function (__typed__) { return exports.FundingApproval.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.FundingContractApproval).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.FundingContractApproval).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.FundingContractRequest);



exports.FundingRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newLessors: damlTypes.List(damlTypes.Party).decoder, newFundingDate: damlTypes.Date.decoder, newFee: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    newLessors: damlTypes.List(damlTypes.Party).encode(__typed__.newLessors),
    newFundingDate: damlTypes.Date.encode(__typed__.newFundingDate),
    newFee: damlTypes.Numeric(10).encode(__typed__.newFee),
  };
}
,
};



exports.CreateEFContract = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.EFContract = {
  templateId: 'd0308dc2a690c05522c58fde975fbc5f8333978a44b67f67050c0e2a454ee7f1:EF:EFContract',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({originator: damlTypes.Party.decoder, business: damlTypes.Party.decoder, eftype: exports.EFType.decoder, startdate: damlTypes.Date.decoder, duration: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, rate: damlTypes.Numeric(10).decoder, assetType: exports.AssetType.decoder, vin: damlTypes.Text.decoder, businessCreditScore: damlTypes.Int.decoder, dealercommission: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    originator: damlTypes.Party.encode(__typed__.originator),
    business: damlTypes.Party.encode(__typed__.business),
    eftype: exports.EFType.encode(__typed__.eftype),
    startdate: damlTypes.Date.encode(__typed__.startdate),
    duration: damlTypes.Text.encode(__typed__.duration),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
    rate: damlTypes.Numeric(10).encode(__typed__.rate),
    assetType: exports.AssetType.encode(__typed__.assetType),
    vin: damlTypes.Text.encode(__typed__.vin),
    businessCreditScore: damlTypes.Int.encode(__typed__.businessCreditScore),
    dealercommission: damlTypes.Numeric(10).encode(__typed__.dealercommission),
  };
}
,
  Archive: {
    template: function () { return exports.EFContract; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CreateEFContract: {
    template: function () { return exports.EFContract; },
    choiceName: 'CreateEFContract',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateEFContract.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateEFContract.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.EFContract).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.EFContract).encode(__typed__); },
  },
  FundingRequest: {
    template: function () { return exports.EFContract; },
    choiceName: 'FundingRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.FundingRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.FundingRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.FundingContractRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.FundingContractRequest).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.EFContract);



exports.CloseWholeSaleContract = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newEndDate: damlTypes.Date.decoder, newClosingContract: exports.EFContract.decoder, }); }),
  encode: function (__typed__) {
  return {
    newEndDate: damlTypes.Date.encode(__typed__.newEndDate),
    newClosingContract: exports.EFContract.encode(__typed__.newClosingContract),
  };
}
,
};



exports.WholesaleContract = {
  templateId: 'd0308dc2a690c05522c58fde975fbc5f8333978a44b67f67050c0e2a454ee7f1:EF:WholesaleContract',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({originator: damlTypes.Party.decoder, dealer: damlTypes.Party.decoder, eftype: exports.EFType.decoder, startDate: damlTypes.Date.decoder, endDate: damlTypes.Date.decoder, duration: damlTypes.Text.decoder, loanAmount: damlTypes.Numeric(10).decoder, interest: damlTypes.Numeric(10).decoder, assetType: exports.AssetType.decoder, vin: damlTypes.Text.decoder, closingContract: exports.EFContract.decoder, status: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    originator: damlTypes.Party.encode(__typed__.originator),
    dealer: damlTypes.Party.encode(__typed__.dealer),
    eftype: exports.EFType.encode(__typed__.eftype),
    startDate: damlTypes.Date.encode(__typed__.startDate),
    endDate: damlTypes.Date.encode(__typed__.endDate),
    duration: damlTypes.Text.encode(__typed__.duration),
    loanAmount: damlTypes.Numeric(10).encode(__typed__.loanAmount),
    interest: damlTypes.Numeric(10).encode(__typed__.interest),
    assetType: exports.AssetType.encode(__typed__.assetType),
    vin: damlTypes.Text.encode(__typed__.vin),
    closingContract: exports.EFContract.encode(__typed__.closingContract),
    status: damlTypes.Text.encode(__typed__.status),
  };
}
,
  Archive: {
    template: function () { return exports.WholesaleContract; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CloseWholeSaleContract: {
    template: function () { return exports.WholesaleContract; },
    choiceName: 'CloseWholeSaleContract',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CloseWholeSaleContract.decoder; }),
    argumentEncode: function (__typed__) { return exports.CloseWholeSaleContract.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.WholesaleContract).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.WholesaleContract).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.WholesaleContract);



exports.FundingStatus = {
  Open: 'Open',
  Funded: 'Funded',
  keys: ['Open','Funded',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.FundingStatus.Open), jtv.constant(exports.FundingStatus.Funded)); }),
  encode: function (__typed__) { return __typed__; },
};



exports.AssetType = {
  Van: 'Van',
  Tractor: 'Tractor',
  Trailor: 'Trailor',
  keys: ['Van','Tractor','Trailor',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.AssetType.Van), jtv.constant(exports.AssetType.Tractor), jtv.constant(exports.AssetType.Trailor)); }),
  encode: function (__typed__) { return __typed__; },
};



exports.EFType = {
  Lease: 'Lease',
  Loan: 'Loan',
  keys: ['Lease','Loan',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.EFType.Lease), jtv.constant(exports.EFType.Loan)); }),
  encode: function (__typed__) { return __typed__; },
};

