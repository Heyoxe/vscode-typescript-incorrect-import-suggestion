import { MY_PROPERTY, MY_VALUE } from '../helper/incorrect';

export class WithProperty {
  [MY_PROPERTY] = '';
}

export class WithValue {
  myProperty = MY_VALUE;
}

export class WithNothing {
  mValue = '';
}
