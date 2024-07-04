import { PaginationParams } from '@/core/repositories/pagination-params'
import { Question } from '../../enterprise/entities/quesiton'

export abstract class QuestionsRepository {
  abstract findBySlug(slug: string): Promise<Question | null>
  abstract findById(id: string): Promise<Question | null>
  abstract findManyRecent(params: PaginationParams): Promise<Question[]>
  abstract create(question: Question): Promise<void>
  abstract save(question: Question): Promise<void>
  abstract delete(question: Question): Promise<void>
}
