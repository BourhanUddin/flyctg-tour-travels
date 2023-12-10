interface ITour {
  name: string;
  durationHours: number;
  ratingAverage: number;
  place: number;
  imageCover: string;
  images: string[];
  createdAt: Date;
  startDates: Date[];
  startLocation: string;
  locations: string[];
  slug: string;
}

export { ITour };
