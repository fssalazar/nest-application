import { Either, right } from '@/core/either'
import { QuestionCommentsRepository } from '../repositories/question-comments-repository'
import { Injectable } from '@nestjs/common'
import { CommentWithAuthor } from '../../enterprise/entities/value-objects/comment-with-author'

interface FetchQuestionCommentssUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionCommentssUseCaseResponse = Either<
  null,
  {
    comments: CommentWithAuthor[]
  }
>

@Injectable()
export class FetchQuestionCommentsUseCase {
  constructor(private questionCommentRepository: QuestionCommentsRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionCommentssUseCaseRequest): Promise<FetchQuestionCommentssUseCaseResponse> {
    const comments =
      await this.questionCommentRepository.findManyByQuestionIdWithAuthor(
        questionId,
        {
          page,
        },
      )

    return right({
      comments,
    })
  }
}
