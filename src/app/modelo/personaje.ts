export type Image ={
  image : string;

}
export type Wand = {
  wood : string;
  core : string;
  lenght: number;
}

export interface Personaje {
  name :  string;
  specie : string;
  gender : string;
  house : string;
  yearOfBirth : number;
  image : Image;
  varitas : Array<Wand>
}
