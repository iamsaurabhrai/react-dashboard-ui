interface CardItem {
  title: string;
  closeDate: string;
  avatar: string;
}

export interface CardData {
  title: string;
  count: number;
  total: number;
  items: CardItem[];
}
