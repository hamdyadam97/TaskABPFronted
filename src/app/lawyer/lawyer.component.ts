import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { LawyerService } from '@proxy/lawyer-app-service';
import { LawyerDto } from '@proxy/lawyers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrl: './lawyer.component.scss',
  providers: [ListService],
})
export class LawyerComponent implements OnInit {

  lawyer = { items: [], totalCount: 0 } as PagedResultDto<LawyerDto>;

  form: FormGroup; // add this line

  // add bookTypes as a list of BookType enum members


  isModalOpen = false; // add this line

  constructor(public readonly list: ListService, private bookService: LawyerService,  private fb: FormBuilder,private confirmation: ConfirmationService  ) {}

  ngOnInit() {
    const lawyerStreamCreator = (query) => this.bookService.getList(query);

    this.list.hookToQuery(lawyerStreamCreator).subscribe((response) => {
      this.lawyer = response;
    });

   
  }
  selectedLawyer = {} as LawyerDto;
  createLawyer() {
    this.selectedLawyer = {} as LawyerDto; 
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
      name: ['', Validators.required],
      position: [null, Validators.required],
      mobile: [null, Validators.required],
      address: [null, Validators.required],
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
