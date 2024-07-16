import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CaseDto, CreateUpdateCaseDto } from '../dto-case/models';

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  apiName = 'Default';
  

  create = (input: CreateUpdateCaseDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CaseDto>({
      method: 'POST',
      url: '/api/app/case',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/case/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CaseDto>({
      method: 'GET',
      url: `/api/app/case/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CaseDto>>({
      method: 'GET',
      url: '/api/app/case',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateCaseDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CaseDto>({
      method: 'PUT',
      url: `/api/app/case/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
