import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";

@Pipe({
    name:'convertToSpaces'
})
export class ConvertSpacesToPipe implements PipeTransform{
    transform(value:string,character:string): string {
        return value.replace(character, ' ');
    }

} 