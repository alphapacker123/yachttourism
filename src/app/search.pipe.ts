import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productArray: any[], filterString: string, destination: string): any {

    const result: any = []
    if ( filterString == '' ) {

      return productArray
    } else {

      productArray.forEach((item: any) => {
        if (item[destination].trim().toLowerCase()
          .includes(filterString.trim().toLowerCase())) {


            result.push(item)
        }
      })


      return result
    }

  }
}