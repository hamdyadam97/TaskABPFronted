import { ListService, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CaseService } from '@proxy/cases';
import { CaseDto } from '@proxy/dto-case';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrl: './case.component.scss',
  providers: [ListService],
})
export class CaseComponent {

  case = { items: [], totalCount: 0 } as PagedResultDto<CaseDto>;

  form: FormGroup; // add this line

  // add bookTypes as a list of BookType enum members


  isModalOpen = false; // add this line

  constructor(public readonly list: ListService, private bookService: CaseService,  private fb: FormBuilder,private confirmation: ConfirmationService  ) {}

  ngOnInit() {
    const lawyerStreamCreator = (query) => this.bookService.getList(query);

    this.list.hookToQuery(lawyerStreamCreator).subscribe((response) => {
      this.case = response;
    });

   
  }
  selectedLawyer = {} as CaseDto;
  createLawyer() {
    this.selectedLawyer = {} as CaseDto; 
    this.buildForm();
    this.isModalOpen = true;
  }

  editLawyer(id: string) {
    this.bookService.get(id).subscribe((book) => {
      this.selectedLawyer = book;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      number: ['', Validators.required],
      year: [null, Validators.required],
      litigationDegree: [null, Validators.required],
      finalVerdict: [null, Validators.required],
    });
  }

  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.bookService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const request = this.selectedLawyer.id
      ? this.bookService.update(this.selectedLawyer.id, this.form.value)
      : this.bookService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }
}
