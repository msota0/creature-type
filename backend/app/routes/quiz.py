from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import Response
from sqlalchemy.orm import Session
from ..db import get_db
from ..schemas import QuizAttemptCreate, QuizAttemptResponse
from ..crud import create_quiz_attempt
from ..story_generator import generate_story_png
from ..story_art import CREATURES_META

router = APIRouter(prefix="/quiz-attempts", tags=["quiz"])


@router.post("/", response_model=QuizAttemptResponse)
def submit_quiz_attempt(payload: QuizAttemptCreate, db: Session = Depends(get_db)):
    return create_quiz_attempt(db, payload)


# NEW: story image endpoint
@router.get("/story/{creature_key}")
def get_story_image(creature_key: str):
    if creature_key not in CREATURES_META:
        raise HTTPException(status_code=404, detail="Creature not found")
    
    png_bytes = generate_story_png(creature_key)
    return Response(
        content=png_bytes,
        media_type="image/png",
        headers={
            "Cache-Control": "public, max-age=86400",  # cache for 24h
        },
    )