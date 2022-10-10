export type Info = {
  name: string;
  url: string;
}

export interface ResultadoPeticion {
  count : number;
  next?: string;
  precious?:string;
  results : Array<Info>
}

