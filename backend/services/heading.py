from sqlalchemy.orm import Session
from models.matching_heading import Question, Paragraph, Option, MatchingHeading

def create_question(text: str, heading_id:int, db:Session):
    question = Question(question=text, heading_id=heading_id)

    db.add(question)
    db.commit()
    db.refresh(question)
    return question

def create_option(text: str, heading_id:int, db:Session):
    opt = Option(heading_id=heading_id, option=text)

    db.add(opt)
    db.commit()
    db.refresh(opt)
    return opt

def create_paragraph(text:str, heading_id:int, db:Session):
    par = Paragraph(heading_id=heading_id, paragraph=text)

    db.add(par)
    db.commit()
    db.refresh(par)
    return par


