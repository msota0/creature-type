from pydantic import BaseModel
from typing import List, Optional


class QuizAnswerCreate(BaseModel):
    question_index: int
    question_prompt: str
    selected_option: str
    selected_creature: str


class QuizAttemptCreate(BaseModel):
    quiz_name: str
    session_id: str
    result_creature: str
    completion_time_seconds: Optional[int] = None
    answers: List[QuizAnswerCreate]


class QuizAnswerResponse(BaseModel):
    id: int
    question_index: int
    question_prompt: str
    selected_option: str
    selected_creature: str

    class Config:
        from_attributes = True


class QuizAttemptResponse(BaseModel):
    id: int
    quiz_name: str
    session_id: str
    result_creature: str
    completion_time_seconds: Optional[int]
    answers: List[QuizAnswerResponse]

    class Config:
        from_attributes = True