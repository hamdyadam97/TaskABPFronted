import { mapEnumToOptions } from '@abp/ng.core';

export enum LitigationDegreeEnum {
  Low = 0,
  Medium = 1,
  High = 2,
}

export const litigationDegreeEnumOptions = mapEnumToOptions(LitigationDegreeEnum);
