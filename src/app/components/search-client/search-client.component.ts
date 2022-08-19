import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { IClient } from 'src/app/interfaces/iclient';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss']
})
export class SearchClientComponent implements OnInit {

  public form: FormGroup;
  public client: IClient | undefined;
  public httpErrorResponse: HttpErrorResponse | undefined;

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder
  ) {

    //Form
    this.form = this.formBuilder.group({
      typedni: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.pattern('[0-9]+'), this.validateLength]]
    });
  }

  ngOnInit(): void {
  }

  /**
   * Validate length
   * @param control Control
   * @returns ValidationErrors
   */
  validateLength(control: AbstractControl): ValidationErrors | null {
    try {
      let s: string = (<string>control.value).toString();
      if (s.length < 8 || s.length > 11) {
        return { required: true };
      }
      return null;
    } catch {
      return null;
    }
  }

  /**
   * Find Client
   */
  findByTypeDni(typedni: string, dni: number) {

    //Subscribe of find client
    this.clientService.findByTypeDni(typedni.trim(), dni)
      .subscribe({
        next: (c: IClient) => {
          this.client = c;
          this.httpErrorResponse = undefined;
        },
        error: (e: HttpErrorResponse) => {
          this.httpErrorResponse = e;
        }
      })
  }

  /**
   * Search Client
   * @param e Event
   */
  search(e: Event) {
    e.preventDefault();

    // Get data form
    let typedni: string = this.form.get('typedni')!.value;
    let dni: number = this.form.get('dni')!.value;

    // Search
    this.findByTypeDni(typedni, dni);

  }

  /**
   * Back
   */
  onBack() {
    this.client = undefined;
  }

}
