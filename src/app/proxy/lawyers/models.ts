import type { CaseDto, CreateUpdateCaseDto } from '../dto-case/models';
import type { EntityDto } from '@abp/ng.core';

export interface CreateUpdateLawyerDto {
  name?: string;
  position?: string;
  mobile?: string;
  address?: string;
  cases: CreateUpdateCaseDto[];
}

export interface LawyerDto extends EntityDto<string> {
  name?: string;
  position?: string;
  mobile?: string;
  address?: string;
  cases: CaseDto[];
}
