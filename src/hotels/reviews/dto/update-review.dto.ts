import { PartialType } from '@nestjs/swagger';
import { CreateReviewDto } from './create-review.dto';
export class UpdateReviewDto extends PartialType(CreateReviewDto) {
  hotelId: number;
  userId: number;
  ratingId: number;
  comment: string;
}
