"""
Unit Test Suite for Saksham Tyagi Portfolio Website.
Written in Python 3.10+ using standard `unittest` framework.
"""

import os
import unittest

PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
INDEX_PATH = os.path.join(PROJECT_DIR, "index.html")
STYLE_PATH = os.path.join(PROJECT_DIR, "style.css")
SCRIPT_PATH = os.path.join(PROJECT_DIR, "script.js")


class TestPortfolioIntegrity(unittest.TestCase):
    """Test suite to validate portfolio HTML/CSS/JS file structure and resume contents."""

    def setUp(self) -> None:
        """Read index.html content before each test."""
        self.assertTrue(os.path.exists(INDEX_PATH), "index.html must exist")
        with open(INDEX_PATH, "r", encoding="utf-8") as f:
            self.html_content = f.read()

    def test_personal_metadata_present(self) -> None:
        """Verify Saksham Tyagi's primary contact & profile links are present."""
        self.assertIn("Saksham Tyagi", self.html_content)
        self.assertIn("sakshamtyagi767@gmail.com", self.html_content)
        self.assertIn("https://github.com/sakshamtyagi767", self.html_content)
        self.assertIn("https://www.linkedin.com/in/saksham-tyagi-672866281/", self.html_content)
        self.assertIn("https://leetcode.com/u/saksham767/", self.html_content)

    def test_all_four_projects_present(self) -> None:
        """Verify all 4 core resume projects are showcased in the HTML."""
        required_projects = [
            "Retail Customer Analytics Dashboard",
            "Market Pulse Financial Analytics Dashboard",
            "Automated Email Processing Pipeline",
            "System Performance Monitor & Analyzer"
        ]
        for project_title in required_projects:
            with self.subTest(project=project_title):
                self.assertIn(project_title, self.html_content)

    def test_technical_skills_present(self) -> None:
        """Verify core technical skills and certifications are listed."""
        required_skills = [
            "Python",
            "C++",
            "SQL",
            "FastAPI",
            "Pandas",
            "Scikit-learn",
            "LangChain",
            "n8n",
            "Docker",
            "AsyncIO",
            "pytest"
        ]
        for skill in required_skills:
            with self.subTest(skill=skill):
                self.assertIn(skill, self.html_content)

    def test_certifications_present(self) -> None:
        """Verify verified credentials are included."""
        self.assertIn("Anthropic AI Certificate", self.html_content)
        self.assertIn("Kaggle", self.html_content)
        self.assertIn("HackerRank", self.html_content)

    def test_contact_form_dom_ids(self) -> None:
        """Verify interactive form DOM IDs are present for JavaScript binding."""
        self.assertIn('id="portfolio-contact-form"', self.html_content)
        self.assertIn('id="form-name"', self.html_content)
        self.assertIn('id="form-email"', self.html_content)
        self.assertIn('id="form-message"', self.html_content)

    def test_stylesheet_and_script_files(self) -> None:
        """Verify style.css and script.js exist in the workspace."""
        self.assertTrue(os.path.exists(STYLE_PATH), "style.css must exist")
        self.assertTrue(os.path.exists(SCRIPT_PATH), "script.js must exist")


if __name__ == "__main__":
    unittest.main()
