from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..db import get_db
from ..schemas import QuizAttemptCreate, QuizAttemptResponse
from ..crud import create_quiz_attempt

router = APIRouter(prefix="/quiz-attempts", tags=["quiz"])


@router.post("/", response_model=QuizAttemptResponse)
def submit_quiz_attempt(payload: QuizAttemptCreate, db: Session = Depends(get_db)):
    return create_quiz_attempt(db, payload)