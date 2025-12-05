import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  defFunc(): string {
    return 'Tags api has been hit';
  }
}
