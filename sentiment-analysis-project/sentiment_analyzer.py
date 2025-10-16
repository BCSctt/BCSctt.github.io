# Import necessary libraries from Hugging Face and PyTorch exosystem
# transformers: Provides pre-trained models and piplines
# datasets: For loading and managing datasets
# torch: PyTorch deep learning framework
# numpy: Numerical computing library
from transformers import pipeline, AutoTokenizer, AutoModelForSequenceClassification
from transformers import TrainingArguments, Trainer
import torch
from datasets import load_dataset
import numpy as np

class SentimentAnalyzer:
    """
    A comprehensive sentiment analysis class that can load pre-trained models,
    make predictions, and potentially be extended for fine-tuning.
    
    This class serves as the core engine for sentiment classification tasks.
    """
    
    def __init__(self, model_name="distilber-base-uncased"):
        """
        Initialize the SentimentAnalyzer with a specific model architecture.
        
        Args:
            model_name (str): The name of the pre-trained model to use as base
                            Default is "distilbert-base-uncased" - a lightweight,
                            fast version of BERT that's good for beginners
        """
        # Store the model name for potential future use (fine-tuning, etc.)
        self.model_name = model_name
        # Initialize classifier as None; we'll load it when necessary
        self.classifier = None
        
    def load_pretrained_model(self):
        """
        Load a pre-trained sentiment analysis model from Hugging Face Hub.
        
        This method downloads and initializes a model that's already been
        trained on sentiment analysis tasks. It's the quickest way to get
        started without training your own model.
        """
        print("Loading pre-trained sentiment analysis model from Hugging Face...")
        print("This may take a moment as the model downloads (only happens once)...")
        
        # Load a pre-trained sentiment analysis pipeline
        # This specific model is DistilBERT fine-tuned on the SST-2 dataset
        # SST-2 is a standard benchmark for binary sentiment classification
        
        self.classifier = pipeline (
            "sentiment-analysis",
            model="distilbert/distilbert-base-uncased-finetuned-sst-2-english"
        )
        
        print("Model loaded successfully!")
        print("Ready to analyze sentiment in text!")
        
    def predict(self, text):
        """
        Analyze the sentiment of a single text input.
        
        Args:
            text (str): The text to analyze for sentiment
            
        Returns:
            list: A list containing a dictionary with 'label' and 'score' keys
            Example: [{'label': 'POSITIVE', 'score': 0.9998}]
        """
        # Check if model is loaded, if not, load it automatically
        if self.classifier is None:
            print("First time running - loading model...")
            self.load_pretrained_model()
            
        # Run the sentiment analysis on the input text
        # Returns a list of results (even for single input)
        return self.classifier(text)
    
    def batch_predict(self, texts):
        """
        Analyze sentiment for multiple texts at once (batch processing).
        
        Args:
            texts (list): A list of strings to analyze
            
        Returns:
            list: List of sentiment analysis results for each input text
        """
        # Check if model is loaded, if not, load it automatically
        if self.classifier is None:
            print("First time running - loading model...")
            self.load_pretrained_model()
            
        # Process multiple texts in a single batch for better performance
        return self.classifier(texts)
    
# This section only runs when the script is executed directly (not imported)
# It is useful for testing class functionality
if __name__ == "__main__":
    """
    Main execution block for testing the SentimentAnalyzer class.
    This code demonstrates how to use the class and shows sample outputs.
    """
    
    # Create an instance of our sentiment analyzer
    print("Initializing Sentiment Analyzer...")
    analyzer = SentimentAnalyzer()
    
    # Define test texts with different sentiment types to demo capabilities
    test_texts = [
        "I love this movie! It's absolutely amazing and wonderful!", # clear positive
        "This film is terrible, boring, and a total waste of time!", # clear negative
        "The weather is okay, today, not great but not bad either." # neutral/mix
    ]
    
    print("\nAnalyzing sample texts...")
    print("=" * 50)
    
    # Loop through each test text and analyze its sentiment
    for i, text in enumerate(test_texts, 1):
        print(f"\nText {i}: \"{text}\"")
        
        # Get sentiment prediction
        result = analyzer.predict(text)
        
        # Extract the label (Pos/Neg) and confidence score
        sentiment_label = result[0]['label']
        confidence_score = result[0]['score']
        
        # Display results in a user-friendly format
        print(f"Sentiment: {sentiment_label}")
        print(f"Confidence: {confidence_score:4f} ({confidence_score*100:.2f}%)")
        
        # Add interpretation based on confidence level
        if confidence_score > 0.95:
            confidence_level = "Very High"
        elif confidence_score > 0.80:
            confidence_level = "High"
        elif confidence_score > 0.60:
            confidence_level = "Moderate"
        else:
            confidence_level = "Low"
            
        print(f"Confidence Level: {confidence_level}")