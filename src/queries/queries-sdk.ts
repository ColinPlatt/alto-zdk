import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The GenericScalar scalar type represents a generic GraphQL scalar value that could be: List or Object. */
  JSONScalar: any;
  datetime: any;
};

export type ActiveMarket = {
  __typename?: 'ActiveMarket';
  collectionAddress?: Maybe<Scalars['String']>;
  marketAddress: Scalars['String'];
  marketType: ActiveMarketType;
  networkInfo: NetworkInfo;
  price?: Maybe<PriceAtTime>;
  properties?: Maybe<ActiveMarketProperties>;
  status: Scalars['String'];
  tokenId?: Maybe<Scalars['String']>;
  transactionInfo: TransactionInfo;
};

export type ActiveMarketProperties = V3ReserveAuction;

export type ActiveMarketQueryInput = {
  marketType: ActiveMarketType;
  token?: InputMaybe<TokenInput>;
};

export enum ActiveMarketType {
  ActiveV3ReserveAuction = 'ACTIVE_V3_RESERVE_AUCTION'
}

export type AggregateAttribute = {
  __typename?: 'AggregateAttribute';
  traitType: Scalars['String'];
  valueMetrics: Array<AggregateAttributeValue>;
};

export type AggregateAttributeValue = {
  __typename?: 'AggregateAttributeValue';
  count: Scalars['Int'];
  percent: Scalars['Float'];
  value: Scalars['String'];
};

export type AggregateAttributesQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  ownerAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type AggregateStat = {
  __typename?: 'AggregateStat';
  floorPrice?: Maybe<Scalars['Float']>;
  nftCount: Scalars['Int'];
  ownerCount: Scalars['Int'];
  ownersByCount: OwnerCountConnection;
  salesVolume: SalesVolume;
};


export type AggregateStatFloorPriceArgs = {
  networks?: InputMaybe<Array<NetworkInput>>;
  where: CollectionAddressAndAttributesInput;
};


export type AggregateStatNftCountArgs = {
  networks?: InputMaybe<Array<NetworkInput>>;
  where: CollectionAddressOwnerAddressAttributesInput;
};


export type AggregateStatOwnerCountArgs = {
  networks?: InputMaybe<Array<NetworkInput>>;
  where: CollectionAddressAndAttributesInput;
};


export type AggregateStatOwnersByCountArgs = {
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  where: OwnersByCountQueryInput;
};


export type AggregateStatSalesVolumeArgs = {
  filter?: InputMaybe<SalesVolumeFilter>;
  networks?: InputMaybe<Array<NetworkInput>>;
  where: CollectionAddressOwnerAddressAttributesInput;
};

export type ApprovalEvent = {
  __typename?: 'ApprovalEvent';
  approvalEventType: ApprovalEventType;
  approved?: Maybe<Scalars['Boolean']>;
  approvedAddress: Scalars['String'];
  collectionAddress: Scalars['String'];
  ownerAddress: Scalars['String'];
  tokenId?: Maybe<Scalars['String']>;
};

export enum ApprovalEventType {
  Approval = 'APPROVAL',
  ApprovalForAll = 'APPROVAL_FOR_ALL'
}

export type AttributeFilter = {
  traitType: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type AudioEncodingTypes = {
  __typename?: 'AudioEncodingTypes';
  large?: Maybe<Scalars['String']>;
  original: Scalars['String'];
};

export enum Chain {
  Canto = 'CANTO'
}

export type Collection = {
  __typename?: 'Collection';
  address: Scalars['String'];
  attributes?: Maybe<Array<CollectionAttribute>>;
  description: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  networkInfo: NetworkInfo;
  symbol?: Maybe<Scalars['String']>;
  totalSupply?: Maybe<Scalars['Int']>;
};

export type CollectionAddressAndAttributesInput = {
  attributes?: InputMaybe<Array<AttributeFilter>>;
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
};

export type CollectionAddressOwnerAddressAttributesInput = {
  attributes?: InputMaybe<Array<AttributeFilter>>;
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  ownerAddresses?: InputMaybe<Array<Scalars['String']>>;
};

export type CollectionAttribute = {
  __typename?: 'CollectionAttribute';
  traitType?: Maybe<Scalars['String']>;
  valueMetrics: Array<CollectionAttributeValue>;
};

export type CollectionAttributeValue = {
  __typename?: 'CollectionAttributeValue';
  count: Scalars['Int'];
  percent: Scalars['Float'];
  value: Scalars['String'];
};

export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  nodes: Array<Collection>;
  pageInfo: PageInfo;
};

export enum CollectionSortKey {
  Created = 'CREATED',
  Name = 'NAME',
  None = 'NONE'
}

export type CollectionSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: CollectionSortKey;
};

export type CollectionsQueryInput = {
  collectionAddresses: Array<Scalars['String']>;
};

export type Currency = {
  __typename?: 'Currency';
  address: Scalars['String'];
  decimals: Scalars['Int'];
  name: Scalars['String'];
};

export type CurrencyAmount = {
  __typename?: 'CurrencyAmount';
  currency: Currency;
  decimal: Scalars['Float'];
  raw: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  collectionAddress?: Maybe<Scalars['String']>;
  eventType: EventType;
  networkInfo: NetworkInfo;
  properties: EventProperties;
  tokenId?: Maybe<Scalars['String']>;
  transactionInfo: TransactionInfo;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  nodes: Array<Event>;
  pageInfo: PageInfo;
};

export type EventProperties = ApprovalEvent | MintEvent | Sale | TransferEvent | V3AskEvent | V3ReserveAuctionEvent;

export enum EventSortKey {
  Created = 'CREATED'
}

export type EventSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: EventSortKey;
};

export enum EventType {
  ApprovalEvent = 'APPROVAL_EVENT',
  MintEvent = 'MINT_EVENT',
  SaleEvent = 'SALE_EVENT',
  TransferEvent = 'TRANSFER_EVENT',
  V3AskEvent = 'V3_ASK_EVENT',
  V3ReserveAuctionEvent = 'V3_RESERVE_AUCTION_EVENT'
}

export type EventsQueryFilter = {
  bidderAddresses?: InputMaybe<Array<Scalars['String']>>;
  eventTypes?: InputMaybe<Array<EventType>>;
  recipientAddresses?: InputMaybe<Array<Scalars['String']>>;
  sellerAddresses?: InputMaybe<Array<Scalars['String']>>;
  senderAddresses?: InputMaybe<Array<Scalars['String']>>;
  timeFilter?: InputMaybe<TimeFilter>;
};

export type EventsQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type ImageEncodingTypes = {
  __typename?: 'ImageEncodingTypes';
  large?: Maybe<Scalars['String']>;
  original: Scalars['String'];
  poster?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type ImageEncodingTypesVideoEncodingTypesAudioEncodingTypesUnsupportedEncodingTypes = AudioEncodingTypes | ImageEncodingTypes | UnsupportedEncodingTypes | VideoEncodingTypes;

export type Market = {
  __typename?: 'Market';
  collectionAddress?: Maybe<Scalars['String']>;
  marketAddress: Scalars['String'];
  marketType: MarketType;
  networkInfo: NetworkInfo;
  price?: Maybe<PriceAtTime>;
  properties?: Maybe<MarketProperties>;
  status: Scalars['String'];
  tokenId?: Maybe<Scalars['String']>;
  transactionInfo: TransactionInfo;
};

export enum MarketCategory {
  Ask = 'ASK',
  Auction = 'AUCTION',
  Offer = 'OFFER'
}

export type MarketProperties = V3Ask | V3ReserveAuction;

export enum MarketSortKey {
  ChainTokenPrice = 'CHAIN_TOKEN_PRICE',
  Created = 'CREATED',
  NativePrice = 'NATIVE_PRICE',
  None = 'NONE',
  TimedSaleEnding = 'TIMED_SALE_ENDING'
}

export type MarketSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: MarketSortKey;
};

export enum MarketStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Invalid = 'INVALID'
}

export enum MarketType {
  V3Ask = 'V3_ASK',
  V3ReserveAuction = 'V3_RESERVE_AUCTION'
}

export type MarketTypeFilter = {
  bidderAddresses?: InputMaybe<Array<Scalars['String']>>;
  marketType: MarketType;
  statuses?: InputMaybe<Array<MarketStatus>>;
};

export type MarketWithToken = {
  __typename?: 'MarketWithToken';
  market: Market;
  token?: Maybe<Token>;
};

export type MarketWithTokenConnection = {
  __typename?: 'MarketWithTokenConnection';
  nodes: Array<MarketWithToken>;
  pageInfo: PageInfo;
};

export type MarketsQueryFilter = {
  marketFilters?: InputMaybe<Array<MarketTypeFilter>>;
  priceFilter?: InputMaybe<PriceFilter>;
};

export type MarketsQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export enum MediaType {
  Audio = 'AUDIO',
  Gif = 'GIF',
  Html = 'HTML',
  Image = 'IMAGE',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type Mint = {
  __typename?: 'Mint';
  collectionAddress: Scalars['String'];
  networkInfo: NetworkInfo;
  originatorAddress: Scalars['String'];
  price: PriceAtTime;
  toAddress: Scalars['String'];
  tokenId: Scalars['String'];
  transactionInfo: TransactionInfo;
};

export type MintEvent = {
  __typename?: 'MintEvent';
  collectionAddress: Scalars['String'];
  originatorAddress: Scalars['String'];
  price: PriceAtTime;
  toAddress: Scalars['String'];
  tokenId: Scalars['String'];
};

export type MintInfo = {
  __typename?: 'MintInfo';
  mintContext: TransactionInfo;
  originatorAddress: Scalars['String'];
  price?: Maybe<PriceAtTime>;
  toAddress: Scalars['String'];
};

export enum MintSortKey {
  None = 'NONE',
  Price = 'PRICE',
  Time = 'TIME',
  TokenId = 'TOKEN_ID'
}

export type MintSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: MintSortKey;
};

export type MintWithTokenAndMarkets = {
  __typename?: 'MintWithTokenAndMarkets';
  markets: Array<Market>;
  mint: Mint;
  token?: Maybe<Token>;
};


export type MintWithTokenAndMarketsMarketsArgs = {
  filter?: InputMaybe<MarketsQueryFilter>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<MarketSortKeySortInput>;
};

export type MintWithTokenAndMarketsConnection = {
  __typename?: 'MintWithTokenAndMarketsConnection';
  nodes: Array<MintWithTokenAndMarkets>;
  pageInfo: PageInfo;
};

export type MintsQueryFilter = {
  priceFilter?: InputMaybe<PriceFilter>;
  timeFilter?: InputMaybe<TimeFilter>;
};

export type MintsQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  minterAddresses?: InputMaybe<Array<Scalars['String']>>;
  recipientAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export enum Network {
  Canto = 'CANTO'
}

export type NetworkInfo = {
  __typename?: 'NetworkInfo';
  chain: Chain;
  network: Network;
};

export type NetworkInput = {
  chain?: Chain;
  network?: Network;
};

export type OwnerCount = {
  __typename?: 'OwnerCount';
  count: Scalars['Int'];
  owner: Scalars['String'];
  tokenIds: Array<Scalars['String']>;
};

export type OwnerCountConnection = {
  __typename?: 'OwnerCountConnection';
  nodes: Array<OwnerCount>;
  pageInfo: PageInfo;
};

export type OwnersByCountQueryInput = {
  attributes?: InputMaybe<Array<AttributeFilter>>;
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  limit: Scalars['Int'];
};

export type PaginationInput = {
  after?: InputMaybe<Scalars['String']>;
  limit?: Scalars['Int'];
};

export type PriceAtTime = {
  __typename?: 'PriceAtTime';
  blockNumber: Scalars['Int'];
  chainTokenPrice?: Maybe<CurrencyAmount>;
  nativePrice: CurrencyAmount;
  usdcPrice?: Maybe<CurrencyAmount>;
};

export type PriceFilter = {
  currencyAddress?: InputMaybe<Scalars['String']>;
  maximumChainTokenPrice?: InputMaybe<Scalars['String']>;
  maximumNativePrice?: InputMaybe<Scalars['String']>;
  minimumChainTokenPrice?: InputMaybe<Scalars['String']>;
  minimumNativePrice?: InputMaybe<Scalars['String']>;
};

export type ReceivedItem = {
  __typename?: 'ReceivedItem';
  address: Scalars['String'];
  amount: Scalars['String'];
  itemType: Scalars['String'];
  price?: Maybe<PriceAtTime>;
  recipient: Scalars['String'];
  tokenId: Scalars['String'];
};

export type RootQuery = {
  __typename?: 'RootQuery';
  /** Gets the total set of NFT attributes */
  aggregateAttributes: Array<AggregateAttribute>;
  /** Gets counts, sales volume, and other statistics */
  aggregateStat: AggregateStat;
  /** NFT collection data */
  collections: CollectionConnection;
  /** Contract event information, e.g. Sales, Transfers, Mints, etc. */
  events: EventConnection;
  /** Real time data for active markets */
  market?: Maybe<ActiveMarket>;
  /** Data for specific ZORA markets, e.g. Buy Now, Auctions, Offers */
  markets: MarketWithTokenConnection;
  /** Historical minting data */
  mints: MintWithTokenAndMarketsConnection;
  /** Historical sales data from ZORA, OpenSea, LooksRare, 0x, and more */
  sales: SaleWithTokenConnection;
  /** Returns search results for a query */
  search: SearchResultConnection;
  /** Gets data on a single token */
  token?: Maybe<TokenWithFullMarketHistory>;
  /** Gets data for multiple tokens */
  tokens: TokenWithMarketsSummaryConnection;
};


export type RootQueryAggregateAttributesArgs = {
  networks?: InputMaybe<Array<NetworkInput>>;
  where: AggregateAttributesQueryInput;
};


export type RootQueryCollectionsArgs = {
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<CollectionSortKeySortInput>;
  where?: InputMaybe<CollectionsQueryInput>;
};


export type RootQueryEventsArgs = {
  filter?: InputMaybe<EventsQueryFilter>;
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<EventSortKeySortInput>;
  where?: InputMaybe<EventsQueryInput>;
};


export type RootQueryMarketArgs = {
  network?: InputMaybe<NetworkInput>;
  where: ActiveMarketQueryInput;
};


export type RootQueryMarketsArgs = {
  filter?: InputMaybe<MarketsQueryFilter>;
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<MarketSortKeySortInput>;
  where?: InputMaybe<MarketsQueryInput>;
};


export type RootQueryMintsArgs = {
  filter?: InputMaybe<MintsQueryFilter>;
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<MintSortKeySortInput>;
  where?: InputMaybe<MintsQueryInput>;
};


export type RootQuerySalesArgs = {
  filter?: InputMaybe<SalesQueryFilter>;
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SaleSortKeySortInput>;
  where?: InputMaybe<SalesQueryInput>;
};


export type RootQuerySearchArgs = {
  filter?: InputMaybe<SearchFilter>;
  pagination: SearchPaginationInput;
  query: SearchQueryInput;
};


export type RootQueryTokenArgs = {
  network?: InputMaybe<NetworkInput>;
  token: TokenInput;
};


export type RootQueryTokensArgs = {
  filter?: InputMaybe<TokensQueryFilter>;
  networks?: InputMaybe<Array<NetworkInput>>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<TokenSortInput>;
  where?: InputMaybe<TokensQueryInput>;
};

export type Sale = {
  __typename?: 'Sale';
  buyerAddress: Scalars['String'];
  collectionAddress: Scalars['String'];
  networkInfo: NetworkInfo;
  price: PriceAtTime;
  saleContractAddress?: Maybe<Scalars['String']>;
  saleType: SaleType;
  sellerAddress: Scalars['String'];
  tokenId: Scalars['String'];
  transactionInfo: TransactionInfo;
};

export enum SaleSortKey {
  ChainTokenPrice = 'CHAIN_TOKEN_PRICE',
  NativePrice = 'NATIVE_PRICE',
  None = 'NONE',
  Time = 'TIME'
}

export type SaleSortKeySortInput = {
  sortDirection: SortDirection;
  sortKey: SaleSortKey;
};

export enum SaleType {
  ZoraV3AskSale = 'ZORA_V3_ASK_SALE',
  ZoraV3ReserveAuctionSale = 'ZORA_V3_RESERVE_AUCTION_SALE'
}

export type SaleWithToken = {
  __typename?: 'SaleWithToken';
  sale: Sale;
  token?: Maybe<Token>;
};

export type SaleWithTokenConnection = {
  __typename?: 'SaleWithTokenConnection';
  nodes: Array<SaleWithToken>;
  pageInfo: PageInfo;
};

export type SalesQueryFilter = {
  priceFilter?: InputMaybe<PriceFilter>;
  saleTypes?: InputMaybe<Array<SaleType>>;
  timeFilter?: InputMaybe<TimeFilter>;
};

export type SalesQueryInput = {
  buyerAddresses?: InputMaybe<Array<Scalars['String']>>;
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  sellerAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type SalesVolume = {
  __typename?: 'SalesVolume';
  chainTokenPrice: Scalars['Float'];
  totalCount: Scalars['Int'];
  usdcPrice: Scalars['Float'];
};

export type SalesVolumeFilter = {
  saleTypes?: InputMaybe<Array<SaleType>>;
  timeFilter?: InputMaybe<TimeFilter>;
};

export type SearchFilter = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  entityType?: InputMaybe<SearchableEntity>;
};

export type SearchPaginationInput = {
  after?: InputMaybe<Scalars['String']>;
  limit?: Scalars['Int'];
};

export type SearchQueryInput = {
  text: Scalars['String'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  collectionAddress: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  entity?: Maybe<TokenCollection>;
  entityType: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  networkInfo: NetworkInfo;
  tokenId?: Maybe<Scalars['String']>;
};

export type SearchResultConnection = {
  __typename?: 'SearchResultConnection';
  nodes: Array<SearchResult>;
  pageInfo: PageInfo;
};

export enum SearchableEntity {
  Collection = 'COLLECTION',
  Token = 'TOKEN'
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SpentItem = {
  __typename?: 'SpentItem';
  address: Scalars['String'];
  amount: Scalars['String'];
  itemType: Scalars['String'];
  price?: Maybe<PriceAtTime>;
  tokenId: Scalars['String'];
};

export type TimeFilter = {
  endBlock?: InputMaybe<Scalars['Int']>;
  /** Date in YYYY-MM-DD format. Deprecating in favor of end_datetime */
  endDate?: InputMaybe<Scalars['String']>;
  endDatetime?: InputMaybe<Scalars['String']>;
  lookbackHours?: InputMaybe<Scalars['Int']>;
  startBlock?: InputMaybe<Scalars['Int']>;
  /** Date in YYYY-MM-DD format. Deprecating in favor of start_datetime */
  startDate?: InputMaybe<Scalars['String']>;
  startDatetime?: InputMaybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  attributes?: Maybe<Array<TokenAttribute>>;
  collectionAddress: Scalars['String'];
  collectionName?: Maybe<Scalars['String']>;
  content?: Maybe<TokenContentMedia>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<TokenContentMedia>;
  lastRefreshTime?: Maybe<Scalars['datetime']>;
  metadata?: Maybe<Scalars['JSONScalar']>;
  mintInfo?: Maybe<MintInfo>;
  name?: Maybe<Scalars['String']>;
  networkInfo: NetworkInfo;
  owner?: Maybe<Scalars['String']>;
  tokenContract?: Maybe<TokenContract>;
  tokenId: Scalars['String'];
  tokenUrl?: Maybe<Scalars['String']>;
  tokenUrlMimeType?: Maybe<Scalars['String']>;
};

export type TokenAttribute = {
  __typename?: 'TokenAttribute';
  displayType?: Maybe<Scalars['String']>;
  traitType?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TokenCollection = Collection | Token;

export type TokenContentMedia = {
  __typename?: 'TokenContentMedia';
  mediaEncoding?: Maybe<ImageEncodingTypesVideoEncodingTypesAudioEncodingTypesUnsupportedEncodingTypes>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TokenContract = {
  __typename?: 'TokenContract';
  chain: Scalars['Int'];
  collectionAddress: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  network: Scalars['String'];
  symbol?: Maybe<Scalars['String']>;
  totalSupply?: Maybe<Scalars['Int']>;
};

export type TokenInput = {
  address: Scalars['String'];
  tokenId: Scalars['String'];
};

export type TokenSortInput = {
  sortAxis?: InputMaybe<MarketCategory>;
  sortDirection: SortDirection;
  sortKey: TokenSortKey;
};

export enum TokenSortKey {
  ChainTokenPrice = 'CHAIN_TOKEN_PRICE',
  Minted = 'MINTED',
  NativePrice = 'NATIVE_PRICE',
  None = 'NONE',
  TimedSaleEnding = 'TIMED_SALE_ENDING',
  TokenId = 'TOKEN_ID',
  Transferred = 'TRANSFERRED'
}

export type TokenWithFullMarketHistory = {
  __typename?: 'TokenWithFullMarketHistory';
  events: Array<Event>;
  markets: Array<Market>;
  sales: Array<Sale>;
  token: Token;
};


export type TokenWithFullMarketHistoryEventsArgs = {
  filter?: InputMaybe<EventsQueryFilter>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<EventSortKeySortInput>;
};


export type TokenWithFullMarketHistoryMarketsArgs = {
  filter?: InputMaybe<MarketsQueryFilter>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<MarketSortKeySortInput>;
};


export type TokenWithFullMarketHistorySalesArgs = {
  filter?: InputMaybe<SalesQueryFilter>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SaleSortKeySortInput>;
};

export type TokenWithMarketsSummary = {
  __typename?: 'TokenWithMarketsSummary';
  events: Array<Event>;
  marketsSummary: Array<Market>;
  sales: Array<Sale>;
  token: Token;
};


export type TokenWithMarketsSummaryEventsArgs = {
  filter?: InputMaybe<EventsQueryFilter>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<EventSortKeySortInput>;
};


export type TokenWithMarketsSummarySalesArgs = {
  filter?: InputMaybe<SalesQueryFilter>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SaleSortKeySortInput>;
};

export type TokenWithMarketsSummaryConnection = {
  __typename?: 'TokenWithMarketsSummaryConnection';
  nodes: Array<TokenWithMarketsSummary>;
  pageInfo: PageInfo;
};

export type TokensQueryFilter = {
  attributeFilters?: InputMaybe<Array<AttributeFilter>>;
  marketFilters?: InputMaybe<Array<MarketTypeFilter>>;
  mediaType?: InputMaybe<MediaType>;
  priceFilter?: InputMaybe<PriceFilter>;
};

export type TokensQueryInput = {
  collectionAddresses?: InputMaybe<Array<Scalars['String']>>;
  ownerAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokens?: InputMaybe<Array<TokenInput>>;
};

export type TransactionInfo = {
  __typename?: 'TransactionInfo';
  blockNumber: Scalars['Int'];
  blockTimestamp: Scalars['datetime'];
  logIndex?: Maybe<Scalars['Int']>;
  transactionHash?: Maybe<Scalars['String']>;
};

export type TransferEvent = {
  __typename?: 'TransferEvent';
  collectionAddress: Scalars['String'];
  fromAddress: Scalars['String'];
  toAddress: Scalars['String'];
  tokenId: Scalars['String'];
};

export type UnsupportedEncodingTypes = {
  __typename?: 'UnsupportedEncodingTypes';
  original: Scalars['String'];
};

export type V3Ask = {
  __typename?: 'V3Ask';
  address: Scalars['String'];
  askCurrency: Scalars['String'];
  askPrice: PriceAtTime;
  buyer?: Maybe<Scalars['String']>;
  collectionAddress: Scalars['String'];
  finder?: Maybe<Scalars['String']>;
  findersFeeBps?: Maybe<Scalars['Int']>;
  seller: Scalars['String'];
  sellerFundsRecipient?: Maybe<Scalars['String']>;
  tokenId: Scalars['String'];
  v3AskStatus: Scalars['String'];
};

export type V3AskCanceledEventProperties = {
  __typename?: 'V3AskCanceledEventProperties';
  askCurrency: Scalars['String'];
  askPrice: Scalars['String'];
  findersFeeBps: Scalars['Int'];
  price: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
};

export type V3AskCreatedEventProperties = {
  __typename?: 'V3AskCreatedEventProperties';
  askCurrency: Scalars['String'];
  askPrice: Scalars['String'];
  findersFeeBps: Scalars['Int'];
  price: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
};

export type V3AskEvent = {
  __typename?: 'V3AskEvent';
  address: Scalars['String'];
  collectionAddress: Scalars['String'];
  properties: V3AskEventProperties;
  tokenId: Scalars['String'];
  v3AskEventType: V3AskEventType;
};

export type V3AskEventProperties = V3AskCanceledEventProperties | V3AskCreatedEventProperties | V3AskFilledEventProperties | V3AskPriceUpdatedEventProperties | V3PrivateAskEventProperties;

export enum V3AskEventType {
  V3AskCanceled = 'V3_ASK_CANCELED',
  V3AskCreated = 'V3_ASK_CREATED',
  V3AskFilled = 'V3_ASK_FILLED',
  V3AskPriceUpdated = 'V3_ASK_PRICE_UPDATED',
  V3PrivateAskCanceled = 'V3_PRIVATE_ASK_CANCELED',
  V3PrivateAskCreated = 'V3_PRIVATE_ASK_CREATED',
  V3PrivateAskFilled = 'V3_PRIVATE_ASK_FILLED',
  V3PrivateAskPriceUpdated = 'V3_PRIVATE_ASK_PRICE_UPDATED'
}

export type V3AskFilledEventProperties = {
  __typename?: 'V3AskFilledEventProperties';
  askCurrency: Scalars['String'];
  askPrice: Scalars['String'];
  buyer: Scalars['String'];
  finder: Scalars['String'];
  findersFeeBps: Scalars['Int'];
  price: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
};

export type V3AskPriceUpdatedEventProperties = {
  __typename?: 'V3AskPriceUpdatedEventProperties';
  askCurrency: Scalars['String'];
  askPrice: Scalars['String'];
  findersFeeBps: Scalars['Int'];
  price: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
};

export type V3PrivateAskEventProperties = {
  __typename?: 'V3PrivateAskEventProperties';
  askCurrency: Scalars['String'];
  askPrice: Scalars['String'];
  buyer: Scalars['String'];
  price: PriceAtTime;
  seller: Scalars['String'];
  tokenContract: Scalars['String'];
  tokenId: Scalars['String'];
};

export type V3ReserveAuction = {
  __typename?: 'V3ReserveAuction';
  address: Scalars['String'];
  collectionAddress: Scalars['String'];
  currency: Scalars['String'];
  duration: Scalars['String'];
  estimatedDurationTime?: Maybe<Scalars['datetime']>;
  extended: Scalars['Boolean'];
  finder: Scalars['String'];
  findersFeeBps: Scalars['String'];
  firstBid: Scalars['Boolean'];
  firstBidTime: Scalars['String'];
  highestBid: Scalars['String'];
  highestBidPrice?: Maybe<PriceAtTime>;
  highestBidder: Scalars['String'];
  price?: Maybe<PriceAtTime>;
  reserve: Scalars['String'];
  reservePrice: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
  startTime: Scalars['String'];
  status: Scalars['String'];
  tokenId: Scalars['String'];
};

export type V3ReserveAuctionAuctionProperties = {
  __typename?: 'V3ReserveAuctionAuctionProperties';
  currency: Scalars['String'];
  duration: Scalars['String'];
  finder: Scalars['String'];
  findersFeeBps: Scalars['String'];
  firstBidTime: Scalars['String'];
  highestBid: Scalars['String'];
  highestBidPrice: PriceAtTime;
  highestBidder: Scalars['String'];
  reserve: Scalars['String'];
  reservePrice: PriceAtTime;
  seller: Scalars['String'];
  sellerFundsRecipient: Scalars['String'];
  startTime: Scalars['String'];
};

export type V3ReserveAuctionEvent = {
  __typename?: 'V3ReserveAuctionEvent';
  address: Scalars['String'];
  collectionAddress: Scalars['String'];
  eventType: V3ReserveAuctionEventType;
  properties: V3ReserveAuctionEventProperties;
  tokenId: Scalars['String'];
};

export type V3ReserveAuctionEventProperties = V3ReserveAuctionV1AuctionBidProperties | V3ReserveAuctionV1AuctionCanceledProperties | V3ReserveAuctionV1AuctionCreatedProperties | V3ReserveAuctionV1AuctionEndedProperties | V3ReserveAuctionV1AuctionReservePriceUpdatedProperties;

export enum V3ReserveAuctionEventType {
  V3ReserveAuctionBid = 'V3_RESERVE_AUCTION_BID',
  V3ReserveAuctionCanceled = 'V3_RESERVE_AUCTION_CANCELED',
  V3ReserveAuctionCreated = 'V3_RESERVE_AUCTION_CREATED',
  V3ReserveAuctionEnded = 'V3_RESERVE_AUCTION_ENDED',
  V3ReserveAuctionReservePriceUpdated = 'V3_RESERVE_AUCTION_RESERVE_PRICE_UPDATED'
}

export type V3ReserveAuctionV1AuctionBidProperties = {
  __typename?: 'V3ReserveAuctionV1AuctionBidProperties';
  auction: V3ReserveAuctionAuctionProperties;
  extended: Scalars['Boolean'];
  firstBid: Scalars['Boolean'];
  price: PriceAtTime;
};

export type V3ReserveAuctionV1AuctionCanceledProperties = {
  __typename?: 'V3ReserveAuctionV1AuctionCanceledProperties';
  auction: V3ReserveAuctionAuctionProperties;
};

export type V3ReserveAuctionV1AuctionCreatedProperties = {
  __typename?: 'V3ReserveAuctionV1AuctionCreatedProperties';
  auction: V3ReserveAuctionAuctionProperties;
};

export type V3ReserveAuctionV1AuctionEndedProperties = {
  __typename?: 'V3ReserveAuctionV1AuctionEndedProperties';
  auction: V3ReserveAuctionAuctionProperties;
};

export type V3ReserveAuctionV1AuctionReservePriceUpdatedProperties = {
  __typename?: 'V3ReserveAuctionV1AuctionReservePriceUpdatedProperties';
  auction: V3ReserveAuctionAuctionProperties;
};

export type VideoEncodingTypes = {
  __typename?: 'VideoEncodingTypes';
  large?: Maybe<Scalars['String']>;
  original: Scalars['String'];
  poster?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export const TokenContractInfoFragmentDoc = gql`
    fragment TokenContractInfo on TokenContract {
  name
  network
  description
  collectionAddress
  symbol
  chain
}
    `;
export const PriceSummaryFragmentDoc = gql`
    fragment PriceSummary on PriceAtTime {
  blockNumber
  chainTokenPrice {
    decimal
    raw
  }
  nativePrice {
    decimal
    raw
    currency {
      address
      decimals
      name
    }
  }
  usdcPrice {
    decimal
    raw
  }
}
    `;
export const TransactionDetailsFragmentDoc = gql`
    fragment TransactionDetails on TransactionInfo {
  blockNumber
  blockTimestamp
  transactionHash
  logIndex
}
    `;
export const MintDetailsFragmentDoc = gql`
    fragment MintDetails on MintInfo {
  price {
    __typename
    ...PriceSummary
  }
  originatorAddress
  toAddress
  mintContext {
    __typename
    ...TransactionDetails
  }
}
    ${PriceSummaryFragmentDoc}
${TransactionDetailsFragmentDoc}`;
export const FullMediaFragmentDoc = gql`
    fragment FullMedia on TokenContentMedia {
  size
  url
  size
  mimeType
  mediaEncoding {
    ... on ImageEncodingTypes {
      __typename
      original
      large
      poster
      thumbnail
    }
    ... on VideoEncodingTypes {
      __typename
      original
      large
      poster
      preview
      thumbnail
    }
    ... on AudioEncodingTypes {
      __typename
      original
      large
    }
    ... on UnsupportedEncodingTypes {
      __typename
      original
    }
  }
}
    `;
export const TokenInfoFragmentDoc = gql`
    fragment TokenInfo on Token {
  __typename
  tokenId
  tokenContract {
    ...TokenContractInfo
  }
  mintInfo {
    ...MintDetails
  }
  collectionAddress
  lastRefreshTime
  owner
  name
  description
  image {
    ...FullMedia
  }
  content {
    ...FullMedia
  }
}
    ${TokenContractInfoFragmentDoc}
${MintDetailsFragmentDoc}
${FullMediaFragmentDoc}`;
export const TokenDetailsFragmentDoc = gql`
    fragment TokenDetails on Token {
  metadata
  tokenUrl
  tokenUrlMimeType
  attributes {
    traitType
    value
    displayType
  }
}
    `;
export const NetworkInfoDetailsFragmentDoc = gql`
    fragment NetworkInfoDetails on NetworkInfo {
  chain
  network
}
    `;
export const CollectionInfoFragmentDoc = gql`
    fragment CollectionInfo on Collection {
  address
  description
  name
  symbol
  totalSupply
  networkInfo {
    ...NetworkInfoDetails
  }
}
    ${NetworkInfoDetailsFragmentDoc}`;
export const CollectionInfoSearchResultFragmentDoc = gql`
    fragment CollectionInfoSearchResult on Collection {
  address
  collectionDescription: description
  name
  symbol
  totalSupply
}
    `;
export const CollectionDetailsFragmentDoc = gql`
    fragment CollectionDetails on Collection {
  networkInfo {
    ...NetworkInfoDetails
  }
  attributes {
    traitType
    valueMetrics {
      count
      percent
      value
    }
  }
}
    ${NetworkInfoDetailsFragmentDoc}`;
export const PageInfoDefaultFragmentDoc = gql`
    fragment PageInfoDefault on PageInfo {
  endCursor
  hasNextPage
  limit
}
    `;
export const OwnerCountInfoFragmentDoc = gql`
    fragment OwnerCountInfo on OwnerCount {
  owner
  count
  tokenIds
}
    `;
export const V3ReserveAuctionPropertiesFragmentDoc = gql`
    fragment V3ReserveAuctionProperties on V3ReserveAuction {
  address
  tokenId
  collectionAddress
  status
  firstBid
  extended
  price {
    __typename
    ...PriceSummary
  }
  seller
  reserve
  v3AuctionReservePrice: reservePrice {
    __typename
    ...PriceSummary
  }
  sellerFundsRecipient
  highestBid
  highestBidPrice {
    __typename
    ...PriceSummary
  }
  v3HighestBidder: highestBidder
  duration
  startTime
  v3FirstBidTime: firstBidTime
  currency
  finder
  findersFeeBps
  estimatedDurationTime
}
    ${PriceSummaryFragmentDoc}`;
export const ActiveMarketInfoFragmentDoc = gql`
    fragment ActiveMarketInfo on ActiveMarket {
  networkInfo {
    __typename
    ...NetworkInfoDetails
  }
  transactionInfo {
    __typename
    ...TransactionDetails
  }
  status
  marketAddress
  collectionAddress
  tokenId
  marketType
  properties {
    __typename
    ... on V3ReserveAuction {
      ...V3ReserveAuctionProperties
    }
  }
  price {
    __typename
    ...PriceSummary
  }
}
    ${NetworkInfoDetailsFragmentDoc}
${TransactionDetailsFragmentDoc}
${V3ReserveAuctionPropertiesFragmentDoc}
${PriceSummaryFragmentDoc}`;
export const MarketInfoFragmentDoc = gql`
    fragment MarketInfo on Market {
  collectionAddress
  marketAddress
  marketType
  transactionInfo {
    ...TransactionDetails
  }
  price {
    ...PriceSummary
  }
  status
  networkInfo {
    ...NetworkInfoDetails
  }
}
    ${TransactionDetailsFragmentDoc}
${PriceSummaryFragmentDoc}
${NetworkInfoDetailsFragmentDoc}`;
export const V3AskPropertiesFragmentDoc = gql`
    fragment V3AskProperties on V3Ask {
  __typename
  buyer
  finder
  findersFeeBps
  sellerFundsRecipient
  v3AskStatus
  seller
  address
  askCurrency
  collectionAddress
  askPrice {
    ...PriceSummary
  }
}
    ${PriceSummaryFragmentDoc}`;
export const MarketPropertiesFullFragmentDoc = gql`
    fragment MarketPropertiesFull on MarketProperties {
  __typename
  ...V3AskProperties
}
    ${V3AskPropertiesFragmentDoc}`;
export const MarketDetailsFragmentDoc = gql`
    fragment MarketDetails on Market {
  properties {
    ...MarketPropertiesFull
  }
}
    ${MarketPropertiesFullFragmentDoc}`;
export const MarketsOnMintInfoFragmentDoc = gql`
    fragment MarketsOnMintInfo on MintWithTokenAndMarkets {
  markets(pagination: {limit: 10}, sort: {sortKey: NONE, sortDirection: DESC}) {
    ...MarketInfo
    ...MarketDetails
  }
}
    ${MarketInfoFragmentDoc}
${MarketDetailsFragmentDoc}`;
export const SaleInfoFragmentDoc = gql`
    fragment SaleInfo on Sale {
  saleContractAddress
  transactionInfo {
    ...TransactionDetails
  }
  buyerAddress
  collectionAddress
  price {
    ...PriceSummary
  }
  sellerAddress
  tokenId
}
    ${TransactionDetailsFragmentDoc}
${PriceSummaryFragmentDoc}`;
export const TokensSalesInfoFragmentDoc = gql`
    fragment TokensSalesInfo on TokenWithMarketsSummary {
  sales(pagination: {limit: 10}, sort: {sortKey: TIME, sortDirection: DESC}) {
    ...SaleInfo
  }
}
    ${SaleInfoFragmentDoc}`;
export const V3AskEventPropertiesInfoFragmentDoc = gql`
    fragment V3AskEventPropertiesInfo on V3AskEventProperties {
  __typename
  ... on V3AskCreatedEventProperties {
    seller
    sellerFundsRecipient
    askCurrency
    askPrice
    findersFeeBps
    price {
      ...PriceSummary
    }
  }
  ... on V3AskCanceledEventProperties {
    seller
    sellerFundsRecipient
    askCurrency
    askPrice
    findersFeeBps
    price {
      ...PriceSummary
    }
  }
  ... on V3AskPriceUpdatedEventProperties {
    seller
    sellerFundsRecipient
    askCurrency
    askPrice
    findersFeeBps
    price {
      ...PriceSummary
    }
  }
  ... on V3AskFilledEventProperties {
    seller
    sellerFundsRecipient
    askCurrency
    askPrice
    findersFeeBps
    price {
      ...PriceSummary
    }
    finder
    buyer
  }
}
    ${PriceSummaryFragmentDoc}`;
export const EventInfoFragmentDoc = gql`
    fragment EventInfo on Event {
  transactionInfo {
    ...TransactionDetails
  }
  eventType
  collectionAddress
  tokenId
  properties {
    __typename
    ... on MintEvent {
      tokenId
      collectionAddress
      originatorAddress
      toAddress
      price {
        ...PriceSummary
      }
    }
    ... on TransferEvent {
      fromAddress
      toAddress
      collectionAddress
      tokenId
    }
    ... on V3AskEvent {
      v3AskEventType
      address
      collectionAddress
      tokenId
      properties {
        ...V3AskEventPropertiesInfo
      }
    }
  }
}
    ${TransactionDetailsFragmentDoc}
${PriceSummaryFragmentDoc}
${V3AskEventPropertiesInfoFragmentDoc}`;
export const TokensEventsInfoFragmentDoc = gql`
    fragment TokensEventsInfo on TokenWithMarketsSummary {
  events(pagination: {limit: 10}, sort: {sortKey: CREATED, sortDirection: DESC}) {
    ...EventInfo
  }
}
    ${EventInfoFragmentDoc}`;
export const TokenFullDetailsFragmentDoc = gql`
    fragment TokenFullDetails on TokenWithFullMarketHistory {
  sales(pagination: {limit: 10}, sort: {sortKey: TIME, sortDirection: DESC}) {
    ...SaleInfo @include(if: $includeFullDetails)
  }
  events(pagination: {limit: 10}, sort: {sortKey: CREATED, sortDirection: DESC}) {
    ...EventInfo
  }
}
    ${SaleInfoFragmentDoc}
${EventInfoFragmentDoc}`;
export const EventsDocument = gql`
    query events($networks: [NetworkInput!]!, $filter: EventsQueryFilter, $pagination: PaginationInput!, $sort: EventSortKeySortInput!, $where: EventsQueryInput!) {
  events(
    networks: $networks
    filter: $filter
    pagination: $pagination
    sort: $sort
    where: $where
  ) {
    __typename
    pageInfo {
      __typename
      ...PageInfoDefault
    }
    nodes {
      ...EventInfo
    }
  }
}
    ${PageInfoDefaultFragmentDoc}
${EventInfoFragmentDoc}`;
export const MarketDocument = gql`
    query market($network: NetworkInput, $where: ActiveMarketQueryInput!) {
  market(network: $network, where: $where) {
    ...ActiveMarketInfo
  }
}
    ${ActiveMarketInfoFragmentDoc}`;
export const MarketsDocument = gql`
    query markets($networks: [NetworkInput!]!, $filter: MarketsQueryFilter, $pagination: PaginationInput!, $sort: MarketSortKeySortInput!, $where: MarketsQueryInput, $includeFullDetails: Boolean!) {
  markets(
    networks: $networks
    filter: $filter
    sort: $sort
    where: $where
    pagination: $pagination
  ) {
    __typename
    pageInfo {
      endCursor
      hasNextPage
      limit
    }
    nodes {
      token {
        ...TokenInfo
        ...TokenDetails @include(if: $includeFullDetails)
      }
      market {
        ...MarketInfo
        ...MarketDetails @include(if: $includeFullDetails)
      }
    }
  }
}
    ${TokenInfoFragmentDoc}
${TokenDetailsFragmentDoc}
${MarketInfoFragmentDoc}
${MarketDetailsFragmentDoc}`;
export const MintsDocument = gql`
    query mints($networks: [NetworkInput!]!, $filter: MintsQueryFilter, $pagination: PaginationInput!, $sort: MintSortKeySortInput!, $where: MintsQueryInput, $includeFullDetails: Boolean!, $includeMarkets: Boolean!) {
  mints(
    where: $where
    networks: $networks
    filter: $filter
    pagination: $pagination
    sort: $sort
  ) {
    __typename
    pageInfo {
      endCursor
      hasNextPage
      limit
    }
    nodes {
      __typename
      mint {
        collectionAddress
        tokenId
        originatorAddress
        toAddress
        transactionInfo {
          ...TransactionDetails
        }
      }
      token {
        ...TokenInfo
        ...TokenDetails @include(if: $includeFullDetails)
      }
      ...MarketsOnMintInfo @include(if: $includeMarkets)
    }
  }
}
    ${TransactionDetailsFragmentDoc}
${TokenInfoFragmentDoc}
${TokenDetailsFragmentDoc}
${MarketsOnMintInfoFragmentDoc}`;
export const CollectionsDocument = gql`
    query collections($networks: [NetworkInput!]!, $where: CollectionsQueryInput!, $pagination: PaginationInput!, $sort: CollectionSortKeySortInput!, $includeFullDetails: Boolean!) {
  collections(
    where: $where
    networks: $networks
    pagination: $pagination
    sort: $sort
  ) {
    __typename
    pageInfo {
      endCursor
      hasNextPage
      limit
    }
    nodes {
      ...CollectionInfo
      ...CollectionDetails @include(if: $includeFullDetails)
    }
  }
}
    ${CollectionInfoFragmentDoc}
${CollectionDetailsFragmentDoc}`;
export const SalesDocument = gql`
    query sales($networks: [NetworkInput!]!, $where: SalesQueryInput!, $filter: SalesQueryFilter, $sort: SaleSortKeySortInput!, $pagination: PaginationInput!, $includeFullDetails: Boolean!) {
  sales(
    networks: $networks
    where: $where
    filter: $filter
    sort: $sort
    pagination: $pagination
  ) {
    __typename
    pageInfo {
      endCursor
      hasNextPage
      limit
    }
    nodes {
      sale {
        ...SaleInfo
      }
      token {
        ...TokenInfo
        ...TokenDetails @include(if: $includeFullDetails)
      }
    }
  }
}
    ${SaleInfoFragmentDoc}
${TokenInfoFragmentDoc}
${TokenDetailsFragmentDoc}`;
export const TokensDocument = gql`
    query tokens($networks: [NetworkInput!]!, $where: TokensQueryInput, $filter: TokensQueryFilter, $pagination: PaginationInput!, $sort: TokenSortInput!, $includeFullDetails: Boolean!, $includeSalesHistory: Boolean!) {
  tokens(
    where: $where
    networks: $networks
    pagination: $pagination
    sort: $sort
    filter: $filter
  ) {
    __typename
    pageInfo {
      endCursor
      hasNextPage
      limit
    }
    nodes {
      __typename
      marketsSummary {
        ...MarketInfo
        ...MarketDetails @include(if: $includeFullDetails)
      }
      token {
        ...TokenInfo
        ...TokenDetails @include(if: $includeFullDetails)
      }
      ...TokensSalesInfo @include(if: $includeSalesHistory)
      ...TokensEventsInfo @include(if: $includeFullDetails)
    }
  }
}
    ${MarketInfoFragmentDoc}
${MarketDetailsFragmentDoc}
${TokenInfoFragmentDoc}
${TokenDetailsFragmentDoc}
${TokensSalesInfoFragmentDoc}
${TokensEventsInfoFragmentDoc}`;
export const TokenDocument = gql`
    query token($network: NetworkInput!, $token: TokenInput!, $includeFullDetails: Boolean!) {
  token(network: $network, token: $token) {
    __typename
    token {
      __typename
      ...TokenInfo
      ...TokenDetails @include(if: $includeFullDetails)
    }
    ...TokenFullDetails @include(if: $includeFullDetails)
    markets(
      pagination: {limit: 10, after: null}
      sort: {sortKey: NONE, sortDirection: DESC}
    ) {
      ...MarketInfo
      ...MarketDetails @include(if: $includeFullDetails)
    }
  }
}
    ${TokenInfoFragmentDoc}
${TokenDetailsFragmentDoc}
${TokenFullDetailsFragmentDoc}
${MarketInfoFragmentDoc}
${MarketDetailsFragmentDoc}`;
export const AggregateAttributesDocument = gql`
    query aggregateAttributes($networks: [NetworkInput!]!, $where: AggregateAttributesQueryInput!) {
  aggregateAttributes(networks: $networks, where: $where) {
    traitType
    valueMetrics {
      value
      count
      percent
    }
  }
}
    `;
export const OwnersByCountDocument = gql`
    query ownersByCount($networks: [NetworkInput!]!, $pagination: PaginationInput!, $where: OwnersByCountQueryInput!) {
  aggregateStat {
    ownersByCount(networks: $networks, pagination: $pagination, where: $where) {
      pageInfo {
        endCursor
        hasNextPage
        limit
      }
      nodes {
        ...OwnerCountInfo
      }
    }
  }
}
    ${OwnerCountInfoFragmentDoc}`;
export const SalesVolumeDocument = gql`
    query salesVolume($networks: [NetworkInput!]!, $where: CollectionAddressOwnerAddressAttributesInput!, $filter: SalesVolumeFilter) {
  aggregateStat {
    salesVolume(where: $where, networks: $networks, filter: $filter) {
      chainTokenPrice
      usdcPrice
      totalCount
    }
  }
}
    `;
export const OwnerCountDocument = gql`
    query ownerCount($networks: [NetworkInput!]!, $where: CollectionAddressAndAttributesInput!) {
  aggregateStat {
    ownerCount(where: $where, networks: $networks)
  }
}
    `;
export const NftCountDocument = gql`
    query nftCount($networks: [NetworkInput!]!, $where: CollectionAddressOwnerAddressAttributesInput!) {
  aggregateStat {
    nftCount(where: $where, networks: $networks)
  }
}
    `;
export const FloorPriceDocument = gql`
    query floorPrice($networks: [NetworkInput!]!, $where: CollectionAddressAndAttributesInput!) {
  aggregateStat {
    floorPrice(where: $where, networks: $networks)
  }
}
    `;
export const CollectionStatsAggregateDocument = gql`
    query collectionStatsAggregate($collectionAddress: String!, $networks: [NetworkInput!]!) {
  aggregateStat {
    floorPrice(
      where: {collectionAddresses: [$collectionAddress]}
      networks: $networks
    )
    ownerCount(
      where: {collectionAddresses: [$collectionAddress]}
      networks: $networks
    )
    nftCount(
      where: {collectionAddresses: [$collectionAddress]}
      networks: $networks
    )
    salesVolume(
      where: {collectionAddresses: [$collectionAddress]}
      networks: $networks
    ) {
      chainTokenPrice
      usdcPrice
      totalCount
    }
  }
}
    `;
export const SearchDocument = gql`
    query search($pagination: SearchPaginationInput!, $query: SearchQueryInput!, $filter: SearchFilter) {
  search(pagination: $pagination, query: $query, filter: $filter) {
    __typename
    pageInfo {
      endCursor
      hasNextPage
      limit
    }
    nodes {
      name
      description
      entityType
      collectionAddress
      networkInfo {
        chain
        network
      }
      tokenId
      entity {
        __typename
        ... on Token {
          ...TokenInfo
        }
        ... on Collection {
          ...CollectionInfoSearchResult
        }
      }
    }
  }
}
    ${TokenInfoFragmentDoc}
${CollectionInfoSearchResultFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    events(variables: EventsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventsQuery>(EventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'events');
    },
    market(variables: MarketQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarketQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MarketQuery>(MarketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'market');
    },
    markets(variables: MarketsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarketsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MarketsQuery>(MarketsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'markets');
    },
    mints(variables: MintsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MintsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MintsQuery>(MintsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'mints');
    },
    collections(variables: CollectionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CollectionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CollectionsQuery>(CollectionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'collections');
    },
    sales(variables: SalesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SalesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SalesQuery>(SalesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sales');
    },
    tokens(variables: TokensQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TokensQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokensQuery>(TokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokens');
    },
    token(variables: TokenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenQuery>(TokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'token');
    },
    aggregateAttributes(variables: AggregateAttributesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AggregateAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AggregateAttributesQuery>(AggregateAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'aggregateAttributes');
    },
    ownersByCount(variables: OwnersByCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OwnersByCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OwnersByCountQuery>(OwnersByCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ownersByCount');
    },
    salesVolume(variables: SalesVolumeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SalesVolumeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SalesVolumeQuery>(SalesVolumeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'salesVolume');
    },
    ownerCount(variables: OwnerCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OwnerCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OwnerCountQuery>(OwnerCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ownerCount');
    },
    nftCount(variables: NftCountQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NftCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NftCountQuery>(NftCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'nftCount');
    },
    floorPrice(variables: FloorPriceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FloorPriceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FloorPriceQuery>(FloorPriceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'floorPrice');
    },
    collectionStatsAggregate(variables: CollectionStatsAggregateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CollectionStatsAggregateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CollectionStatsAggregateQuery>(CollectionStatsAggregateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'collectionStatsAggregate');
    },
    search(variables: SearchQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchQuery>(SearchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'search');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type TokenContractInfoFragment = { __typename?: 'TokenContract', name?: string | null, network: string, description?: string | null, collectionAddress: string, symbol?: string | null, chain: number };

export type FullMediaFragment = { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null };

export type PriceSummaryFragment = { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null };

export type MintDetailsFragment = { __typename?: 'MintInfo', originatorAddress: string, toAddress: string, price?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, mintContext: { __typename: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } };

export type TransactionDetailsFragment = { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null };

export type SaleInfoFragment = { __typename?: 'Sale', saleContractAddress?: string | null, buyerAddress: string, collectionAddress: string, sellerAddress: string, tokenId: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } };

export type V3AskPropertiesFragment = { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps?: number | null, sellerFundsRecipient?: string | null, v3AskStatus: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } };

type MarketPropertiesFull_V3Ask_Fragment = { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps?: number | null, sellerFundsRecipient?: string | null, v3AskStatus: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } };

type MarketPropertiesFull_V3ReserveAuction_Fragment = { __typename: 'V3ReserveAuction' };

export type MarketPropertiesFullFragment = MarketPropertiesFull_V3Ask_Fragment | MarketPropertiesFull_V3ReserveAuction_Fragment;

export type NetworkInfoDetailsFragment = { __typename?: 'NetworkInfo', chain: Chain, network: Network };

export type MarketInfoFragment = { __typename?: 'Market', collectionAddress?: string | null, marketAddress: string, marketType: MarketType, status: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price?: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network } };

export type MarketDetailsFragment = { __typename?: 'Market', properties?: { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps?: number | null, sellerFundsRecipient?: string | null, v3AskStatus: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3ReserveAuction' } | null };

export type TokenInfoFragment = { __typename: 'Token', tokenId: string, collectionAddress: string, lastRefreshTime?: any | null, owner?: string | null, name?: string | null, description?: string | null, tokenContract?: { __typename?: 'TokenContract', name?: string | null, network: string, description?: string | null, collectionAddress: string, symbol?: string | null, chain: number } | null, mintInfo?: { __typename?: 'MintInfo', originatorAddress: string, toAddress: string, price?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, mintContext: { __typename: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } } | null, image?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null, content?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null };

type V3AskEventPropertiesInfo_V3AskCanceledEventProperties_Fragment = { __typename: 'V3AskCanceledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } };

type V3AskEventPropertiesInfo_V3AskCreatedEventProperties_Fragment = { __typename: 'V3AskCreatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } };

type V3AskEventPropertiesInfo_V3AskFilledEventProperties_Fragment = { __typename: 'V3AskFilledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, finder: string, buyer: string, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } };

type V3AskEventPropertiesInfo_V3AskPriceUpdatedEventProperties_Fragment = { __typename: 'V3AskPriceUpdatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } };

type V3AskEventPropertiesInfo_V3PrivateAskEventProperties_Fragment = { __typename: 'V3PrivateAskEventProperties' };

export type V3AskEventPropertiesInfoFragment = V3AskEventPropertiesInfo_V3AskCanceledEventProperties_Fragment | V3AskEventPropertiesInfo_V3AskCreatedEventProperties_Fragment | V3AskEventPropertiesInfo_V3AskFilledEventProperties_Fragment | V3AskEventPropertiesInfo_V3AskPriceUpdatedEventProperties_Fragment | V3AskEventPropertiesInfo_V3PrivateAskEventProperties_Fragment;

export type EventInfoFragment = { __typename?: 'Event', eventType: EventType, collectionAddress?: string | null, tokenId?: string | null, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, properties: { __typename: 'ApprovalEvent' } | { __typename: 'MintEvent', tokenId: string, collectionAddress: string, originatorAddress: string, toAddress: string, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'Sale' } | { __typename: 'TransferEvent', fromAddress: string, toAddress: string, collectionAddress: string, tokenId: string } | { __typename: 'V3AskEvent', v3AskEventType: V3AskEventType, address: string, collectionAddress: string, tokenId: string, properties: { __typename: 'V3AskCanceledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskCreatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskFilledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, finder: string, buyer: string, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskPriceUpdatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3PrivateAskEventProperties' } } | { __typename: 'V3ReserveAuctionEvent' } };

export type TokenDetailsFragment = { __typename?: 'Token', metadata?: any | null, tokenUrl?: string | null, tokenUrlMimeType?: string | null, attributes?: Array<{ __typename?: 'TokenAttribute', traitType?: string | null, value?: string | null, displayType?: string | null }> | null };

export type CollectionInfoFragment = { __typename?: 'Collection', address: string, description: string, name?: string | null, symbol?: string | null, totalSupply?: number | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network } };

export type CollectionInfoSearchResultFragment = { __typename?: 'Collection', address: string, name?: string | null, symbol?: string | null, totalSupply?: number | null, collectionDescription: string };

export type CollectionDetailsFragment = { __typename?: 'Collection', networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network }, attributes?: Array<{ __typename?: 'CollectionAttribute', traitType?: string | null, valueMetrics: Array<{ __typename?: 'CollectionAttributeValue', count: number, percent: number, value: string }> }> | null };

export type PageInfoDefaultFragment = { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, limit: number };

export type OwnerCountInfoFragment = { __typename?: 'OwnerCount', owner: string, count: number, tokenIds: Array<string> };

export type EventsQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  filter?: InputMaybe<EventsQueryFilter>;
  pagination: PaginationInput;
  sort: EventSortKeySortInput;
  where: EventsQueryInput;
}>;


export type EventsQuery = { __typename?: 'RootQuery', events: { __typename: 'EventConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, limit: number }, nodes: Array<{ __typename?: 'Event', eventType: EventType, collectionAddress?: string | null, tokenId?: string | null, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, properties: { __typename: 'ApprovalEvent' } | { __typename: 'MintEvent', tokenId: string, collectionAddress: string, originatorAddress: string, toAddress: string, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'Sale' } | { __typename: 'TransferEvent', fromAddress: string, toAddress: string, collectionAddress: string, tokenId: string } | { __typename: 'V3AskEvent', v3AskEventType: V3AskEventType, address: string, collectionAddress: string, tokenId: string, properties: { __typename: 'V3AskCanceledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskCreatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskFilledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, finder: string, buyer: string, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskPriceUpdatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3PrivateAskEventProperties' } } | { __typename: 'V3ReserveAuctionEvent' } }> } };

export type V3ReserveAuctionPropertiesFragment = { __typename?: 'V3ReserveAuction', address: string, tokenId: string, collectionAddress: string, status: string, firstBid: boolean, extended: boolean, seller: string, reserve: string, sellerFundsRecipient: string, highestBid: string, duration: string, startTime: string, currency: string, finder: string, findersFeeBps: string, estimatedDurationTime?: any | null, v3HighestBidder: string, v3FirstBidTime: string, price?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, v3AuctionReservePrice: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, highestBidPrice?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null };

export type ActiveMarketInfoFragment = { __typename?: 'ActiveMarket', status: string, marketAddress: string, collectionAddress?: string | null, tokenId?: string | null, marketType: ActiveMarketType, networkInfo: { __typename: 'NetworkInfo', chain: Chain, network: Network }, transactionInfo: { __typename: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, properties?: { __typename: 'V3ReserveAuction', address: string, tokenId: string, collectionAddress: string, status: string, firstBid: boolean, extended: boolean, seller: string, reserve: string, sellerFundsRecipient: string, highestBid: string, duration: string, startTime: string, currency: string, finder: string, findersFeeBps: string, estimatedDurationTime?: any | null, v3HighestBidder: string, v3FirstBidTime: string, price?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, v3AuctionReservePrice: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, highestBidPrice?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null } | null, price?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null };

export type MarketQueryVariables = Exact<{
  network?: InputMaybe<NetworkInput>;
  where: ActiveMarketQueryInput;
}>;


export type MarketQuery = { __typename?: 'RootQuery', market?: { __typename?: 'ActiveMarket', status: string, marketAddress: string, collectionAddress?: string | null, tokenId?: string | null, marketType: ActiveMarketType, networkInfo: { __typename: 'NetworkInfo', chain: Chain, network: Network }, transactionInfo: { __typename: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, properties?: { __typename: 'V3ReserveAuction', address: string, tokenId: string, collectionAddress: string, status: string, firstBid: boolean, extended: boolean, seller: string, reserve: string, sellerFundsRecipient: string, highestBid: string, duration: string, startTime: string, currency: string, finder: string, findersFeeBps: string, estimatedDurationTime?: any | null, v3HighestBidder: string, v3FirstBidTime: string, price?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, v3AuctionReservePrice: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null }, highestBidPrice?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null } | null, price?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null } | null };

export type MarketsQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  filter?: InputMaybe<MarketsQueryFilter>;
  pagination: PaginationInput;
  sort: MarketSortKeySortInput;
  where?: InputMaybe<MarketsQueryInput>;
  includeFullDetails: Scalars['Boolean'];
}>;


export type MarketsQuery = { __typename?: 'RootQuery', markets: { __typename: 'MarketWithTokenConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, limit: number }, nodes: Array<{ __typename?: 'MarketWithToken', token?: { __typename: 'Token', tokenId: string, collectionAddress: string, lastRefreshTime?: any | null, owner?: string | null, name?: string | null, description?: string | null, metadata?: any | null, tokenUrl?: string | null, tokenUrlMimeType?: string | null, tokenContract?: { __typename?: 'TokenContract', name?: string | null, network: string, description?: string | null, collectionAddress: string, symbol?: string | null, chain: number } | null, mintInfo?: { __typename?: 'MintInfo', originatorAddress: string, toAddress: string, price?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, mintContext: { __typename: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } } | null, image?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null, content?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null, attributes?: Array<{ __typename?: 'TokenAttribute', traitType?: string | null, value?: string | null, displayType?: string | null }> | null } | null, market: { __typename?: 'Market', collectionAddress?: string | null, marketAddress: string, marketType: MarketType, status: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price?: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network }, properties?: { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps?: number | null, sellerFundsRecipient?: string | null, v3AskStatus: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3ReserveAuction' } | null } }> } };

export type MarketsOnMintInfoFragment = { __typename?: 'MintWithTokenAndMarkets', markets: Array<{ __typename?: 'Market', collectionAddress?: string | null, marketAddress: string, marketType: MarketType, status: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price?: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network }, properties?: { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps?: number | null, sellerFundsRecipient?: string | null, v3AskStatus: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3ReserveAuction' } | null }> };

export type MintsQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  filter?: InputMaybe<MintsQueryFilter>;
  pagination: PaginationInput;
  sort: MintSortKeySortInput;
  where?: InputMaybe<MintsQueryInput>;
  includeFullDetails: Scalars['Boolean'];
  includeMarkets: Scalars['Boolean'];
}>;


export type MintsQuery = { __typename?: 'RootQuery', mints: { __typename: 'MintWithTokenAndMarketsConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, limit: number }, nodes: Array<{ __typename: 'MintWithTokenAndMarkets', mint: { __typename?: 'Mint', collectionAddress: string, tokenId: string, originatorAddress: string, toAddress: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } }, token?: { __typename: 'Token', tokenId: string, collectionAddress: string, lastRefreshTime?: any | null, owner?: string | null, name?: string | null, description?: string | null, metadata?: any | null, tokenUrl?: string | null, tokenUrlMimeType?: string | null, tokenContract?: { __typename?: 'TokenContract', name?: string | null, network: string, description?: string | null, collectionAddress: string, symbol?: string | null, chain: number } | null, mintInfo?: { __typename?: 'MintInfo', originatorAddress: string, toAddress: string, price?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, mintContext: { __typename: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } } | null, image?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null, content?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null, attributes?: Array<{ __typename?: 'TokenAttribute', traitType?: string | null, value?: string | null, displayType?: string | null }> | null } | null, markets: Array<{ __typename?: 'Market', collectionAddress?: string | null, marketAddress: string, marketType: MarketType, status: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price?: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network }, properties?: { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps?: number | null, sellerFundsRecipient?: string | null, v3AskStatus: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3ReserveAuction' } | null }> }> } };

export type CollectionsQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where: CollectionsQueryInput;
  pagination: PaginationInput;
  sort: CollectionSortKeySortInput;
  includeFullDetails: Scalars['Boolean'];
}>;


export type CollectionsQuery = { __typename?: 'RootQuery', collections: { __typename: 'CollectionConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, limit: number }, nodes: Array<{ __typename?: 'Collection', address: string, description: string, name?: string | null, symbol?: string | null, totalSupply?: number | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network }, attributes?: Array<{ __typename?: 'CollectionAttribute', traitType?: string | null, valueMetrics: Array<{ __typename?: 'CollectionAttributeValue', count: number, percent: number, value: string }> }> | null }> } };

export type SalesQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where: SalesQueryInput;
  filter?: InputMaybe<SalesQueryFilter>;
  sort: SaleSortKeySortInput;
  pagination: PaginationInput;
  includeFullDetails: Scalars['Boolean'];
}>;


export type SalesQuery = { __typename?: 'RootQuery', sales: { __typename: 'SaleWithTokenConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, limit: number }, nodes: Array<{ __typename?: 'SaleWithToken', sale: { __typename?: 'Sale', saleContractAddress?: string | null, buyerAddress: string, collectionAddress: string, sellerAddress: string, tokenId: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } }, token?: { __typename: 'Token', tokenId: string, collectionAddress: string, lastRefreshTime?: any | null, owner?: string | null, name?: string | null, description?: string | null, metadata?: any | null, tokenUrl?: string | null, tokenUrlMimeType?: string | null, tokenContract?: { __typename?: 'TokenContract', name?: string | null, network: string, description?: string | null, collectionAddress: string, symbol?: string | null, chain: number } | null, mintInfo?: { __typename?: 'MintInfo', originatorAddress: string, toAddress: string, price?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, mintContext: { __typename: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } } | null, image?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null, content?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null, attributes?: Array<{ __typename?: 'TokenAttribute', traitType?: string | null, value?: string | null, displayType?: string | null }> | null } | null }> } };

export type TokensSalesInfoFragment = { __typename?: 'TokenWithMarketsSummary', sales: Array<{ __typename?: 'Sale', saleContractAddress?: string | null, buyerAddress: string, collectionAddress: string, sellerAddress: string, tokenId: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } }> };

export type TokensEventsInfoFragment = { __typename?: 'TokenWithMarketsSummary', events: Array<{ __typename?: 'Event', eventType: EventType, collectionAddress?: string | null, tokenId?: string | null, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, properties: { __typename: 'ApprovalEvent' } | { __typename: 'MintEvent', tokenId: string, collectionAddress: string, originatorAddress: string, toAddress: string, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'Sale' } | { __typename: 'TransferEvent', fromAddress: string, toAddress: string, collectionAddress: string, tokenId: string } | { __typename: 'V3AskEvent', v3AskEventType: V3AskEventType, address: string, collectionAddress: string, tokenId: string, properties: { __typename: 'V3AskCanceledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskCreatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskFilledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, finder: string, buyer: string, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskPriceUpdatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3PrivateAskEventProperties' } } | { __typename: 'V3ReserveAuctionEvent' } }> };

export type TokensQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where?: InputMaybe<TokensQueryInput>;
  filter?: InputMaybe<TokensQueryFilter>;
  pagination: PaginationInput;
  sort: TokenSortInput;
  includeFullDetails: Scalars['Boolean'];
  includeSalesHistory: Scalars['Boolean'];
}>;


export type TokensQuery = { __typename?: 'RootQuery', tokens: { __typename: 'TokenWithMarketsSummaryConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, limit: number }, nodes: Array<{ __typename: 'TokenWithMarketsSummary', marketsSummary: Array<{ __typename?: 'Market', collectionAddress?: string | null, marketAddress: string, marketType: MarketType, status: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price?: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network }, properties?: { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps?: number | null, sellerFundsRecipient?: string | null, v3AskStatus: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3ReserveAuction' } | null }>, token: { __typename: 'Token', tokenId: string, collectionAddress: string, lastRefreshTime?: any | null, owner?: string | null, name?: string | null, description?: string | null, metadata?: any | null, tokenUrl?: string | null, tokenUrlMimeType?: string | null, tokenContract?: { __typename?: 'TokenContract', name?: string | null, network: string, description?: string | null, collectionAddress: string, symbol?: string | null, chain: number } | null, mintInfo?: { __typename?: 'MintInfo', originatorAddress: string, toAddress: string, price?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, mintContext: { __typename: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } } | null, image?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null, content?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null, attributes?: Array<{ __typename?: 'TokenAttribute', traitType?: string | null, value?: string | null, displayType?: string | null }> | null }, sales: Array<{ __typename?: 'Sale', saleContractAddress?: string | null, buyerAddress: string, collectionAddress: string, sellerAddress: string, tokenId: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } }>, events: Array<{ __typename?: 'Event', eventType: EventType, collectionAddress?: string | null, tokenId?: string | null, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, properties: { __typename: 'ApprovalEvent' } | { __typename: 'MintEvent', tokenId: string, collectionAddress: string, originatorAddress: string, toAddress: string, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'Sale' } | { __typename: 'TransferEvent', fromAddress: string, toAddress: string, collectionAddress: string, tokenId: string } | { __typename: 'V3AskEvent', v3AskEventType: V3AskEventType, address: string, collectionAddress: string, tokenId: string, properties: { __typename: 'V3AskCanceledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskCreatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskFilledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, finder: string, buyer: string, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskPriceUpdatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3PrivateAskEventProperties' } } | { __typename: 'V3ReserveAuctionEvent' } }> }> } };

export type TokenFullDetailsFragment = { __typename?: 'TokenWithFullMarketHistory', sales: Array<{ __typename?: 'Sale', saleContractAddress?: string | null, buyerAddress: string, collectionAddress: string, sellerAddress: string, tokenId: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } }>, events: Array<{ __typename?: 'Event', eventType: EventType, collectionAddress?: string | null, tokenId?: string | null, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, properties: { __typename: 'ApprovalEvent' } | { __typename: 'MintEvent', tokenId: string, collectionAddress: string, originatorAddress: string, toAddress: string, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'Sale' } | { __typename: 'TransferEvent', fromAddress: string, toAddress: string, collectionAddress: string, tokenId: string } | { __typename: 'V3AskEvent', v3AskEventType: V3AskEventType, address: string, collectionAddress: string, tokenId: string, properties: { __typename: 'V3AskCanceledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskCreatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskFilledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, finder: string, buyer: string, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskPriceUpdatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3PrivateAskEventProperties' } } | { __typename: 'V3ReserveAuctionEvent' } }> };

export type TokenQueryVariables = Exact<{
  network: NetworkInput;
  token: TokenInput;
  includeFullDetails: Scalars['Boolean'];
}>;


export type TokenQuery = { __typename?: 'RootQuery', token?: { __typename: 'TokenWithFullMarketHistory', token: { __typename: 'Token', tokenId: string, collectionAddress: string, lastRefreshTime?: any | null, owner?: string | null, name?: string | null, description?: string | null, metadata?: any | null, tokenUrl?: string | null, tokenUrlMimeType?: string | null, tokenContract?: { __typename?: 'TokenContract', name?: string | null, network: string, description?: string | null, collectionAddress: string, symbol?: string | null, chain: number } | null, mintInfo?: { __typename?: 'MintInfo', originatorAddress: string, toAddress: string, price?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, mintContext: { __typename: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } } | null, image?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null, content?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null, attributes?: Array<{ __typename?: 'TokenAttribute', traitType?: string | null, value?: string | null, displayType?: string | null }> | null }, markets: Array<{ __typename?: 'Market', collectionAddress?: string | null, marketAddress: string, marketType: MarketType, status: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price?: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network }, properties?: { __typename: 'V3Ask', buyer?: string | null, finder?: string | null, findersFeeBps?: number | null, sellerFundsRecipient?: string | null, v3AskStatus: string, seller: string, address: string, askCurrency: string, collectionAddress: string, askPrice: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3ReserveAuction' } | null }>, sales: Array<{ __typename?: 'Sale', saleContractAddress?: string | null, buyerAddress: string, collectionAddress: string, sellerAddress: string, tokenId: string, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } }>, events: Array<{ __typename?: 'Event', eventType: EventType, collectionAddress?: string | null, tokenId?: string | null, transactionInfo: { __typename?: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null }, properties: { __typename: 'ApprovalEvent' } | { __typename: 'MintEvent', tokenId: string, collectionAddress: string, originatorAddress: string, toAddress: string, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'Sale' } | { __typename: 'TransferEvent', fromAddress: string, toAddress: string, collectionAddress: string, tokenId: string } | { __typename: 'V3AskEvent', v3AskEventType: V3AskEventType, address: string, collectionAddress: string, tokenId: string, properties: { __typename: 'V3AskCanceledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskCreatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskFilledEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, finder: string, buyer: string, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3AskPriceUpdatedEventProperties', seller: string, sellerFundsRecipient: string, askCurrency: string, askPrice: string, findersFeeBps: number, price: { __typename?: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } } | { __typename: 'V3PrivateAskEventProperties' } } | { __typename: 'V3ReserveAuctionEvent' } }> } | null };

export type AggregateAttributesQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where: AggregateAttributesQueryInput;
}>;


export type AggregateAttributesQuery = { __typename?: 'RootQuery', aggregateAttributes: Array<{ __typename?: 'AggregateAttribute', traitType: string, valueMetrics: Array<{ __typename?: 'AggregateAttributeValue', value: string, count: number, percent: number }> }> };

export type OwnersByCountQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  pagination: PaginationInput;
  where: OwnersByCountQueryInput;
}>;


export type OwnersByCountQuery = { __typename?: 'RootQuery', aggregateStat: { __typename?: 'AggregateStat', ownersByCount: { __typename?: 'OwnerCountConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, limit: number }, nodes: Array<{ __typename?: 'OwnerCount', owner: string, count: number, tokenIds: Array<string> }> } } };

export type SalesVolumeQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where: CollectionAddressOwnerAddressAttributesInput;
  filter?: InputMaybe<SalesVolumeFilter>;
}>;


export type SalesVolumeQuery = { __typename?: 'RootQuery', aggregateStat: { __typename?: 'AggregateStat', salesVolume: { __typename?: 'SalesVolume', chainTokenPrice: number, usdcPrice: number, totalCount: number } } };

export type OwnerCountQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where: CollectionAddressAndAttributesInput;
}>;


export type OwnerCountQuery = { __typename?: 'RootQuery', aggregateStat: { __typename?: 'AggregateStat', ownerCount: number } };

export type NftCountQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where: CollectionAddressOwnerAddressAttributesInput;
}>;


export type NftCountQuery = { __typename?: 'RootQuery', aggregateStat: { __typename?: 'AggregateStat', nftCount: number } };

export type FloorPriceQueryVariables = Exact<{
  networks: Array<NetworkInput> | NetworkInput;
  where: CollectionAddressAndAttributesInput;
}>;


export type FloorPriceQuery = { __typename?: 'RootQuery', aggregateStat: { __typename?: 'AggregateStat', floorPrice?: number | null } };

export type CollectionStatsAggregateQueryVariables = Exact<{
  collectionAddress: Scalars['String'];
  networks: Array<NetworkInput> | NetworkInput;
}>;


export type CollectionStatsAggregateQuery = { __typename?: 'RootQuery', aggregateStat: { __typename?: 'AggregateStat', floorPrice?: number | null, ownerCount: number, nftCount: number, salesVolume: { __typename?: 'SalesVolume', chainTokenPrice: number, usdcPrice: number, totalCount: number } } };

export type SearchQueryVariables = Exact<{
  pagination: SearchPaginationInput;
  query: SearchQueryInput;
  filter?: InputMaybe<SearchFilter>;
}>;


export type SearchQuery = { __typename?: 'RootQuery', search: { __typename: 'SearchResultConnection', pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, limit: number }, nodes: Array<{ __typename?: 'SearchResult', name?: string | null, description?: string | null, entityType: string, collectionAddress: string, tokenId?: string | null, networkInfo: { __typename?: 'NetworkInfo', chain: Chain, network: Network }, entity?: { __typename: 'Collection', address: string, name?: string | null, symbol?: string | null, totalSupply?: number | null, collectionDescription: string } | { __typename: 'Token', tokenId: string, collectionAddress: string, lastRefreshTime?: any | null, owner?: string | null, name?: string | null, description?: string | null, tokenContract?: { __typename?: 'TokenContract', name?: string | null, network: string, description?: string | null, collectionAddress: string, symbol?: string | null, chain: number } | null, mintInfo?: { __typename?: 'MintInfo', originatorAddress: string, toAddress: string, price?: { __typename: 'PriceAtTime', blockNumber: number, chainTokenPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null, nativePrice: { __typename?: 'CurrencyAmount', decimal: number, raw: string, currency: { __typename?: 'Currency', address: string, decimals: number, name: string } }, usdcPrice?: { __typename?: 'CurrencyAmount', decimal: number, raw: string } | null } | null, mintContext: { __typename: 'TransactionInfo', blockNumber: number, blockTimestamp: any, transactionHash?: string | null, logIndex?: number | null } } | null, image?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null, content?: { __typename?: 'TokenContentMedia', size?: string | null, url?: string | null, mimeType?: string | null, mediaEncoding?: { __typename: 'AudioEncodingTypes', original: string, large?: string | null } | { __typename: 'ImageEncodingTypes', original: string, large?: string | null, poster?: string | null, thumbnail?: string | null } | { __typename: 'UnsupportedEncodingTypes', original: string } | { __typename: 'VideoEncodingTypes', original: string, large?: string | null, poster?: string | null, preview?: string | null, thumbnail?: string | null } | null } | null } | null }> } };
