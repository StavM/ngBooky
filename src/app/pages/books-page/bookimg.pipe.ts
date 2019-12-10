/* book img pipe
 * returns either the supplied url or a placeholder img url, if supplied one is not valid.
 * this pipe is used to supply a placeholder image, for when fetching google api book results
 * that don't have preview thumbnails.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const DEFAULT_IMG = environment.books.results.defaultImage;

@Pipe({
  name: 'bookimg'
})
export class BookImagePipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      const urlExists = !!value;
      const urlIsNotEmpty = value.trim().length > 0;

      if (urlExists && urlIsNotEmpty) {
        return value;
      }
    }
    return DEFAULT_IMG;
  }
}



