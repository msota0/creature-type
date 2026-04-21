from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .db import Base


class QuizAttempt(Base):
    __tablename__ = "quiz_attempts"

    id = Column(Integer, primary_key=True, index=True)
    quiz_name = Column(String, nullable=False)
    session_id = Column(String, nullable=False, index=True)
    result_creature = Column(String, nullable=False, index=True)
    completion_time_seconds = Column(Integer, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    answers = relationship(
        "QuizAnswer",
        back_populates="attempt",
        cascade="all, delete-orphan"
    )


class QuizAnswer(Base):
    __tablename__ = "quiz_answers"

    id = Column(Integer, primary_key=True, index=True)
    attempt_id = Column(Integer, ForeignKey("quiz_attempts.id", ondelete="CASCADE"))
    question_index = Column(Integer, nullable=False)
    question_prompt = Column(String, nullable=False)
    selected_option = Column(String, nullable=False)
    selected_creature = Column(String, nullable=False)

    attempt = relationship("QuizAttempt", back_populates="answers")