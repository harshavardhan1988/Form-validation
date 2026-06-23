from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from database import engine, SessionLocal
from models import Base, UserDB

app = FastAPI()
Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    name: str
    email: str
    age: int

@app.get("/")
def home():
    return {"message": "API Running"}


@app.post("/users")
def create_user(user: User):

    db = SessionLocal()

    new_user = UserDB(
        name=user.name,
        email=user.email,
        age=user.age
    )

    db.add(new_user)
    db.commit()

    db.close()

    return {"message": "User saved successfully"}
@app.get("/users")
def get_users():

    db = SessionLocal()

    users = db.query(UserDB).all()

    db.close()

    return users
@app.delete("/users/{user_id}")
def delete_user(user_id: int):

    db = SessionLocal()

    user = db.query(UserDB).filter(
        UserDB.id == user_id
    ).first()

    if user:
        db.delete(user)
        db.commit()

    db.close()

    return {"message": "User deleted"}
@app.put("/users/{user_id}")
def update_user(user_id: int, user: User):

    db = SessionLocal()

    existing_user = db.query(UserDB).filter(
        UserDB.id == user_id
    ).first()

    if existing_user:
        existing_user.name = user.name
        existing_user.email = user.email
        existing_user.age = user.age

        db.commit()

    db.close()

    return {"message": "User updated"}
