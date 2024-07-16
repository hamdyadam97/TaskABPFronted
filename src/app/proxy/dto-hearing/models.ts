import type { EntityDto } from '@abp/ng.core';

export interface CreateUpdateHearingDto {
  date?: string;
  decision?: string;
}

export interface HearingDto extends EntityDto<string> {
  date?: string;
  decision?: string;
  caseId?: string;
}
