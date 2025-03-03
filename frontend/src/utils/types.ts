export interface MockDataType {
  transactionHash: string;
  status: string;
  blockNumber: number;
  from: string;
  to: string;
  value: string;
  gasFee: string;
  summary: string;
  riskLevel: string;
  timestamp: string;
}

export interface TransactionDetails {
  summary: string;
  txData: {
    transactionHash: string;
    status: string;
    block: string;
    timestamp: string;
    from: string;
    to: string;
    value: string;
    gasPrice: string;
    additionalDetails: {
      etherPrice: string;
      gasUsed: string;
      nonce: string;
    };
  };
}

export interface SummaryMockDataType {
  summary: string;
}

export interface DetailsMockDataType {
  transactionHash: string;
  status: string;
  from: string;
  to: string;
  timestamp: string;
}

export interface LoadingType {
  setIsLoading: (value: boolean) => void;
}

export interface TabPropTypes {
  activeTab: "summary" | "details" | "raw";
  setActiveTab: (value: "summary" | "details" | "raw") => void;
}

export interface HeroPropsType {
  value: string;
  gasFee: string;
}
