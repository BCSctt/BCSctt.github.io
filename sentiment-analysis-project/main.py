"""
Main test script for the sentiment analysis project.
This script demonstrates basic functionality and serves as a quick test.
"""

# Import the sentiment analysis pipeline directly from transformers
# This is the simplest way to use Hugging Face models
from transformers import pipeline

def main():
    """
    Main function to test basic sentiment analysis functionality.
    """
    print("Testing Hugging Face Sentiment Analysis Setup...")
    print("=" * 55)
    
    # create a sentiment analysis pipeline
    # Note: when no model is specified, Hugging Face chooses a good default
    # In production, always specify the exact model for consistency
    print("Loading pre-trained sentiment analysis model...")
    classifier = pipeline("sentiment-analysis")
    
    # Test with positive example
    print("\nTesting positive sentiment...")
    positive_text = "I love this setup! It's working perfectly!"
    result = classifier(positive_text)
    
    print(f"Input: '{positive_text}")
    print(f"Result: {result}")
    print(f"Sentiment: {result[0]['label']}")
    print(f"Confidence: {result[0]['score']:.4f}")
    
    print("\nAll tests completed successfully!")
    print("Your Hugging Face environment is ready for development!")
    
# Execute main function when script runs directly
if __name__ == "__main__":
    main()