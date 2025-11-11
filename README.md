# Calau

A simple Python project demonstrating best practices for project structure and configuration.

## Features

- Clean project structure
- Type hints for better code quality
- Unit tests with pytest
- Proper package configuration

## Installation

To install the project in development mode:

```bash
pip install -e .
```

To install with development dependencies:

```bash
pip install -e ".[dev]"
```

Or using requirements files:

```bash
pip install -r requirements-dev.txt
```

## Usage

Run the main application:

```bash
python -m calau.main
```

Or in Python:

```python
from calau.main import greet, add

print(greet("World"))
print(add(2, 2))
```

## Testing

Run tests with pytest:

```bash
pytest
```

Run tests with coverage:

```bash
pytest --cov=calau --cov-report=html
```

## Project Structure

```
calau/
├── src/
│   └── calau/
│       ├── __init__.py
│       └── main.py
├── tests/
│   ├── __init__.py
│   └── test_main.py
├── .gitignore
├── README.md
├── requirements.txt
├── requirements-dev.txt
└── setup.py
```

## Development

This project follows Python best practices:

- Source code in `src/calau/`
- Tests in `tests/`
- Type hints for function signatures
- Comprehensive documentation
- Unit tests for all functionality