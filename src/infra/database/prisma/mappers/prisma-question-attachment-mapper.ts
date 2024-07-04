import { Attachment as PrismaAttachment } from '@prisma/client'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachemnt'

export class PrismaQuestionAttachmentAttachmentMapper {
  static toDomain(raw: PrismaAttachment): QuestionAttachment {
    if (!raw.questionId) {
      throw new Error('Invalid attachment type.')
    }

    return QuestionAttachment.create(
      {
        attachmentId: new UniqueEntityID(raw.id),
        questionId: new UniqueEntityID(raw.questionId),
      },
      new UniqueEntityID(raw.id),
    )
  }
}
