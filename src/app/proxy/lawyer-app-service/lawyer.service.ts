import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateUpdateLawyerDto, LawyerDto } from '../lawyers/models';

@Injectable({
  providedIn: 'root',
})
export class LawyerService {
  apiName = 'Default';
  

  create = (input: CreateUpdateLawyerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LawyerDto>({
      method: 'POST',
      url: '/api/app/lawyer',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/lawyer/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LawyerDto>({
      method: 'GET',
      url: `/api/app/lawyer/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LawyerDto>>({
      method: 'GET',
      url: '/api/app/lawyer',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateLawyerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LawyerDto>({
      method: 'PUT',
      url: `/api/app/lawyer/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
