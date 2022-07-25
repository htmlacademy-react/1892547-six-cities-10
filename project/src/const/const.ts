export const MAX_RATING = 5;
export const LIMIT_IMAGE = 6;
export const MAX_NEAR_OFFERS = 3;
export const URL_MARKER_DEFAULT = 'img/pin.svg';
// export const URL_MARKER_ACTIVE = 'img/pin-active.svg';

export const TileLayerSettings = {
  Url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution:`&copy; <a href="https://www.openstreetmap.org/copyright">
  OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
} as const;

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Room: '/offer/:id',
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export const CardClassNames = {
  Sities: 'cities__card  place-card',
  Favorites: 'favorites__card place-card',
  NearPlaces: 'near-places__card place-card'
} as const;

export const HumanDateOptions = {
  year: 'numeric',
  month: 'long'
} as const;

export const rating: readonly [number, number, number, number, number] = [5, 4, 3, 2, 1];

type RatingTitlesType = {
  [key: number]: string
}

export const RatingTitles: RatingTitlesType = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect'
} as const;


export const FavoriteIconSizes = {
  big: {
    width: 31,
    height: 33
  },
  small: {
    width: 18,
    height: 19
  }
} as const;

export const ImageSize = {
  big: {
    width: 260,
    height: 200
  },
  small: {
    width: 150,
    height: 100
  }
} as const;


export const PremiumMarkClassNames = {
  PLACE: 'place-card',
  PROPERTY: 'property'
} as const;

export const ProMarkClassNames = {
  REVIEW: 'reviews',
  PROPERTY: 'property'
} as const;

export const MapClassNames = {
  CITIES: 'cities',
  PROPERTY: 'property'
} as const;
