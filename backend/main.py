from fastapi import FastAPI
from database.db import Base, engine
from routes.heading import router as heading_router

app = FastAPI()

app.include_router(heading_router)

Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)