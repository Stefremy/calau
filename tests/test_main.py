"""Tests for the main module."""

import pytest
from calau.main import greet, add


def test_greet():
    """Test the greet function with a valid name."""
    assert greet("Alice") == "Hello, Alice!"
    assert greet("Bob") == "Hello, Bob!"


def test_greet_empty_name():
    """Test that greet raises ValueError for empty name."""
    with pytest.raises(ValueError, match="Name cannot be empty"):
        greet("")


def test_add():
    """Test the add function."""
    assert add(2, 2) == 4
    assert add(0, 0) == 0
    assert add(-1, 1) == 0
    assert add(10, 5) == 15
