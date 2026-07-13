from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()

# Allow React frontend to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # restrict to your actual frontend URL in production
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load your trained model
model = joblib.load("exam_score_model.pkl")
# scaler = joblib.load("scaler.pkl")  # uncomment ONLY if you scaled X before training

# Input schema matching your actual training features
class PredictionInput(BaseModel):
    study_hours: float
    attendance: float
    sleep_hours: float
    internet_usage: float
    assignments_completed: float
    previous_score: float

@app.post("/predict")
def predict(data: PredictionInput):
    # Order MUST match the column order used in training: 
    # ['study_hours', 'attendance', 'sleep_hours', 'internet_usage', 'assignments_completed', 'previous_score']
    input_array = np.array([[
        data.study_hours,
        data.attendance,
        data.sleep_hours,
        data.internet_usage,
        data.assignments_completed,
        data.previous_score
    ]])
    # input_array = scaler.transform(input_array)  # uncomment if you used a scaler
    prediction = model.predict(input_array)
    return {"predicted_exam_score": float(prediction[0])}

@app.get("/")
def health_check():
    return {"status": "API is running"}