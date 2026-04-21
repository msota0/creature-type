from sqlalchemy.orm import Session
from . import models, schemas


def create_quiz_attempt(db: Session, payload: schemas.QuizAttemptCreate):
    attempt = models.QuizAttempt(
        quiz_name=payload.quiz_name,
        session_id=payload.session_id,
        result_creature=payload.result_creature,
        completion_time_seconds=payload.completion_time_seconds,
    )

    for answer in payload.answers:
        attempt.answers.append(
            models.QuizAnswer(
                question_index=answer.question_index,
                question_prompt=answer.question_prompt,
                selected_option=answer.selected_option,
                selected_creature=answer.selected_creature,
            )
        )

    db.add(attempt)
    db.commit()
    db.refresh(attempt)
    return attempt