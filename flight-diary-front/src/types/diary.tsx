export interface DiaryEntry {
  date: string
  weather: Weather
  visibility: Visibility
  comment?: string
}

export enum Visibility {
  great = "great",
  good = "good",
  ok = "ok",
  poor = "poor",
}

export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Stormy = "stormy",
  Windy = "windy",
}
