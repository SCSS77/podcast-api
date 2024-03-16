interface Icon {
  label: string;
}

interface IAuthor {
  name: Icon;
  uri: Icon;
}

interface IAttributes {
  'im:id': string;
  term: PurpleLabel;
  scheme: string;
  label: PurpleLabel;
}

interface ICategory {
  attributes: IAttributes;
}

interface IdAttributes {
  'im:id': string;
}

interface Id {
  label: string;
  attributes: IdAttributes;
}

interface IArtistAttributes {
  href: string;
}

interface IArtist {
  label: string;
  attributes?: IArtistAttributes;
}

interface ITypeAttributes {
  term: FluffyLabel;
  label: FluffyLabel;
}

interface IType {
  attributes: ITypeAttributes;
}

interface ImageAttributes {
  height: string;
}

interface Image {
  label: string;
  attributes: ImageAttributes;
}

interface IPriceAttributes {
  amount: string;
  currency: Currency;
}

interface IPrice {
  label: IPriceLabel;
  attributes: IPriceAttributes;
}

interface IReleaseDate {
  label: Date;
  attributes: Icon;
}

interface LinkAttributes {
  rel: Rel;
  type?: Type;
  href: string;
}

interface Link {
  attributes: LinkAttributes;
}

interface Entry {
  'im:name': Icon;
  'im:image': Image[];
  summary: Icon;
  'im:price': IPrice;
  'im:contentType': IType;
  rights?: Icon;
  title: Icon;
  link: Link;
  id: Id;
  'im:artist': IArtist;
  category: ICategory;
  'im:releaseDate': IReleaseDate;
}

interface PodcastProps {
  id: string;
  title: string;
  author: string;
  image: string;
}

interface GenreClass {
  id: string;
  name: PrimaryGenreNameEnum;
 }

interface Feed {
  author: IAuthor;
  entry: Entry[];
  updated: Icon;
  rights: Icon;
  title: Icon;
  icon: Icon;
  link: Link[];
  id: Icon;
}

interface Podcast {
  feed: Feed;
}

interface Result {
  artistId?: number;
  artistIds?: number[];
  artistName?: string;
  artistViewUrl: string;
  artworkUrl100?: string;
  artworkUrl160?: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl600: string;
  closedCaptioning?: ClosedCaptioning;
  collectionCensoredName?: Name;
  collectionExplicitness?: string;
  collectionHdPrice?: number;
  collectionId: number;
  collectionName: Name;
  collectionPrice?: number;
  collectionViewUrl: string;
  contentAdvisoryRating: ContentAdvisoryRating;
  country: Country;
  currency?: string;
  description?: string;
  episodeContentType?: EpisodeContentType;
  episodeFileExtension?: EpisodeFileExtension;
  episodeGuid?: string;
  episodeUrl?: string;
  feedUrl: string;
  genreIds?: string[];
  genres: Array<GenreClass | string>;
  kind: Kind;
  previewUrl?: string;
  primaryGenreName?: PrimaryGenreNameEnum;
  releaseDate: Date;
  shortDescription?: string;
  trackCensoredName?: Name;
  trackCount?: number;
  trackExplicitness?: string;
  trackId: number;
  trackName: string;
  trackPrice?: number;
  trackTimeMillis?: number;
  trackViewUrl: string;
  wrapperType: WrapperType;
}

interface PodcastDetail {
  resultCount: number;
  results: Result[];
}

interface PodcastDetailPros {
  type: string;
  author?: string;
  episodes?: number;
  image: string;
  release: Date;
  title: string;
  duration?: number;
  description?: string;
  id?: string;
  mediaType?: string;
  episodeUrl?: string;
}

interface LoadingContextProps {
  loading: boolean;
  setLoadingState: (isLoading: boolean) => void;
}

export {
  Icon,
  IAuthor,
  IAttributes,
  ICategory,
  IdAttributes,
  Id,
  IArtistAttributes,
  IArtist,
  ITypeAttributes,
  IType,
  ImageAttributes,
  Image,
  IPriceAttributes,
  IPrice,
  IReleaseDate,
  LinkAttributes,
  Link,
  Entry,
  PodcastProps,
  GenreClass,
  Feed,
  Podcast,
  Result,
  PodcastDetail,
  PodcastDetailPros,
  LoadingContextProps
}
