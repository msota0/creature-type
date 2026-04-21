from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .db import Base, engine
from .routes.quiz import router as quiz_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Library Creature Quiz API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(quiz_router)


@app.get("/")
def root():
    return {"message": "Library Creature Quiz API is running"}