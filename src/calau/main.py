"""Main module for the Calau application."""


def greet(name: str) -> str:
    """
    Generate a greeting message.
    
    Args:
        name: The name to greet
        
    Returns:
        A greeting message string
    """
    if not name:
        raise ValueError("Name cannot be empty")
    return f"Hello, {name}!"


def add(a: int, b: int) -> int:
    """
    Add two numbers together.
    
    Args:
        a: First number
        b: Second number
        
    Returns:
        The sum of a and b
    """
    return a + b


def main():
    """Main entry point for the application."""
    print(greet("World"))
    print(f"2 + 2 = {add(2, 2)}")


if __name__ == "__main__":
    main()
