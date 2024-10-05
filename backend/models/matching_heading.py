from sqlalchemy import Column, Text, Integer, ForeignKey
from sqlalchemy.orm import relationship
from database.db import Base

# MatchingHeading model
class MatchingHeading(Base):
    __tablename__ = "matching_headings"

    id = Column(Integer, primary_key=True, index=True)

    # Relationships to other models
    paragraphs = relationship("Paragraph", back_populates="heading", cascade="all, delete-orphan")
    options = relationship("Option", back_populates="heading", cascade="all, delete-orphan")
    questions = relationship("Question", back_populates="heading", cascade="all, delete-orphan")


# Paragraph model
class Paragraph(Base):
    __tablename__ = "paragraphs"
    
    id = Column(Integer, primary_key=True, index=True)
    text = Column(Text, nullable=False)

    # Foreign key to link paragraph to a heading
    heading_id = Column(Integer, ForeignKey("matching_headings.id"))

    # Back reference to MatchingHeading
    heading = relationship("MatchingHeading", back_populates="paragraphs")


# Option model
class Option(Base):
    __tablename__ = "options"

    id = Column(Integer, primary_key=True, index=True)
    text = Column(Text, nullable=False)

    # Foreign key to link option to a heading
    heading_id = Column(Integer, ForeignKey("matching_headings.id"))

    # Back reference to MatchingHeading
    heading = relationship("MatchingHeading", back_populates="options")


# Question model
class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, index=True)
    text = Column(Text, nullable=False)

    # Foreign key to link question to a heading
    heading_id = Column(Integer, ForeignKey("matching_headings.id"))

    # Back reference to MatchingHeading
    heading = relationship("MatchingHeading", back_populates="questions")
