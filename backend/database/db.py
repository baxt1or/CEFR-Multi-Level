from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker,declarative_base


DATABASE_URL='postgresql://neondb_owner:0bwerTAntPH3@ep-white-recipe-a5x0smu4.us-east-2.aws.neon.tech/neondb?sslmode=require'


engine = create_engine(DATABASE_URL)

Base = declarative_base()

SessinLocal = sessionmaker(autoflush=False, autocommit=False, bind=engine)


def get_db():
    db = SessinLocal()

    try:
        yield db
    finally:
        db.close()