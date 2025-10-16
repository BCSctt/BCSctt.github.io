# app.py - Clean version
import gradio as gr
from transformers import pipeline

def analyze_sentiment(text):
    """Analyze sentiment using pre-trained model"""
    if not text or not text.strip():
        return {"Error": 1.0, "Message": "Please enter some text!"}
    
    try:
        # Use pre-trained model directly
        classifier = pipeline("sentiment-analysis")
        result = classifier(text)
        
        label = result[0]['label']
        score = result[0]['score']
        
        return {
            f"Sentiment: {label}": score,
            "Confidence": score
        }
    except Exception as e:
        return {"Error": 1.0, "Message": f"Analysis failed: {str(e)}"}

# Create interface
interface = gr.Interface(
    fn=analyze_sentiment,
    inputs=gr.Textbox(
        lines=3,
        placeholder="Enter text to analyze sentiment...",
        label="📝 Input Text"
    ),
    outputs=gr.Label(label="📊 Sentiment Analysis Results"),
    title="🎬 Movie Review Sentiment Analyzer",
    description="""
    Enter any text to determine if the sentiment is positive or negative.
    This tool uses a pre-trained AI model to analyze emotions in text.
    """,
    examples=[
        ["I absolutely love this product! It's fantastic and exceeded all my expectations!"],
        ["This movie was disappointing and poorly made. I want my money back."],
        ["The service was okay, nothing special but not terrible either."]
    ],
    allow_flagging="never"
)

# Launch the app
if __name__ == "__main__":
    interface.launch()
