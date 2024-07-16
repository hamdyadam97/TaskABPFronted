import type { EntityDto } from '@abp/ng.core';
import type { LitigationDegreeEnum } from '../enums/litigation-degree-enum.enum';

import type { CreateUpdateHearingDto, HearingDto } from '../dto-hearing/models';

export interface CaseDto extends EntityDto<string> {
  number: number;
  year: number;
  litigationDegree: LitigationDegreeEnum;
  finalVerdict?: string;
  LawyerId: string;
}

export interface CreateUpdateCaseDto {
  number: number;
  year: number;
  litigationDegree: LitigationDegreeEnum;
  finalVerdict?: string;
  hearings: CreateUpdateHearingDto[];
}
