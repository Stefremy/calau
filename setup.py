from setuptools import setup, find_packages

setup(
    name="calau",
    version="0.1.0",
    description="A simple Python project",
    author="Stefremy",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    python_requires=">=3.8",
    install_requires=[],
    extras_require={
        "dev": [
            "pytest>=7.0.0",
            "pytest-cov>=4.0.0",
        ],
    },
)
