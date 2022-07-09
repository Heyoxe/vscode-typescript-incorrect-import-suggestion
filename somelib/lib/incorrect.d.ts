import { MY_PROPERTY, MY_VALUE } from '../helper/incorrect';

export declare class WithProperty {
  [MY_PROPERTY]: string;
}

export declare class WithValue {
  myProperty: typeof MY_VALUE;
}

export declare class WithNothing {
  mValue: string;
}
