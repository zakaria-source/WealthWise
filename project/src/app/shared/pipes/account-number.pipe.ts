import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountNumber',
  standalone: true
})
export class AccountNumberPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    // Format: XXXX XXXX XXXX 1234
    return value.replace(/(\d{4})/g, '$1 ').trim();
  }
}