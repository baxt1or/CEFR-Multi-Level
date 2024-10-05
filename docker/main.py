from fastapi import FastAPI

app= FastAPI()


app.get("/")
def home_page() -> dict[str, str]:
    return {"message":"Hello World"}