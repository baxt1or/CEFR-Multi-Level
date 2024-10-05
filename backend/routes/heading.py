from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database.db import get_db
from models.matching_heading import MatchingHeading, Paragraph, Option, Question
from schemas.heading import MatchingHeadingCreate

router = APIRouter()

@router.post("/")
def create_matching_heading(matching_heading: MatchingHeadingCreate, db: Session = Depends(get_db)):
  
    db_heading = MatchingHeading()

    
    for paragraph in matching_heading.paragraphs:
        db_paragraph = Paragraph(text=paragraph.text, heading=db_heading)
        db.add(db_paragraph)

   
    for option in matching_heading.options:
        db_option = Option(text=option.text, heading=db_heading)
        db.add(db_option)

    
    for question in matching_heading.questions:
        db_question = Question(text=question.text, heading=db_heading)
        db.add(db_question)

   
    db.add(db_heading)
    db.commit()
    db.refresh(db_heading)

    return {"id": db_heading.id, "message": "Matching heading created successfully!"}
