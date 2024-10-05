from pydantic import BaseModel
from typing import List

# Pydantic models for request validation

class ParagraphCreate(BaseModel):
    text: str

class OptionCreate(BaseModel):
    text: str

class QuestionCreate(BaseModel):
    text: str

class MatchingHeadingCreate(BaseModel):
    paragraphs: List[ParagraphCreate]
    options: List[OptionCreate]
    questions: List[QuestionCreate]
