export enum Tenue {
  A,
  B,
  C,
  Sport,
  Zivil,
}

export enum Packung {
  GTE,
  Weapon,
  KaRuSa,
  TaRuSa,
  EffTasche,
}

export interface Treffpunkt {
  time: Date;
  place: string;
  tenue?: Tenue;
  packung?: Packung[];
  message?: string;
}
